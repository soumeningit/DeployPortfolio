import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Soumen.png"

function Navbar() {
    return (
        <>
            <nav className='flex flex-1 justify-around bg-slate-500 h-16'>
                {/* Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="logo" className='h-10 w-auto rounded-full mx-auto object-cover shadow-md -translate-x-16' />
                </div>
                <ul
                    className='text-[#FFFFFF] font-Monserrat text-wrap text-base flex flex-row justify-evenly space-x-6 cursor-pointer items-center'
                >
                    <Link to='/'>
                        <li className="hover:text-teal-200 hover:underline hover:underline-offset-4 hover:decoration-teal-200">Home</li>
                    </Link>
                    <Link to='/about'>
                        <li className="hover:text-teal-200 hover:underline hover:underline-offset-4 hover:decoration-teal-200">About Me</li>
                    </Link>
                    <Link to='/skill'>
                        <li className="hover:text-teal-200 hover:underline hover:underline-offset-4 hover:decoration-teal-200">My Skills</li>
                    </Link>
                    <Link to='/project'>
                        <li className="hover:text-teal-200 hover:underline hover:underline-offset-4 hover:decoration-teal-200">My Projects</li>
                    </Link>
                    <Link to='/contact'>
                        <li className="hover:text-teal-200 hover:underline hover:underline-offset-4 hover:decoration-teal-200">Contact</li>
                    </Link>

                </ul>
            </nav>
        </>

    )
}

export default Navbar