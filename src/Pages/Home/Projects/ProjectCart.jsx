

const ProjectCart = ({ data }) => {
    const { photo, title, description } = data;
    return (
        <div className="card card-compact w-96 bg-slate-800 text-white shadow-xl">
            <div className="avatar">
                <div className="w-full h-64">
                    <img src={photo} />
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ProjectCart;