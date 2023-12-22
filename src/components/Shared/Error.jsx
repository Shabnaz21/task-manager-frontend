import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
const Error = () => {
    return (
        <div>
            <Link to='/' >
                <div className="flex items-center gap-3 mx-48 mt-10">
                    <p><BsArrowLeft></BsArrowLeft></p>
                    <h2 className="text-2xl font-Rancho">Back to home </h2>
                </div>
            </Link>
            <div className="flex place-content-center">
                <img src="https://images2.imgbox.com/0c/4d/4U08KPnC_o.gif" alt="" />
            </div>
        </div>
    );
};

export default Error;