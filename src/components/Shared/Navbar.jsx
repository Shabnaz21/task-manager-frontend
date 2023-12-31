import { NavLink } from "react-router-dom";


const Navbar = () => {
    const menu = <>
        <li><NavLink to='/'
            className={({ isActive }) =>
            isActive ? 'btn btn-primary btn-sm' : 'btn btn-sm'
        }>Home</NavLink></li>
        <li><NavLink to='/features'
            className={({ isActive }) =>
                isActive ? 'btn btn-primary btn-sm' : 'btn btn-sm'
            }
        >Features</NavLink></li>
        <li><NavLink to='about'
            className={({ isActive }) =>
                isActive ? 'btn btn-primary btn-sm' : 'btn btn-sm'
            }
        >About Us</NavLink></li>
        <li><NavLink to='/contact'
            className={({ isActive }) =>
                isActive ? 'btn btn-primary btn-sm' : 'btn btn-sm'
            }
        >Contact</NavLink></li>
    </>
    return (
        <section className="container mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                          {menu}
                        </ul>
                    </div>
                    <a className="font-semibold text-2xl tracking-wider">SCC Technovision Inc.</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-2 gap-x-8">
                       {menu}
                    </ul>
                </div>
               
            </div>
        </section>
    );
};

export default Navbar;