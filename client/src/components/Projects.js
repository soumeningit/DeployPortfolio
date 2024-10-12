import React from 'react'
import img1 from "../assets/E-Learning.jpg"
import img2 from "../assets/ChatAppImg.jpg"
import img3 from "../assets/Ecommerce.png"
import img4 from "../assets/WeatherApp.jpg"
import img5 from "../assets/health.jpg"

import { Link } from 'react-router-dom'

const images = [
    {
        id: 1,
        image: img1,
        title: "E-Learning App",
        description: "E-Learning App is a web application that allows users to learn new skills and knowledge",
        link: "https://github.com/soumeningit/NucleusET",
        liveLink: "https://nucleuset-3jhf.onrender.com/"
    },
    {
        id: 2,
        image: img2,
        title: "Chat App",
        description: "Chat App is a web application that allows users to communicate with each other",
        link: "/https://github.com/soumeningit/Full-Stack-Chat-Application",
        liveLink: "https://talk-time-vqvp.onrender.com/"
    },
    {
        id: 5,
        image: img5,
        title: "Medical App",
        description: "Medical App is a web application where mainly user can remotely attend doctor.",
        link: "",
        liveLink: ""
    },
    {
        id: 3,
        image: img3,
        title: "Ecommerce App",
        description: "Ecommerce App is a web application that allows users to buy and sell products",
        link: "https://github.com/soumeningit/NewEcommarce",
        liveLink: "https://main--soumen-shopping-app.netlify.app/"
    },
    {
        id: 4,
        image: img4,
        title: "Weather App",
        description: "Weather App is a web application that allows users to check the weather of different locations",
        link: "https://github.com/soumeningit/Weather-App",
        liveLink: "https://check-weather-sp.netlify.app/"
    }
];

function Projects() {
    return (

        <div className='max-w-6xl mx-auto py-12 px-4 mt-44 bg-slate-50'>
            <h1 className='text-4xl text-cyan-950 font-bold text-center mb-12'>My Works</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    images.map((data, index) => {
                        return (
                            <div key={data.id}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-white hover:bg-slate-200 hover:shadow-lg shadow-lg rounded-lg overflow-hidden'
                            >
                                <img src={data.image} alt="project" className='w-full h-48 object-cover' />
                                <div className='p-6'>
                                    <h2 className='text-2xl font-semibold text-gray-800 mb-2'>{data.title}</h2>
                                    <p className='text-gray-600 mb-4'>{data.description}</p>
                                    <div className='flex flex-col'>
                                        <Link to={data.link} target='_blank' className='inline-block text-orange-500 font-medium hover:underline'>
                                            Know More
                                        </Link>
                                        <Link to={data.liveLink} target='_blank' className='inline-block text-orange-500 font-medium hover:underline'>
                                            Livelink
                                        </Link>
                                        {/* <button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 px-4 py-2 rounded-md">
                                            Save Changes
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects