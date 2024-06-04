import { Link } from 'react-router-dom';
import second from '../../../assets/Image/Moshiur (3).png'

const Banner = () => {
    return (
        <div className="hero bg-slate-800 text-white">
            <div className="hero-content flex-col lg:gap-96 lg:flex-row-reverse justify-between">
                <img src={second} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='flex flex-col'>
                    <h1 className="text-5xl font-bold py-7">Hello....!!!</h1>
                    <p className='text-red-500 text-xl font-semibold'>This Is,</p>
                    <h2 className="text-5xl font-bold text-red-600 py-5">Moshiur Rahman</h2>
                    <Link to='project'>
                        <button className="btn btn-outline  btn-error text-xl">Please View My Work</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;