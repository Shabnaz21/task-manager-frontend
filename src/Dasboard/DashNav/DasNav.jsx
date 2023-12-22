import { Link } from "react-router-dom";
import useAuth from "../../components/Hooks/useAuth";
import useLogOut from "../../components/Hooks/useLogOut";

const DasNav = () => {
    const logOut = useLogOut();
    const { user } = useAuth();
    return (
        <section className='container mx-auto'>
            <div className="navbar">
                <div className="flex-1 gap-5">
                    <input type="text" placeholder="Search" className="input input-bordered w-2/4" />  
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        {
                            user ? (
                                <div className="flex-none gap-2">
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-12 rounded-full">
                                                <img alt={user.displayName} src={user.photoURL} />
                                            </div>
                                        </div>
                                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                            <li>
                                                <Link to='dashboard/user-profile'
                                                >{user.displayName}</Link>
                                            </li>
                                            <li><a onClick={logOut}>Logout</a></li>
                                        </ul>
                                    </div>
                                </div>

                            ) :
                                <></>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DasNav;