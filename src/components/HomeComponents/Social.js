/* eslint-disable react/jsx-no-target-blank */
import React,{useContext} from "react";
import { UserContext, UserrContext } from '../Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
// import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Social = () => {

    const theme = useContext(UserContext);
    const handleThemeSwitch = useContext(UserrContext);

    return (
        <>
            <div className="footerr xl:inline-block lg:inline-block md:inline-block sm:inline-block">
                    <div className="ml-6 icons sm:ml-1 md:ml-2 lg:ml-4 xl:ml-6">
                        {/* <span className="mb-2 hover:shadow-xl hover:opacity-20 "><a href="https://m.facebook.com/100010409171048/" target="_blank"><FacebookIcon sx={{fontSize:{ss:"18px", sm:"20px",md:"28px",lg:"28px", xl:"28px"}, color:"rgb(79, 70, 229)"}} /></a></span> */}
                        {theme==='dark'?<span className="m-2 hover:shadow-xl hover:opacity-20 " onClick={handleThemeSwitch} ><LightModeIcon sx={{fontSize:{ss:"18px", sm:"20px",md:"28px",lg:"28px", xl:"28px"}, color:"rgb(79, 70, 229)", }} /></span>:<span className="m-2 hover:shadow-xl hover:opacity-20 " onClick={handleThemeSwitch} ><DarkModeIcon sx={{fontSize:{ss:"18px", sm:"20px",md:"28px",lg:"28px", xl:"28px"}, color:"rgb(79, 70, 229)"}} /></span>}
                        <span className="m-2 hover:shadow-xl hover:opacity-20 "><a href="https://www.instagram.com/_raj.__.put_/" target="_blank"><InstagramIcon sx={{fontSize:{ss:"18px", sm:"20px",md:"28px",lg:"28px", xl:"28px"}, color:"rgb(79, 70, 229)"}} /></a></span>
                        <span className="m-2 hover:shadow-xl hover:opacity-20 "><a href="https://www.linkedin.com/mwlite/in/manish-chandra-09401b203" target="_blank"><LinkedInIcon sx={{fontSize:{ss:"18px", sm:"20px",md:"28px",lg:"28px", xl:"28px"}, color:"rgb(79, 70, 229)"}} /></a></span>
                        <span className="m-2 hover:shadow-xl hover:opacity-20 "><a href="https://github.com/manish1034" target="_blank"><GitHubIcon sx={{fontSize:{ss:"18px", sm:"20px",md:"28px",lg:"28px", xl:"28px"}, color:"rgb(79, 70, 229)"}} /></a></span>
                    </div>
                    <div className="line"></div>
                    <div className="line2"></div>
                </div>
        </>
    )
}

export default Social;