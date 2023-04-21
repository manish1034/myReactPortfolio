import React from 'react';
import SkillsCard from './SkillsCard';
import skillData from '../../Constants/Data2';



const Skills = () => {
    return (
        <>
            <div  className="pt-32 dark:bg-slate-900">
                <div className="container mx-auto">
                    {/* top  */}
                    <div className="flex flex-col gap-6 items-center">
                    <h1 className="text-indigo-600 font-bold">SKILLS</h1>
                    <h1 className="text-3xl dark:text-white my-3">What do I offer?</h1>
                    <p className="w-1/2 text-center text-gray-400">
                        My approach to website design is to create a website that
                        strengthens your company's brand while ensuring ease of use and
                        simplicity for your audience.
                    </p>
                    </div>
                    {/* bottom  */}
                    <div className=" flex flex-wrap items-center p-5 sm:p-0 lg:ml-14 sm:ml-6">
                        {/* card1 */}
                        {skillData.map((item)=>(
                            <SkillsCard
                            key ={item.id}
                            immg ={item.skillImg}
                            name ={item.skillName}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;