import React from "react";

const skillsCard = ({immg,name}) =>{
    return (
        <>
            <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">
                <img className=" rounded-lg" src={immg} alt="hi" />
                <h1 className="font-medium text-lg dark:text-white">{name}</h1>
                <p className="text-gray-400">
                I specialize in creating interactive websites for individuals and
                small businesses.
                </p>
                <span className="transition-all hover:scale-110">
                <a className="text-indigo-600 font-semibold text-base" href="f">Read More</a>
                </span>
            </div>
        </>
    )
}

export default skillsCard;