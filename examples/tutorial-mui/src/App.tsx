import { GitHubBanner, Refine } from "@refinedev/core";
import {
    notificationProvider,
    RefineSnackbarProvider,
    ThemedLayout,
    RefineThemes,
    ErrorComponent,
} from "@refinedev/mui";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, GlobalStyles } from "@mui/material";
import dataProvider from "@refinedev/simple-rest";
import routerProvider, {
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BlogPostList } from "pages/blog-posts/list";
import { BlogPostEdit } from "pages/blog-posts/edit";
import { BlogPostCreate } from "pages/blog-posts/create";
import { BlogPostShow } from "pages/blog-posts/show";

function App() {
    return (
        <BrowserRouter>
            <GitHubBanner />
            <ThemeProvider theme={RefineThemes.Blue}>
                <CssBaseline />
                <GlobalStyles
                    styles={{ html: { WebkitFontSmoothing: "auto" } }}
                />
                <RefineSnackbarProvider>
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
                        <ThemedLayout>
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
                                        path="/blog-posts/show/:id"
                                        element={<BlogPostShow />}
                                    />
                                    <Route
                                        path="/blog-posts/create"
                                        element={<BlogPostCreate />}
                                    />
                                    <Route
                                        path="/blog-posts/edit/:id"
                                        element={<BlogPostEdit />}
                                    />
                                </Route>

                                <Route path="*" element={<ErrorComponent />} />
                            </Routes>
                        </ThemedLayout>
                        <UnsavedChangesNotifier />
                    </Refine>
                </RefineSnackbarProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
