import {
    ComparisonOperator,
    CondOperator,
    QueryJoin,
    QueryJoinArr,
    QuerySort,
    QuerySortArr,
    QuerySortOperator,
    RequestQueryBuilder,
    SCondition,
} from "@nestjsx/crud-request";
import {
    CrudFilter,
    CrudFilters as RefineCrudFilter,
    CrudOperators,
    CrudSorting,
    DataProvider,
    HttpError,
    Pagination,
} from "@refinedev/core";
import axios, { AxiosInstance } from "axios";
import { stringify } from "query-string";

type SortBy = QuerySort | QuerySortArr | Array<QuerySort | QuerySortArr>;

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const customError: HttpError = {
            ...error,
            message: error.response?.data?.message,
            statusCode: error.response?.status,
        };

        return Promise.reject(customError);
    },
);

const mapOperator = (operator: CrudOperators): ComparisonOperator => {
    switch (operator) {
        case "and":
            return "$and";
        case "or":
            return "$or";
        case "ne":
            return CondOperator.NOT_EQUALS;
        case "lt":
            return CondOperator.LOWER_THAN;
        case "gt":
            return CondOperator.GREATER_THAN;
        case "lte":
            return CondOperator.LOWER_THAN_EQUALS;
        case "gte":
            return CondOperator.GREATER_THAN_EQUALS;
        case "in":
            return CondOperator.IN;
        case "nin":
            return CondOperator.NOT_IN;
        case "contains":
            return CondOperator.CONTAINS_LOW;
        case "ncontains":
            return CondOperator.EXCLUDES_LOW;
        case "containss":
            return CondOperator.CONTAINS;
        case "ncontainss":
            return CondOperator.EXCLUDES;
        case "null":
            return CondOperator.IS_NULL;
        case "startswith":
            return CondOperator.STARTS_LOW;
        case "startswiths":
            return CondOperator.STARTS;
        case "endswith":
            return CondOperator.ENDS_LOW;
        case "endswiths":
            return CondOperator.ENDS;
    }

    return CondOperator.EQUALS;
};

const generateSort = (sort?: CrudSorting): SortBy | undefined => {
    if (sort && sort.length > 0) {
        const multipleSort: SortBy = [];
        sort.map(({ field, order }) => {
            if (field && order) {
                multipleSort.push({
                    field: field,
                    order: order.toUpperCase() as QuerySortOperator,
                });
            }
        });
        return multipleSort;
    }

    return;
};

const createSearchQuery = (filter: CrudFilter): SCondition => {
    if (
        filter.operator !== "and" &&
        filter.operator !== "or" &&
        "field" in filter
    ) {
        // query
        return {
            [filter.field]: {
                [mapOperator(filter.operator)]: filter.value,
            },
        };
    }

    const { operator } = filter;

    return {
        [mapOperator(operator)]: filter.value.map((filter) =>
            createSearchQuery(filter),
        ),
    };
};

const generateSearchFilter = (filters: RefineCrudFilter): SCondition => {
    return createSearchQuery({
        operator: "and",
        value: filters,
    });
};

const handleFilter = (
    query: RequestQueryBuilder,
    filters?: RefineCrudFilter,
) => {
    if (filters) {
        query.search(generateSearchFilter(filters));
    }
    return query;
};

const handleJoin = (
    query: RequestQueryBuilder,
    join?: QueryJoin | QueryJoinArr | (QueryJoin | QueryJoinArr)[],
) => {
    if (join) {
        query.setJoin(join);
    }
    return query;
};

const handlePagination = (
    query: RequestQueryBuilder,
    pagination?: Pagination,
) => {
    const { current = 1, pageSize = 10, mode = "server" } = pagination ?? {};

    if (mode === "server") {
        query
            .setLimit(pageSize)
            .setPage(current)
            .setOffset((current - 1) * pageSize);
    }

    return query;
};

const handleSort = (query: RequestQueryBuilder, sorters?: CrudSorting) => {
    const sortBy = generateSort(sorters);
    if (sortBy) {
        query.sortBy(sortBy);
    }

    return query;
};

const NestsxCrud = (
    apiUrl: string,
    httpClient: AxiosInstance = axiosInstance,
): Required<DataProvider> => ({
    getList: async ({ resource, pagination, filters, sorters, meta }) => {
        const url = `${apiUrl}/${resource}`;

        let query = RequestQueryBuilder.create();

        query = handleFilter(query, filters);
        query = handleJoin(query, meta?.join);
        query = handlePagination(query, pagination);
        query = handleSort(query, sorters);

        const { data } = await httpClient.get(`${url}?${query.query()}`);

        if (pagination?.mode == "off") {
            return {
                data: data,
                total: data.length,
            };
        } else {
            return {
                data: data.data,
                total: data.total,
            };
        }
    },

    getMany: async ({ resource, ids, meta }) => {
        const url = `${apiUrl}/${resource}`;

        let query = RequestQueryBuilder.create().setFilter({
            field: "id",
            operator: CondOperator.IN,
            value: ids,
        });

        query = handleJoin(query, meta?.join);

        const { data } = await httpClient.get(`${url}?${query.query()}`);

        return {
            data,
        };
    },

    create: async ({ resource, variables }) => {
        const url = `${apiUrl}/${resource}`;

        const { data } = await httpClient.post(url, variables);

        return {
            data,
        };
    },

    update: async ({ resource, id, variables }) => {
        const url = `${apiUrl}/${resource}/${id}`;

        const { data } = await httpClient.patch(url, variables);

        return {
            data,
        };
    },

    updateMany: async ({ resource, ids, variables }) => {
        const response = await Promise.all(
            ids.map(async (id) => {
                const { data } = await httpClient.patch(
                    `${apiUrl}/${resource}/${id}`,
                    variables,
                );
                return data;
            }),
        );

        return { data: response };
    },

    createMany: async ({ resource, variables }) => {
        const url = `${apiUrl}/${resource}/bulk`;

        const { data } = await httpClient.post(url, { bulk: variables });

        return {
            data,
        };
    },

    getOne: async ({ resource, id }) => {
        const url = `${apiUrl}/${resource}/${id}`;

        const { data } = await httpClient.get(url);

        return {
            data,
        };
    },

    deleteOne: async ({ resource, id }) => {
        const url = `${apiUrl}/${resource}/${id}`;

        const { data } = await httpClient.delete(url);

        return {
            data,
        };
    },

    deleteMany: async ({ resource, ids }) => {
        const response = await Promise.all(
            ids.map(async (id) => {
                const { data } = await httpClient.delete(
                    `${apiUrl}/${resource}/${id}`,
                );
                return data;
            }),
        );
        return { data: response };
    },

    getApiUrl: () => {
        return apiUrl;
    },

    custom: async ({
        url,
        method,
        meta,
        filters,
        sorters,
        payload,
        query,
        headers,
    }) => {
        let requestQueryBuilder = RequestQueryBuilder.create();

        requestQueryBuilder = handleFilter(requestQueryBuilder, filters);

        requestQueryBuilder = handleJoin(requestQueryBuilder, meta?.join);

        requestQueryBuilder = handleSort(requestQueryBuilder, sorters);

        let requestUrl = `${url}?${requestQueryBuilder.query()}`;

        if (query) {
            requestUrl = `${requestUrl}&${stringify(query)}`;
        }

        if (headers) {
            httpClient.defaults.headers = {
                ...httpClient.defaults.headers,
                ...headers,
            };
        }

        let axiosResponse;
        switch (method) {
            case "put":
            case "post":
            case "patch":
                axiosResponse = await httpClient[method](url, payload);
                break;
            case "delete":
                axiosResponse = await httpClient.delete(url, {
                    data: payload,
                });
                break;
            default:
                axiosResponse = await httpClient.get(requestUrl);
                break;
        }

        const { data } = axiosResponse;

        return Promise.resolve({ data });
    },
});

export default NestsxCrud;
