import React from "react";
import ProjectsCard from "./ProjectsCard";
import projectData from "../../Constants/Data";
 
const Projects = () => {
    return (
        <>
            <div className="py-32 dark:bg-slate-900">
                 <div className="container mx-auto">
                    {/* top */}
                    <div className="flex flex-col gap-3 items-center">
                        <h1 className="text-indigo-600 font-bold">PORTFOLIO</h1>
                        <h1 className="text-3xl dark:text-white">Works & Projects</h1>
                        <p className="w-1/2 text-center text-gray-400">
                            Here's my some of the projects which I've done in this field of web development
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam commodi dolorem aperiam doloremque nesciunt delectus repellendus saepe vero non animi! Laudantium, hic inventore. Delectus ad quaerat minus! Id, omnis ut.
                        </p>
                    </div>
                    {/* bottom */}
                    <div className="portfolio-images p-5 sm:p-0 flex flex-wrap justify-between lg:ml-16 md:ml-3 sm:ml-10">
                        {/* card1 */}
                        {projectData.map((item) => ( 
                            <ProjectsCard
                            key ={item.id}
                            img ={item.Img}
                            name ={item.Name}
                            />
                        ))}   
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;