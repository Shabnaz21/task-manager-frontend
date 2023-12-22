import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const useLogOut = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    const from =  '/';
    const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate(from, { replace: true });
            })
            
            .catch((error) => {
                // Handle logout error
                console.error('Logout failed:', error);
            })
    }
    return handleSignOut
};

export default useLogOut;