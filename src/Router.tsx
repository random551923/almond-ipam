import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SubnetsPage from "./pages/SubnetsPage";
import AboutPage from "./pages/AboutPage";
import BaseLayout from "./layouts/BaseLayout";
import SidebarLayout from "./layouts/SidebarLayout";

const router = createBrowserRouter([
    // Public routes - without auth and sidebar

    {
        element: <BaseLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/",
                element: <LandingPage />,
            },]
    },

    // Protected routes - with auth and sidebar
    {
        path: '/',
        element: <SidebarLayout />,
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