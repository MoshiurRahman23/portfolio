import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-gray-800 text-white">
                <nav className="grid grid-flow-col gap-4">
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/' className="link link-hover">About me</Link>
                    <Link to='/' className="link link-hover">Projects</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                </nav>
                <nav className="flex gap-8">
                    <button className="btn btn-square btn-outline">
                        <Link to='https://www.linkedin.com/in/md-moshiur-rahman-98622b28a/'> <FaLinkedin className=" h-8 w-8  text-blue-700"></FaLinkedin></Link>
                    </button>
                    <button className="btn btn-square btn-outline">
                        <Link to='https://www.youtube.com/@M-Rahman365'> <FaYoutube className=" h-8 w-8 text-red-600"></FaYoutube></Link>
                    </button>
                    <button className="btn btn-square btn-outline">
                        <Link to='https://www.facebook.com/Md.Moshiur.Rahman.Faruk/'> <FaFacebookF className=" h-8 w-8 text-blue-700"></FaFacebookF></Link>
                    </button>
                    <button className="btn btn-square btn-outline">
                        <Link to='/'> <FaInstagram className=" h-8 w-8 text-red-700"></FaInstagram></Link>
                    </button>
                    <button className="btn btn-square btn-outline">
                        <Link to='/'> <FaTwitter className=" h-8 w-8 text-blue-700"></FaTwitter></Link>
                    </button>
                </nav>
                <aside>
                    <p>Copyright © 2024 - All right reserved by Moshiur Rahman</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;