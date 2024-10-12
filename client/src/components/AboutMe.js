import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

function AboutMe() {
    return (
        <>
            <h1 className='text-2xl font-bold text-center text-gray-950 mb-8 mt-24'>About Me</h1>
            <div className='py-12 px-6 text-white flex flex-row items-center justify-center'>
                <div className='max-w-[45%] w-full'>
                    <div className='flex flex-col justify-center items-start space-y-4'>
                        <p className='text-base text-gray-600 flex items-center'>
                            <FaGithub className='text-xl mr-4' />
                            <Link to="https://github.com/soumeningit" className='hover:text-gray-900'>Follow On Github</Link>
                        </p>
                        <p className='text-base text-gray-600 flex items-center'>
                            <IoLogoLinkedin className='text-xl mr-4' />
                            <Link to="https://www.linkedin.com/in/soumen-pal-141866309/" className='hover:text-gray-900'>Follow On Linkedin</Link>
                        </p>
                        <p className='text-base text-gray-600 flex items-center'>
                            <FaInstagram className='text-xl mr-4' />
                            <Link to="https://www.instagram.com/spal0_1" className='hover:text-gray-900'>Follow On Instagram</Link>
                        </p>
                        <p className='text-base text-gray-600 flex items-center'>
                            <FaTwitter className='text-xl mr-4' />
                            <Link to="https://x.com/" className='hover:text-gray-900'>Follow On Twitter</Link>
                        </p>
                    </div>
                </div>

                <div className='max-w-[45%] w-full p-8 rounded-lg '>
                    <p className='text-lg leading-relaxed text-teal-950'>
                        I am a passionate MERN stack developer with a keen interest in building efficient and scalable web applications.
                        With expertise in MongoDB, Express.js, React.js, and Node.js, I enjoy developing end-to-end solutions that offer seamless
                        user experiences. In addition to web development, I am proficient in C, C++, Java, and Python, which gives me the flexibility
                        to tackle complex problems in various domains. I am always eager to learn and apply new technologies, continuously striving
                        to enhance my skills and contribute to innovative projects. My goal is to create impactful software that solves real-world
                        problems and adds value to users' lives.
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutMe