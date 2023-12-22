import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoutes = ({ children }) => {

    const { loading, user } = useAuth()
    const location = useLocation();

    // loading
    if (loading) {
        return <div className="flex place-content-center">
            <div className="loading loading-spinner loading-lg"></div>
        </div>
    }
    // user
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/register' replace></Navigate>
};

export default PrivateRoutes;