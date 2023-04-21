import React from "react";

const About = () => {
    return (
        <>
          <div  className="px-10 py-0 dark:bg-slate-900">
            <div className="container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20">
              {/* left */}
              <div className="relative lg:ml-3 xl:ml-6 md:ml-2">
                  <img className="h-5/6 absolute shadow-xl top-0 left-0 -z-10"
                    src='./img/dots.png'
                    alt=""/>
                  <img className="h-5/6 absolute shadow-xl bottom-0 right-0 -z-10"
                    src='./img/dots.png'
                    alt=""/>
                  <div className="h-full rounded-full shadow-xl overflow-hidden">
                    <img src='./img/my2.jpg' alt="" />
                  </div> 
              </div>
              {/* right */}
              <div className="my-auto flex flex-col gap-3 md:ml-5">
                <h1 className="text-indigo-600 font-bold">ABOUT ME</h1>
                <h1 className="text-3xl font-medium dark:text-white">Better Design</h1>
                <h1 className="text-3xl font-medium dark:text-white">
                  Better Experience
                </h1>
                <p className="text-gray-400">
                  **I design and build digital products. I'm also a aware of other languages
                  in which I can understand and work under these language
                  such as C++ , Python.
                </p>
                <h2 className="text-gray-400 font-medium my-3">CSS</h2>
                <div className="w-full bg-gray-200 h-1.5 rounded-md">
                  <div className="w-full bg-indigo-600 h-1.5 rounded-md"></div>
                </div>
                <h2 className="text-gray-400 font-medium my-3">Javascript</h2>
                <div className="w-full bg-gray-200 h-1.5 rounded-md">
                  <div className="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
                </div>
                <h2 className="text-gray-400 font-medium my-3">Node JS/ Express</h2>
                <div className="w-full bg-gray-200 h-1.5 rounded-md">
                  <div className="w-4/6 bg-indigo-600 h-1.5 rounded-md"></div>
                </div>
                <h2 className="text-gray-400 font-medium my-3">React</h2>
                <div className="w-full bg-gray-200 h-1.5 rounded-md">
                  <div className="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
                </div>
                <h2 className="text-gray-400 font-medium my-3">Mongo DB/ Mongoose</h2>
                <div className="w-full bg-gray-200 h-1.5 rounded-md">
                  <div id="skills" className="w-4/6 bg-indigo-600 h-1.5 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default About;