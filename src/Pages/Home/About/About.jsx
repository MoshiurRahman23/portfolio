import second from '../../../assets/Image/Moshiur.jpg'

const About = () => {
    return (
        <div className="text-center text-white px-10">
            <h1 className="text-3xl py-5 font-bold underline hover:text-orange-500">About Me!</h1>
            <div className='flex gap-5 pb-5'>
                <div className="bg-neutral w-1/2">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="avatar">
                            <div className="w-48 rounded-full">
                                <img src={second} />
                            </div>
                        </div>
                        <div>
                            <div className='px-5 text-start'>
                                <h1 className='text-xl'>Name: Md Moshiur Rahman</h1>
                                <h1 className='text-xl'>Job Role: Not Yet</h1>
                                <h1 className='text-xl'>Experience: About Two Years Practice</h1>
                                <h1 className='text-xl'>Address: Uttara,Dhaka,Bangladesh</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 bg-neutral text-neutral-content">
                    <div className="card-body px-8 py-16 items-center text-center">
                        <h2 className="card-title">Objective !!!</h2>
                        <p className='text-start'>
                            Enthusiastic and motivated entry-level web developer with a strong foundation in HTML, CSS, and JavaScript. Eager to contribute to a dynamic team and grow my skills in front-end development. Passionate about building responsive and user-friendly web applications.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;