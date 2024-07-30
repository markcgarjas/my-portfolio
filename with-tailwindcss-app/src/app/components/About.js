import React from "react"
import Image from "next/image"
import profile from "../profile/profile.jpg"

const About = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Hi, I&apos;m Mark Carlo V. Garjas,
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                            I&apos;m a software engineer, currently working as a Junior Software Engineer at KODA CAMP.
                        </p>

                        <p className="mb-4">
                            I&apos;m competent in developing web apps on Ruby on Rails, Javascript, Stimulus, and MySQL.
                        </p>

                        <p>
                            Welcome to my simple page. Hope you feel good and happy!
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;
