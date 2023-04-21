/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState, useEffect,createContext } from "react";
import Typewriter from "typewriter-effect";
import Navbar from "./HomeComponents/Navbar";
import About from "./HomeComponents/About";
import Skills from "./HomeComponents/Skills";
import Projects from "./HomeComponents/Projects";
import Contact from "./HomeComponents/Contact";
import Social from "./HomeComponents/Social";
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';

export const UserContext = createContext();
export const UserrContext = createContext();

const Home = () => {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        setTheme('dark');
      }
      else {
        setTheme('light');
      }
    }, [])
    
    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [theme]);
  
    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark")
      }


    return (
        <>
            <div className="xl:h-screen lg:h-screen md:h-[35rem] sm:h-[33rem] ss:h-[30rem] bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
                
                <UserrContext.Provider value={handleThemeSwitch}><Social /></UserrContext.Provider>
                <UserContext.Provider value={theme}><Navbar /></UserContext.Provider>
                <img className="absolute bottom-0 right-0 lg:left-0 md:right-0 mx-auto h-5/6 object-cover"
                    src='./img/my.png'
                    alt=""
                />
                {/* circle */}
                <div className="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big bg-indigo-900 overflow-hidden rounded-full -z-10"></div>
                {/* animated text */}
                <div className="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:left-[8rem] md:text-6xl lg:left-[5rem] lg:text-7x1 xl:left-[10rem] xl:text-7xl font-bold">
                    <span className="text-gray-600 font-nunito">I'm a</span>
                    <p id="text" className="text-red-500" >
                    <Typewriter onInit={(typewriter)=> { typewriter
                                                        .typeString("PROGRAMMER")  
                                                        .pauseFor(1000)
                                                        .deleteAll()
                                                        .typeString("DEVELOPER")
                                                        .start();
                                                        }}
                    /></p>
                </div>
                {/* texts */}
                <div className="hidden lg:flex flex-col gap-5 rounded-md shadow-lg absolute top-0 bottom-0 m-auto right-10 bg-white dark:bg-slate-900 dark:shadow-slate-800 p-6 h-fit w-1/3">
                    <h1 className="text-4xl font-nunito font-bold text-indigo-900 dark:text-white">Hi, I'm Manish</h1>
                    <p className="text-gray-400">
                        with nil experience on web design and development. Lorem ipsum dolor sit amet consectetur adipisicing elit. N oumquam quo provident, facere minus temporibus veniam nostrum reprehenderit nihil?
                    </p>
                    <a className="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit transition-all hover:scale-110" href="#contact">Hire Me</a>
                </div>
            </div>
            <About />
            <Skills />
            <Projects />
            <Contact />
        </>
    )
}



export default Home;
// export {UserContext};