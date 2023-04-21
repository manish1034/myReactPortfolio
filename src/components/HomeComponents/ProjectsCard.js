import React from "react";

const ProjectsCard = ({img,name}) =>{
    return (
        <>
            <div className="img-ovelay w-full cover md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
                <img src={img} alt="hi" />
                <div className="overlay">
                    <a href="https://manish1034.github.io/Movie-site/"
                    target="_manish"
                    className="common-heading">{name}</a>
                </div>
            </div>
        </>
    )
}

export default ProjectsCard;