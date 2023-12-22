import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../../Home/Home";
import Root from "../Shared/Root";
import Error from "../Shared/Error";
import DashboardLayout from "../../Dasboard/Layout/Dashboardlayout";
import Register from "../User/Register";
import Login from "../User/Login";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            }
        ]
    },
    {
        path: '/register',
        element:<Register></Register>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes>
            <DashboardLayout></DashboardLayout>
        </PrivateRoutes>
    }
   
]);

export default router;