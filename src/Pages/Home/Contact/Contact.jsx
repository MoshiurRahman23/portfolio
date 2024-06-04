import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="text-white p-12">
            <h1 className="text-3xl py-5 font-bold text-center underline hover:text-orange-500">Contact Me!</h1>
            <div className="flex p-8 gap-10">
                <div className="w-1/2 flex flex-col gap-7 p-5">
                    <div className="flex gap-5  justify-items-center">
                        <p><FaPhone className="">
                        </FaPhone></p>
                        <p> 01744611558</p>
                    </div>
                    <div className="flex gap-5">
                        <MdEmail ></MdEmail >
                        <Link to="">mdmoshiur.set@gmail.com</Link>
                    </div>
                </div>
                <div className="w-1/2">
                    <label className="form-control">
                        <input type="text" placeholder="Type here" className="w-full  py-3 p-3 my-3" />
                        <input type="text" placeholder="Type here" className="w-full  py-3 p-3 my-3" />
                        <textarea className="h-24 my-3 p-3" placeholder="Message"></textarea>
                    </label>
                    <button className="btn btn-outline btn-error">Send Me</button>
                </div>
            </div>

        </div>
    );
};

export default Contact;