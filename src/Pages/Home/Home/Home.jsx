import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Resume></Resume>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;