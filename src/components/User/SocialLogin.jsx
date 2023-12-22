import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { FaGithub, FaGoogle } from "react-icons/fa";
import useAxios from "../Hooks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";


const SocialLogin = () => {
    const axios = useAxios();
    const navigate = useNavigate();
    const { googleSignIn, githubSignIn } = useContext(AuthContext)

    //google
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    image: result.user?.photoURL
                }
                //entry database 
                axios.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: 'Congratulations! Successfully Your account crated',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/');
                        }
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            });

    }
    // git 
    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                console.log(result.user);

                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    image: result.user?.photoURL
                }
                //entry database 
                axios.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: 'Congratulations! Successfully Your account crated',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/');
                        }
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            })
    }
    return (
        <>
            <button onClick={handleGoogleSignIn}
                className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3
                                         bg-slate-100 text-gray-800
                                         flex items-center justify-center
                                         transition-all duration-300 ease-in-out
                                         focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                <div className="bg-white p-2 rounded-full">
                    <FaGoogle className='text-red-500' />
                </div>
                <span className="ml-4">
                    Continue with Google
                </span>
            </button>
            <button onClick={handleGithubSignIn}
                className="w-full max-w-xs 
                                        font-bold shadow-sm rounded-lg py-3 bg-slate-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                <div className="bg-white p-2 rounded-full">
                    <FaGithub className='text-red-500' />
                </div>
                <span className="ml-4">
                    Continue with GitHub
                </span>
            </button>
        </>
    );
};

export default SocialLogin;