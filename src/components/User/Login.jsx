import { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";


const Login = () => {
    const emailRef = useRef(null);
    const { signIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();

        // signIn User
        signIn(email, password)
            .then(result => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: 'Congratulations, you are successfully logged in!',
                    showConfirmButton: false,
                    timer: 1500
                });
                const LoggedInUser = result.user;
                console.log(LoggedInUser);

                // navigate
                navigate(from, { replace: true });
            })


            .catch(error => {
                console.log(error);
                if (error.code === 'auth/invalid-login-credentials') {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Sorry! Invalid login. Please Give correct Email & Password.',
                        icon: 'error',
                        confirmButtonText: 'okay'
                    })
                    return ('error.message');
                } else if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Invalid email or password. Please try again.',
                        icon: 'error',
                        confirmButtonText: 'okay'
                    })
                }
                else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'An error occurred. Please try again later.',
                        icon: 'error',
                        confirmButtonText: 'okay'
                    })
                    return;
                }
            });
    }
    return (
        <>
            <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
                <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="flex-1 text-center hidden lg:flex">
                        <img src="https://i.ibb.co/93qLr3B/login-concept-illustration-114360-748.jpg" alt="" />
                    </div>
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div className="flex place-content-center">
                            <img src="https://i.ibb.co/Vjvym7r/logo.png" className="mr-3 h-6 sm:h-9" alt="NewVilla Logo" />
                            <span className="self-center whitespace-nowrap text-2xl font-semibold 
                    dark:text-white font-poppins">
                                NewVilla</span>
                        </div>
                        <div className="mt-12 flex flex-col items-center">
                            <h1 className="text-2xl xl:text-3xl font-poppins font-semibold">
                                Login
                            </h1>
                            <div className="w-full flex-1 mt-8">
                                <div className="flex flex-col items-center">
                                    <SocialLogin></SocialLogin>
                                </div>

                                <div className="my-12 border-b text-center">
                                    <div
                                        className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                        Or log in with e-mail
                                    </div>
                                </div>

                                <form onSubmit={handleLogin} className="mx-auto max-w-xs">
                                    <input ref={emailRef}
                                        className="w-full px-8 py-4 rounded-lg font-medium 
                                        bg-slate-100 border border-gray-200
                                         placeholder-gray-500 text-sm focus:outline-none
                                          focus:border-gray-400 focus:bg-white"  name="email"
                                        type="email" placeholder="Email" />
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium 
                                        bg-slate-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        name="password" type="password" placeholder="Password" />

                                    <button
                                        className="mt-5 font-semibold bg-red-500 text-white rounded-xl
                                         w-full py-2 ">
                                        Login
                                    </button>

                                    <p className="mt-6 text-sm text-gray-600 text-center">
                                        Haven&#x27;t an account?
                                        <Link to='/register'>
                                            <span className="border-b border-red-500 text-red-500 border-dotted ml-1 mr-1">
                                                Sign Up
                                            </span>
                                        </Link>

                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;