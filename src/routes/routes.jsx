import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Details/Details";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRout";
import About from "../Pages/About/About";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch("/estates.json")

            },
            {
                path: 'details/:id',
                element:<PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch("/estates.json")
            },
            {
                path:'login',
                element:<Login></Login>,

            },
            {
                path:'register',
                element:<Register></Register>,
            },
            {
                path:'about',
                element:<About></About>,
            },
        ]
    }
]);
export default router;