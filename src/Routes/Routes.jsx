import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/about",
            element: <About></About>
        },
        {
            path: "/services",
            element: <Services></Services>
        },
        {
            path: "/blog",
            element: <Blog></Blog>
        },
        {
            path: "/contact",
            element: <Contact></Contact>
        },
        {
            path: "/signin",
            element: <LogIn></LogIn>
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        },
        {
            path: "/checkout/:id",
            element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
            loader: ({params}) => fetch(`https://car-doctor-server-eight-sooty.vercel.app/services/${params.id}`)
        },
        {
            path: "/bookings",
            element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>
        }
    ]
  },
]);

export default router;
