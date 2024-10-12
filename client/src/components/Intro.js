// import React from 'react';
// import { Typewriter } from 'react-simple-typewriter';
// import myDp from "../assets/myDp.jpg"

// function Intro() {

//     const handleType = (count) => {
//         // access word count number
//         console.log(count)
//     }


//     const handleDone = () => {
//         console.log(`Done after 5 loops!`)
//     }

//     return (
//         <div className='grid grid-cols-2 mx-auto text-[#ffffff] mt-10 mb-10'>
//             <div>
//                 <h1>Hi I am Soumen Pal</h1>
//                 <p> I am a software developer with a passion for building scalable and efficient software solutions.</p>
//                 <span style={{ color: 'red', fontWeight: 'bold' }}>
//                     {/* Style will be inherited from the parent element */}
//                     <Typewriter
//                         words={['Full Stack Developer', 'UI Designer']}
//                         loop={5}
//                         cursor
//                         cursorStyle='_'
//                         typeSpeed={70}
//                         deleteSpeed={50}
//                         delaySpeed={1000}
//                         onLoopDone={handleDone}
//                         onType={handleType}
//                     />
//                 </span>
//             </div>
//             <div >
//                 <div className='h-48 w-48 rounded-full shadow-md border-1 border-gray-100'>
//                     <img src={myDp} alt="dp" />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Intro




import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import myDp from "../assets/myDp.jpg";
import { Link } from 'react-router-dom';

function Intro() {

    return (
        <div className='flex flex-1 justify-center items-center text-gray-700 mt-10 mb-10 ' style={{ backgroundColor: '' }}>
            {/* Left Side: Text */}
            <div className='flex flex-col justify-center max-w-[45%] w-full'>
                <h1 className='text-4xl font-bold mb-4'>Hi, I am Soumen Pal</h1>
                <p className='text-2xl mb-6'>
                    I am a {` `}
                    <span className='text-2xl' style={{ color: 'black', fontWeight: 'bold' }}>
                        <Typewriter
                            words={['Software Developer', 'Full Stack Developer', 'UI Designer']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </p>
                <p className='text-xl mb-6'>
                    A passionate coder from India, skilled in web development, dedicated to learning
                    new technologies and creating impactful projects.
                </p>
                <div className='flex space-x-4'>
                    <Link to='/contact'>
                        <button className='px-4 py-2 bg-orange-400 text-white hover:bg-orange-300 rounded-md font-medium '>Contact Me</button>
                    </Link>
                </div>
            </div>

            {/* Right Side: Profile Image */}
            <div className='flex justify-center items-center max-w-[45%] w-full'>
                <div className='h-[18rem] w-[16rem] rounded-md shadow-lg border-4 border-gray-300 overflow-hidden'>
                    <img src={myDp} alt="Profile" className='object-cover' loading='lazy' />
                </div>
            </div>
        </div>
    );
}

export default Intro;
