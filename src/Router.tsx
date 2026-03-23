import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MainLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SubnetsPage from "./pages/SubnetsPage";
import AboutPage from "./pages/AboutPage";
import BaseLayout from "./layouts/BaseLayout";

const router = createBrowserRouter([
    // Pages Without Sidebar

    {
        element: <BaseLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/",
                element: <LandingPage />,
            },]
    },

    // Pages With Sidebar
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: '/home',
                element: <HomePage />
            },
            {
                path: '/subnets',
                element: <SubnetsPage />
            },
            {
                path: '/about',
                element: <AboutPage />
            },
        ],
    },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;