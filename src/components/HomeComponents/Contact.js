/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Contact = () => {
    return (
        <>
            <div className=" pt-32 dark:bg-slate-900">
                <div className="container mx-auto">
                    {/* top */}
                    <div className="flex flex-col gap-3 items-center">
                        <h1 className="text-indigo-600 font-bold">CONTACT</h1>
                        <h1 className="text-3xl dark:text-white">Have a Question?</h1>
                        <p className="w-1/2 text-center text-gray-400">
                            Do you have an idea? Let's discuss it and see what we can do together.
                        </p>
                    </div>
                    {/* bottom */}
                    <form className="mt-5 p-8 flex flex-col gap-5 items-center" action="https://formspree.io/f/mqkowekv" method="POST">
                        <input className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white transition-all hover:scale-110" type="text" name="Name" placeholder="Full Name" />
                        <input className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white transition-all hover:scale-110" type="email" name="EmailID" placeholder="Email" />
                        <textarea className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white transition-all hover:scale-110" cols="30" rows="10" required autoComplete="off" name="Message" placeholder="Message..."></textarea>
                        <button className="w-1/2 bg-indigo-600 text-white font-medium px-3 py-2 rounded-md cursor-pointer transition-all hover:scale-110">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            {/* footer */}
            <div className="w-full bg-gray-800">
                <div className="container mx-auto py-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <a href="#" className=" text-white transition-all hover:scale-110">Top of the page</a>
                    </div>
                    <div className="flex gap-3">
                        <a href="https://m.facebook.com/100010409171048/"><img className="w-6 cursor-pointer transition-all hover:scale-120" src='./img/fblogo2.png' alt="" /></a>
                        <a href="https://www.instagram.com/_raj.__.put_/"><img className=" w-6 cursor-pointer transition-all hover:scale-120" src='./img/instagram-logo.png' alt="" /></a>
                        <a href="https://www.linkedin.com/mwlite/in/manish-chandra-09401b203"><img className="w-6 cursor-pointer transition-all hover:scale-120" src='./img/Linkedin-PNG-File.png' alt="" /></a>
                    </div>
                </div>
            </div><div id="contact"></div>
        </>
    )
}

export default Contact;