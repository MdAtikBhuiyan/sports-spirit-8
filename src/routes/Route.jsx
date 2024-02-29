import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import FeaturedServices from "../pages/FeaturedServices/FeaturedServices";
import AboutUS from "../pages/AboutUS/AboutUS";
import ContactUs from "../pages/ContactUs/ContactUs";
import MyCarts from "../pages/MyCarts/MyCarts";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/services',
                element: <PrivateRoute>
                    <FeaturedServices />
                </PrivateRoute>,
            },
            {
                path: '/service/:id',
                element: <PrivateRoute>
                    <ServiceDetails />
                </PrivateRoute>,
                loader: () => fetch('/services.json')

            },
            {
                path: '/carts',
                element: <MyCarts />
            },
            {
                path: '/about',
                element: <AboutUS />
            },
            {
                path: '/contact',
                element: <ContactUs />
            }
        ]
    },
]);

export default router;