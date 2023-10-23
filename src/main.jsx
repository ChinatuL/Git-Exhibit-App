import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Form, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ErrorBoundary } from "react-error-boundary";
import {Home, ErrorTest, NotFound, Repo} from "./Pages"
import ErrorFallback from "./Components/ErrorFallback";
import "./index.css";

const routes = [
    {
        path: "/",
        element: (
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Home />
            </ErrorBoundary>
        ),
        children: [
            {
                path: "/repo/:reponame",
                element: (
                    <ErrorBoundary>
                        <Repo />
                    </ErrorBoundary>
                ),
            },
        ],
    },
    {
        path: "/errortest",
        element: <ErrorTest />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HelmetProvider>
            <RouterProvider router={router} />
        </HelmetProvider>
    </React.StrictMode>
);
