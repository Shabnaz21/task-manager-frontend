import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section className="container mx-auto">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row lg:gap-x-10">
                    <div className="text-center lg:text-left max-w-5xl ">
                        <h1 className="text-4xl font-bold">Welcome to TaskFlowHub</h1>
                        <p className="text-md tracking-widest pl-2">Your Ultimate Task Management Platform</p>
                        <p className="py-6">Streamline your workflow, collaborate seamlessly, and stay organized with TaskSphere. Effortlessly manage your tasks from anywhere, at any time.</p>
                        <Link to='/dashboard'><button className="btn btn-primary">Let&apos;s Explore</button></Link>
                    </div>
                    <div className="card shrink-0 w-full max-w-3xl">
                        <img
                            src="https://i.ibb.co/VvVYJRY/task-management-project-manager-tool-business-software-productivity-online-platform-task-management.jpg"
                            alt="Banner" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;