/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState,useContext} from 'react';
import { UserContext } from '../Home';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
   
    const theme = useContext(UserContext);
    const [toggle,setToggle] = useState(false);

    return (
        <>
            <nav className='w-full fixed top-0 bg-white z-10 shadow-xl dark:bg-slate-900'>
                <div className='container mx-auto py-5 flex items-center justify-between'>
                    <div className="flex items-center gap-2 sm:ml-4">
                        <span><img className="w-8 cursor-pointer xl:ml-2 lg:ml-2 md:ml-2 sm:ml-2"
                            src='./img/m.png'
                            alt="myLogo"/>
                        </span>
                    </div>
                    <ul className="hidden md:flex space-x-10 text-gray-600 dark:text-gray-100 text-sm font-semibold uppercase">
                        <li className="hover:text-gray-700 transition-all hover:scale-110">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="hover:text-gray-700 transition-all hover:scale-110">
                            <Link to="/about">About Me</Link>
                        </li>
                        <li className="hover:text-gray-700 transition-all hover:scale-110">
                            <Link to="/blank">Resume</Link>
                        </li>
                        <li className="hover:text-gray-700 transition-all hover:scale-110">
                            <Link to="/skills">Skills</Link>
                        </li>
                        <li className="hover:text-gray-700 transition-all hover:scale-110">
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li className="hover:text-gray-700 transition-all hover:scale-110">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>

                    <div className="md:hidden cursor-pointer z-20 sm:m-0 ss:m-0"
                        onClick={()=>{setToggle(!toggle)}}
                    >
                        {toggle?<span className='mr-2'><MenuIcon sx={{ fontSize: "35px", color:"lightblue" }} /></span>:(theme==='dark')?<span className='mr-2'><MenuOpenIcon sx={{ fontSize: "35px", color:"rgb(163, 163, 229)"}} /></span>:<span className='mr-2'><MenuOpenIcon sx={{ fontSize: "35px", color:"rgb(113, 114, 203)" }} /></span>}
                    </div>
                    <ul
                        className={toggle?"bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center":"hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center"}>
                        <li>
                        <Link className="cursor-pointer" onClick={()=>{setToggle(!toggle)}} to="/">Homepage</Link>
                        </li>
                        <li>
                        <Link className="cursor-pointer" onClick={()=>{setToggle(!toggle)}} to="/about">About Me</Link>
                        </li>
                        <li>
                        <Link className="cursor-pointer" onClick={()=>{setToggle(!toggle)}} to="/skills">Resume</Link>
                        </li>
                        <li>
                        <Link className="cursor-pointer" onClick={()=>{setToggle(!toggle)}} to="/skills">Skills</Link>
                        </li>
                        <li>
                        <Link className="cursor-pointer" onClick={()=>{setToggle(!toggle)}}  to="/projects">Projects</Link>
                        </li>
                        <li>
                        <Link className="cursor-pointer" onClick={()=>{setToggle(!toggle)}} to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )

}

export default Navbar;
