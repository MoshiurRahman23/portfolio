import { Link } from 'react-router-dom';
import Working from '../../../assets/Image/work.jpg'

const Resume = () => {
    return (
        <div className="text-center mt-5 px-10" >
            <div className="text-center bg-base-200">
                <h2 className="text-3xl text-red-500  text-center py-3 hover:text-orange-500 underline font-semibold">Resume</h2>
                <p className="px-12 py-3 text-center">
                    Enthusiastic and motivated entry-level web developer with a strong foundation in HTML, CSS, and JavaScript. Eager to contribute to a dynamic team and grow my skills in front-end development. Passionate about building responsive and user-friendly web applications.
                </p>
            </div>
            <div className="divider divider-warning"></div>
            <h2 className="text-3xl text-white text-center py-5 hover:text-orange-500 underline font-semibold">Education</h2>

            <div className="text-center  gap-3 flex justify-between">
                <div className="w-full p-5 bg-neutral text-neutral-content">
                    <div className="py-8 px-2">
                        <h2 className="card-title">Computer Science & Engineering</h2>
                        <h1>2018-2022</h1>
                        <h1>Shanto-Marium University of Creative Technology,Uttara,Dhaka-1230</h1>
                        <small>Grade: CGPA -3.57 </small>
                    </div>
                </div>
                <div className="w-full p-5 bg-neutral text-neutral-content">
                    <div className="py-8 px-2">
                        <h2 className="card-title">Higher Secondary Certificate</h2>
                        <h1>2014-2016</h1>
                        <h1>Cantonment Public School & College, Saidpur, Nilphamari.</h1>
                        <small>Grade: GPA-4.33</small>
                    </div>
                </div>
                <div className="w-full p-5 bg-neutral text-neutral-content">
                    <div className="py-8 px-2">
                        <h2 className="card-title">Secondary School Certificate</h2>
                        <h1>2014-2016</h1>
                        <h1>Al Faruque Academy, Saidpur, Nilphamari</h1>
                        <small>Grade: GPA-5.00(golden)</small>
                    </div>
                </div>
            </div>
            <div className="divider divider-warning"></div>
            <div>
                <h2 className="text-3xl text-white text-center py-5 hover:text-orange-500 underline font-semibold">Working Experience</h2>
                <div className="hero h-96 text-white" style={{ backgroundImage: `url(${Working})` }}>
                    <div className="hero-content text-center">
                        <div className="w-full p-16 bg-slate-600 bg-opacity-30">
                            <h1 className="text-3xl font-bold">IT Executive</h1>
                            <p>February-2023 to March-2024</p>
                            <p className="py-6 text-xl font-bold">M/S Universel Trade (Robi Authorize Distribution House) Uttara, Dhaka-1230 .</p>
                            <>
                                <li> Pretups Software operated & Easy Load System Service provide</li>
                                <li>RDMS Software  operated & System Service provide</li>
                                <li>Technical support</li>
                            </>
                        </div>
                    </div>
                </div>
                <div className="py-3">
                    <Link to='/https://docs.google.com/document/d/12VPSnmgcPxTaK7_9J_LPeRLxlQc_z-xvqiCqhvNtBZU/edit'>
                        <button className="btn btn-outline btn-error text-xl">Download Resume</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Resume;