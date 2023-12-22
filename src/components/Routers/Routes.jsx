import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../../Home/Home";
import Root from "../Shared/Root";
import Error from "../Shared/Error";


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
]);

export default router;