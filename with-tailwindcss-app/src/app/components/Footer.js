import React from 'react';

const socialMediaDetails = [
    {name: "Facebook", href: "https://www.facebook.com/carlogarjas"},
    {name: "Github", href: "https://github.com/markcgarjas"},
    {name: "LinkedIn", href: "https://www.linkedin.com/in/mark-m-bb36a9232/"},
    {name: "Youtube", href: "https://www.youtube.com/channel/UCLCZ3JwTJ7hCY7DqAivjHRw"},
]

const Footer = () => {
    return (
        <div className="sm:py-12 py-6">
            <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
                <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
                <div className="flex flex-col justify-between lg:flex-row items-center">
                    <p>Built with Next.js, Tailwind and Vercel</p>
                    <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
                        {socialMediaDetails.map((socialMedia) => (
                            <a
                                href={socialMedia.href}
                                className={"transition-colors hover:text-yellow-500"}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {socialMedia.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;