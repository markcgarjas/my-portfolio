'use client'

import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import profile from "../profile/profile.jpg";
import Typed from 'typed.js';
import AboutDetail from "@/app/components/AboutDetail";

const About = () => {
    const typedElement = useRef(null);

    useEffect(() => {
        if (typedElement.current) {
            const typed = new Typed(typedElement.current, {
                strings: ['Mark Carlo V. Garjas', '24 years old'],
                typeSpeed: 50,
                backSpeed: 50,
                loop: true
            });

            return () => {
                typed.destroy();
            };
        }
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        const link = document.getElementById('contactLink');
        link.style.display = 'none';
        window.location.href = 'https://mail.google.com/mail/u/0/?fs=1&to=markcarlo859@gmail.com.com&bcc=markcarlo859@gmail.com&tf=cm';
    };

    return (
        <div className="container px-4 mx-auto py-12">
            <div className="lg:space-x-5 lg:flex lg:flex-row items-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 animate-fadeIn">
                    <h2 className="text-2xl font-bold text-gray-900 lg:text-4xl dark:text-white">
                        Hi, I&apos;m <span ref={typedElement}></span>
                    </h2>
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
                <div className="flex flex-col justify-center items-center lg:mt-12 lg:px-4 mb-10 animate-fadeIn">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full shadow-lg border-4 border-blue-500"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                    <a
                        id="contactLink"
                        href="get-in-touch"
                        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full transition-colors hover:bg-blue-600"
                        onClick={handleClick}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
            <AboutDetail/>
        </div>
    );
};

export default About;
