import { GitHubBanner, Refine } from "@refinedev/core";
import {
    notificationProvider,
    Layout,
    LightTheme,
    ErrorComponent,
} from "@refinedev/mantine";
import { NotificationsProvider } from "@mantine/notifications";
import { MantineProvider, Global } from "@mantine/core";
import dataProvider from "@refinedev/simple-rest";
import routerProvider, {
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BlogPostList } from "pages/blog-posts/list";
import { BlogPostCreate } from "pages/blog-posts/create";
import { BlogPostEdit } from "pages/blog-posts/edit";
import { BlogPostShow } from "pages/blog-posts/show";

function App() {
    return (
        <BrowserRouter>
            <GitHubBanner />
            <MantineProvider
                theme={LightTheme}
                withNormalizeCSS
                withGlobalStyles
            >
                <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />
                <NotificationsProvider position="top-right">
                    <Refine
                        routerProvider={routerProvider}
                        dataProvider={dataProvider(
                            "https://api.fake-rest.refine.dev",
                        )}
                        notificationProvider={notificationProvider}
                        resources={[
                            {
                                name: "blog_posts",
                                list: "/blog-posts",
                                show: "/blog-posts/show/:id",
                                create: "/blog-posts/create",
                                edit: "/blog-posts/edit/:id",
                                meta: {
                                    canDelete: true,
                                },
                            },
                        ]}
                        options={{
                            syncWithLocation: true,
                            warnWhenUnsavedChanges: true,
                        }}
                    >
                        <Layout>
                            <Routes>
                                <Route
                                    index
                                    element={
                                        <NavigateToResource resource="blog_posts" />
                                    }
                                />

                                <Route path="/blog-posts">
                                    <Route index element={<BlogPostList />} />
                                    <Route
                                        path="show/:id"
                                        element={<BlogPostShow />}
                                    />
                                    <Route
                                        path="create"
                                        element={<BlogPostCreate />}
                                    />
                                    <Route
                                        path="edit/:id"
                                        element={<BlogPostEdit />}
                                    />
                                </Route>

                                <Route path="*" element={<ErrorComponent />} />
                            </Routes>
                        </Layout>
                        <UnsavedChangesNotifier />
                    </Refine>
                </NotificationsProvider>
            </MantineProvider>
        </BrowserRouter>
    );
}

export default App;
