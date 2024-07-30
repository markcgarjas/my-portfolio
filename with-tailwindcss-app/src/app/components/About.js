import React from "react";
import Image from "next/image";
import profile from "../profile/profile.jpg";

const About = () => {
    return (
        <div className="container px-4 mx-auto py-12">
            <div className="lg:space-x-5 lg:flex lg:flex-row items-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 animate-fadeIn">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Hi, I&apos;m Mark Carlo V. Garjas,
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white prose dark:prose-dark">
                        <p className="mb-4">
                            a Junior Software Engineer at KODA CAMP. I specialize in developing
                            dynamic and responsive web applications using a variety of technologies.
                        </p>
                        <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl dark:text-white">About Me</h2>
                        <p className="mb-4">
                            As a passionate and dedicated software engineer, I thrive on creating efficient and
                            innovative web solutions. My journey in the tech world has equipped me with a robust skill set in both
                            front-end and back-end development.
                        </p>
                        <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl dark:text-white">Skills</h2>
                        <ul className="list-disc list-inside mb-4">
                            <li>Ruby on Rails: Expertise in building scalable and maintainable web applications.</li>
                            <li>JavaScript: Proficient in creating interactive and user-friendly interfaces.</li>
                            <li>Stimulus: Skilled in enhancing web application interactivity.</li>
                            <li>MySQL: Competent in designing and managing robust database systems.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center items-center lg:mt-12 lg:px-4 mb-10 animate-fadeIn">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full shadow-lg"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
