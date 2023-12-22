import { Outlet } from "react-router-dom";
import SideNavbar from "./SideNavbar";

const DashboardLayout = () => {
    return (
        <>
            <div className='relative min-h-screen md:flex md:flex-col'>
                <div className="hidden md:block">
                    <SideNavbar></SideNavbar>
                </div>
                <div className='flex-1  md:ml-64'>
                    <div className='p-5'>
                        {/* Outlet for dynamic contents */}
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>

        </>
    );
};

export default DashboardLayout;