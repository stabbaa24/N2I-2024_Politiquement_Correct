import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Page404 from "./pages/Page404";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import React from "react";

const router = createBrowserRouter([
    {
        path: '/signup',
        element: <SignUp/>
    },
    {
        path: '/signin',
        element: <SignIn/>
    },
    {
        path: "/",
        element:
            <Layout />,
        children: [
            { path: '', element: <Home/> },
        ]
    },
    {
        path: "404",
        element: <Page404 />,
    },
    {
        path: "*",
        element: <Navigate to="/404" />,
    },
]);

function Router() {
    return <RouterProvider router={router} />;
}

export default Router;