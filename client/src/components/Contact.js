import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { CgSoftwareDownload } from "react-icons/cg";
import { sendMessageAPI } from './sendMessageAPI';
import logo from "../assets/Soumen.png"

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const navigate = useNavigate();

    const submitHandle = async (event) => {
        event.preventDefault();
        console.log(formData);
        try {
            const response = await sendMessageAPI(formData);
            // console.log("response in message send inside client : ", response);
            if (response?.success === true) {
                alert("Thanks for your interest");
            }
        }
        catch (error) {
            console.error(error);
        }
    };

    const changeHandler = (e) => {
        setFormData((prevData) => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        })
    }

    const showCV = (event) => {
        event.preventDefault();
        navigate("/view");
    }

    return (
        <>
            <div className='bg-[#2A2A2A] mt-[14rem]'>
                <h1 className='text-3xl font-bold text-center text-gray-300 mb-6'>Contact</h1>
                <p className='text-center text-base text-gray-400 mb-8'>Thanks for scrolling! Feel free to leave a message below.</p>

                <div className=' mx-auto p-6 bg-[#b7b5b5] rounded-lg shadow-lg flex flex-1 items-center justify-center'>
                    <div className='max-w-[45%] w-full text-base font-semibold '>
                        <img src={logo} alt="logo" className='h-28 w-28 mb-8 rounded-md' loading='lazy' />
                        <h1 className='text-xl font-semibold mb-6'>Let's Get In Touch</h1>
                        <Link to="mailto:soumenpalcse@gmail.com">
                            <span className='flex flex-1 space-x-4'><CgMail className='mt-[0.4rem] mr-2' /> soumenpalcse@gmail.com</span>
                        </Link>
                        <div className='flex text-2xl space-x-4 mt-4'>
                            <Link to="https://www.linkedin.com/in/soumen-pal-141866309/" target='_blank' className='hover:text-[#0e76a8]'><FaLinkedin /></Link>
                            <Link to="https://www.instagram.com/spal0_1" target='_blank' className='hover:text-[#E1306C]'><FaInstagram /></Link>
                            <Link to="https://x.com/" target='_blank' className='hover:text-[#1DA1F2]'><FaTwitterSquare /></Link>
                            <Link to=""></Link>
                        </div>
                        <button
                            onClick={showCV}
                            className='mt-8 px-4 py-2 rounded-md bg-orange-500 text-white text-base font-semibold space-x-4 hover:bg-orange-300'
                        >
                            <span className='flex flex-row text-lg space-x-4'>MY CV <CgSoftwareDownload className='mt-[0.4rem] text-xl' /></span>
                        </button>
                    </div>

                    <form onSubmit={submitHandle} className='space-y-6 max-w-[45%] w-full'>
                        {/* Name Field */}
                        <div className='flex flex-col'>
                            <label className='text-gray-700 font-medium mb-2'>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={changeHandler}
                                placeholder='Your full name'
                                className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                            />
                        </div>

                        {/* Email Field */}
                        <div className='flex flex-col'>
                            <label className='text-gray-700 font-medium mb-2'>Email:</label>
                            <input
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={changeHandler}
                                placeholder='Your email address'
                                className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                            />
                        </div>

                        {/* Message Field */}
                        <div className='flex flex-col'>
                            <label className='text-gray-700 font-medium mb-2'>Message:</label>
                            <textarea
                                name='message'
                                value={formData.message}
                                onChange={changeHandler}
                                placeholder='Your message here'
                                className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 h-32'
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type='submit'
                            className='w-full px-4 py-2 bg-orange-500 text-white font-medium text-base rounded-md hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500'
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>

        </>

    )
}

export default Contact