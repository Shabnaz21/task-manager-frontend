import { Link } from "react-router-dom";
import useAuth from "../../../components/Hooks/useAuth";
import useLogOut from "../../../components/Hooks/useLogOut";
import { IoMdAdd } from "react-icons/io";
const DasNav = () => {
    const logOut = useLogOut();
    const { user } = useAuth();
    return (
        <section className='container mx-auto'>
            <div className="navbar">
                <div className="flex-1 gap-5">
                    <div className='w-2/4'>
                        <input type="text" placeholder="Search" className="input input-bordered " />
                    </div>
                    <div>
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <div className="btn"
                            onClick={() =>
                                document.getElementById('my_modal_4').showModal()}>
                            <IoMdAdd />
                            <p>Add New Task</p>

                        </div>
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <form className="space-y-4">
                                    <div className='flex gap-x-5'>
                                        <div className='w-1/2'>
                                            <label className="label">
                                                <span className="text-base label-text">Title</span>
                                            </label>
                                            <input type="text" name='title' placeholder="Give a title for your task" className="w-full input input-bordered" />
                                        </div>
                                        <div className='w-1/2'>
                                            <label className="label">
                                                <span className="text-base label-text">Deadline</span>
                                            </label>
                                            <input type="date" name='deadline' placeholder="deadline" className="w-full input input-bordered" required />
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <select className="select select-bordered w-full max-w-xs">
                                            <option disabled selected>Priority</option>
                                            <option>Low</option>
                                            <option>Moderate</option>
                                            <option>High</option>
                                        </select>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Description</span>
                                        </label>
                                        <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                                        
                                    </div>
                                    
                                    <div>
                                        <button className="btn btn-block bg-primary text-white hover:bg-secondary
                             hover:text-white">Add Task</button>

                                    </div>
                                    
                                </form>
                                
                            </div>
                        </dialog>
                    </div>
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