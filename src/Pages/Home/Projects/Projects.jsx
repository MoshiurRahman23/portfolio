import { Link } from 'react-router-dom';
import img1 from '../../../assets/Image/Digital learning.png'
import img2 from '../../../assets/project/BhaiBhai2.jpg'
import img3 from '../../../assets/project/Bis2.jpg'
import ProjectCart from './ProjectCart';


const Projects = () => {

    const blockData = [
        {
            id: 1,
            photo: img1,
            title: "Digital Learning",
            description: "Digital learning is the use of technology and digital tools to facilitate and enhance education, providing flexible and accessible opportunities for learning anytime and anywhere."

        },
        {
            id: 2,
            photo: img2,
            title: "Bhai Bhai Enterprise  ( Live project)",
            description: "ff."
        },
        {
            id: 3,
            photo: img3,
            title: "Restaurant",
            description: "A restaurant website typically features menus, hours of operation, location details, contact information, and reservation options, offering a user-friendly interface for potential diners to explore and engage with the establishment."
        },
        {
            id: 4,
            photo: img1,
            title: "Digital Learning",
            description: "Digital learning is the use of technology and digital tools to facilitate and enhance education, providing flexible and accessible opportunities for learning anytime and anywhere."
        },
        {
            id: 5,
            photo: img1,
            title: "Digital Learning",
            description: "Digital learning is the use of technology and digital tools to facilitate and enhance education, providing flexible and accessible opportunities for learning anytime and anywhere."
        }
    ]

    return (
        <div className="px-16 bg-slate-800">
            <h2 className="text-3xl text-white text-center py-5 hover:text-orange-500 underline font-semibold">Projects</h2>
            <div className="divider divider-warning"></div>
            <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center  gap-3 p-10'>
                {
                    blockData.map(data => <ProjectCart
                        key={data.id}
                        data={data}
                    ></ProjectCart>)
                }
            </section>
            <p className="px-12 py-3 text-center bg-slate-100">
                If you enjoyed this project, feel free to visit my GitHub profile to see more of my work. I regularly update my repositories with new projects and improvements. Your feedback and contributions are always welcome!
            </p>
            <div className="divider divider-warning"></div>
            <div className="text-center pb-4">
                <Link to='https://github.com/MoshiurRahman23?tab=repositories'>
                    <button className="btn btn-outline btn-error text-xl">View More Projects</button>
                </Link>
            </div>
        </div>
    );
};

export default Projects;