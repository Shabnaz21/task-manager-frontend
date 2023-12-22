import { MdOutlineRateReview } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { AiOutlineProfile } from "react-icons/ai";
import { RiSecurePaymentLine } from "react-icons/ri";
import { Link, NavLink } from 'react-router-dom';


const SideNavbar = () => {

    return (
        <>
            <div className="relative lg:block navbar-menu">
                <nav
                    className="fixed top-0 transition-all lg:mt-0 
                    left-0  bottom-0 flex flex-col w-[280px] bg-gray-800 overflow-hidden z-50"
                    id="sidenav">
                    <div className="flex items-center w-full px-4 pt-4 pb-4 border-b border-gray-600
                     ">
                        <Link to='/'>
                            <div className="self-center whitespace-nowrap text-2xl font-semibold 
                   text-white tracking-widest">
                                TaskFlowHub</div>
                        </Link>
                    </div>
                    <div className="pb-6 mt-4 overflow-x-hidden overflow-y-auto">
                        <ul className="mb-8 text-sm">
                            <>
                                <li className="text-gray-300 text-xl m-2">
                                    <NavLink to='/dashboard/user-profile'
                                        className={({ isActive }) =>
                                            isActive ? 'flex items-center px-6 text-[#5fd2e9] md:text-lg' : 'flex px-6 items-center md:text-lg'
                                        }
                                    >
                                        <li className="mb-2 flex items-center gap-3">
                                            <ImProfile ></ImProfile>My Profile
                                        </li></NavLink>
                                    <NavLink to=''
                                        className={({ isActive }) =>
                                            isActive ? 'flex items-center px-6 text-[#5fd2e9] md:text-lg' : 'flex px-6 items-center md:text-lg'
                                        }
                                    >
                                        <li className="mb-2 flex items-center gap-3">
                                            <AiOutlineProfile />
                                            Task Overview 
                                        </li>
                                    </NavLink>
                                    <NavLink to=''
                                        className={({ isActive }) =>
                                            isActive ?
                                                'flex items-center px-6 text-[#5fd2e9] md:text-lg'
                                                : 'flex px-6 items-center md:text-lg'
                                        }

                                    >
                                        <li className="mb-2 flex items-center gap-3">
                                            <RiSecurePaymentLine /> Task Lists</li>
                                    </NavLink>
                                    <NavLink to='/dashboard/my-reviews'
                                        className={({ isActive }) =>
                                            isActive ? 'flex items-center px-6 text-[#5fd2e9] md:text-lg' : 'flex px-6 items-center md:text-lg'
                                        }
                                    >
                                        <li className="mb-2 flex items-center gap-3">
                                            <MdOutlineRateReview />Task Details</li>
                                    </NavLink>

                                </li>
                            </>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default SideNavbar;