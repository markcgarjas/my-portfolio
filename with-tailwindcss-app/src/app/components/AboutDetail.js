import React from "react"

const About = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-5 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row lg:space-x-2 lg:mt-12">
                    <a href="" className="block bg-blue-500 text-black py-2 px-4 rounded mb-2 lg:mb-0 hover:bg-blue-500 hover:text-white shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                        <i className="fas fa-envelope mr-2"></i>CONTACT
                    </a>
                    <a href=""
                       className="block bg-blue-500 text-black py-2 px-4 rounded mb-2 lg:mb-0 hover:bg-blue-500 hover:text-white shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                        <i className="fas fa-file-alt mr-2"></i>RESUME
                    </a>
                    <a href=""
                       className="block bg-blue-500 text-black py-2 px-4 rounded hover:bg-blue-500 hover:text-white shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                        <i className="fas fa-user mr-2"></i>PROFILE
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;