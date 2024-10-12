import React from 'react'

import img1 from "../assets/HTML.png"
import img2 from "../assets/CSS.png"
import img3 from "../assets/Bootstrap.svg"
import img4 from "../assets/Tailwind.png"
import img5 from "../assets/MaterialUI.svg"
import img6 from "../assets/Javascript.svg"
import img7 from "../assets/React.png"
import img8 from "../assets/Redux.svg"
import img9 from "../assets/NodeJs.svg"
import img10 from "../assets/Express.png"
import img11 from "../assets/MongoDB.svg"
import img12 from "../assets/Docker.svg"
import img13 from "../assets/Git.svg"
import img14 from "../assets/Github.svg"
import img15 from "../assets/CPP.svg"
import img16 from "../assets/Java.svg"

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16];
function MySkills() {
    return (
        <>
            <h1 className='text-3xl font-bold text-center text-slate-700 mt-40'>My Skills</h1>
            <div className='flex flex-1 justify-center mx-auto items-center mt-10 bg-gray-200 h-screen'>
                {/* Left Side: Text Section */}
                <div className='flex flex-col text-white max-w-[38%] w-full space-y-4 mr-10'>
                    <p className='text-lg text-gray-700'>
                        I am a proficient MERN (MongoDB, Express.js, React.js, Node.js)
                        stack developer with experience in creating dynamic and scalable
                        web applications. Along with web development, I am skilled in C, C++, Java, and Python,
                        allowing me to work across various domains, tackle complex problems, and build efficient
                        software solutions.
                    </p>
                </div>

                {/* Right Side: Image Grid */}
                <div className='grid grid-cols-4 gap-4 max-w-[45%] w-full'>
                    {
                        images.map((img, idx) => (
                            <div
                                key={idx}
                                className='h-20 w-24 px-2 py-1 border-2 border-[#E24503] bg-[#2A2A2A] rounded-md flex justify-center items-center
                    hover:scale-125 transition-transform duration-500 ease-out'>
                                <img src={img} alt={`img${idx}`} className='h-full w-full object-cover rounded-md px-4 py-4' loading='lazy' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default MySkills