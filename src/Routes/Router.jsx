import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Home/About/About";
import Projects from "../Pages/Home/Projects/Projects";
import Contact from "../Pages/Home/Contact/Contact";
import Resume from "../Pages/Home/Resume/Resume";
import Skills from "../Pages/Home/Skills/Skills";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/project',
                element: <Projects></Projects>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/resume',
                element: <Resume></Resume>
            },
            {
                path: '/skill',
                element: <Skills></Skills>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]

    },
]);
