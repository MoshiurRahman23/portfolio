import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'orange', 'lightblue'];
const data = [
    {
        name: 'HTML/CSS',
        uv: 90,
        pv: 24,
        amt: 24,
    },
    {
        name: 'Bootstrap & Tailwind',
        uv: 80,
        pv: 13,
        amt: 22,
    },
    {
        name: 'JavaScript (ES6+)',
        uv: 75,
        pv: 98,
        amt: 22,
    },
    {
        name: 'React/Vue.js',
        uv: 75,
        pv: 39,
        amt: 20,
    },
    {
        name: ' Node.js',
        uv: 60,
        pv: 48,
        amt: 21,
    },
    {
        name: 'API',
        uv: 55,
        pv: 38,
        amt: 25,
    },
    {
        name: 'MongoDB',
        uv: 65,
        pv: 38,
        amt: 25,
    },
    {
        name: 'Next.js',
        uv: 50,
        pv: 38,
        amt: 25,
    },
    {
        name: 'git/vercel',
        uv: 65,
        pv: 48,
        amt: 21,
    },
];


const Skills = () => {

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className="px-10  my-5 text-white">
            <div className="hero">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="text-white">
                        <h1 className="mb-5 text-3xl  font-bold hover:text-orange-500 underline">Skills</h1>
                        <p className='text-center bg-slate-50 text-black  py-5'>Here the basic skills of the coding sector are represented with the help of Barchart, I Hope all are getting a clear idea and evaluating me with your coding knowledge.</p>
                        <div className="divider divider-warning"></div>
                        <div className=''>
                            <BarChart
                                className="text-white"
                                width={1400}
                                height={300}
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </div>
                        <h1 className='text-xl font-semibold text-center underline text-white'>Skills BarChat</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;