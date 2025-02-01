import React from 'react';
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import repairHead from "../../assets/professional-img.png";
import sliderFoot from "../../assets/slider-img.png";
import aboutMid from "../../assets/about-mid.png";
import repair from "../../assets/reapair.svg"
import maintain from "../../assets/maintain.svg"

function Repair() {
    return (
        <div>
            {/* Header Section */}
            <div className='px-4 py-4 flex flex-col md:flex-row items-center justify-between bg-black text-white text-center md:text-left'>
                <p className='flex items-center gap-1.5'><IoIosCall className='text-orange-300' /> Call : +01 123455678990</p>
                <p className='flex items-center gap-1.5'><MdEmail className='text-orange-300' /> Email : mail@domain.com</p>
            </div>

            {/* Hero Section */}
            <div className='w-full flex relative flex-col md:flex-row items-center justify-center gap-10 bg-blue-300 px-6 py-10'>
                <div className='w-[85%]  flex flex-col md:flex-row items-center gap-4'>
                    <div className='md:order-1 order-2 md:w-[65%] flex flex-col items-center md:items-start text-center md:text-left'>
                        <h2 className='font-bold text-3xl text-left sm:text-4xl md:text-6xl text-amber-800'>
                            Comprehensive Manpower Supply and Maintenance Solutions</h2>
                        <p className='mt-5 text-lg text-gray-700'>Empowering businesses with qualified and experienced workforce across various industries. Whether you need temporary, contract-based, or permanent staffing, we provide tailored manpower solutions to ensure efficiency and success.</p>
                        <button className='bg-orange-500 mt-6 w-[200px] p-3 rounded-xl text-white font-bold'>Contact Us</button>
                    </div>
                    <div className='md:order-2 order-1 md:w-[35%] flex justify-center'>
                        <img src={sliderFoot} alt='Repair Services' className='w-full max-w-56 md:max-w-full px-6 m-3 h-auto' />
                    </div>
                </div>

                {/* Box  */}
                <div className='hidden md:flex justify-center items-center w-full mt-10 md:absolute md:top-[80%] md:left-0'>
                    <div className='flex w-[90%] flex-col items-center md:flex-row justify-center  gap-5'>
                        <button className='hover:scale-105 h-[200px] w-[350px] rounded cursor-pointer bg-gray-300 flex flex-col justify-center items-center'>
                            <p><GiAutoRepair className='h-10 w-10' /></p>
                            <p className='text-bold text-2xl'>REPAIR</p>
                        </button>
                        <button className='hover:scale-105 h-[200px] w-[350px] rounded cursor-pointer bg-orange-400 flex flex-col justify-center items-center'>
                            <img src={repair} alt="" className='h-10 w-10' />
                            <p className='text-bold text-2xl'>IMPROVE</p>
                        </button>
                        <button className='hover:scale-105 h-[200px] w-[350px] rounded cursor-pointer bg-gray-300 flex flex-col justify-center items-center'>
                            <img src={maintain} alt="" className='h-10 w-10' />
                            <p className='text-bold text-2xl'>MAINTAIN</p>
                        </button>
                    </div>
                </div>
            </div>


            <div className='block md:hidden w-full mt-10 md:absolute md:top-[80%] md:left-0'>
                <div className='flex flex-col items-center md:flex-row justify-center  gap-5'>
                    <button className='hover:scale-105 h-[200px] w-[350px] rounded cursor-pointer bg-gray-300 flex flex-col justify-center items-center'>
                        <p><GiAutoRepair className='h-10 w-10' /></p>
                        <p className='text-bold text-2xl'>REPAIR</p>
                    </button>
                    <button className='hover:scale-105 h-[200px] w-[350px] rounded cursor-pointer bg-orange-400 flex flex-col justify-center items-center'>
                        <img src={repair} alt="" className='h-10 w-10' />
                        <p className='text-bold text-2xl'>IMPROVE</p>
                    </button>
                    <button className='hover:scale-105 h-[200px] w-[350px] rounded cursor-pointer bg-gray-400 flex flex-col justify-center items-center'>
                        <img src={maintain} alt="" className='h-10 w-10' />
                        <p className='text-bold text-2xl'>MAINTAIN</p>
                    </button>
                </div>
            </div>




            {/* About Section */}
            <div className='w-full mt-5 md:mt-20 flex flex-col md:flex-row items-center justify-center gap-10 bg-white px-6 py-20'>
                <div className='w-full md:w-[85%] flex flex-col md:flex-row items-center'>
                    <div className='md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left'>
                        <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl text-amber-800'>About Us</h2>
                        <p className='mt-5 text-lg'>We provide skilled, semi-skilled, and general workforce solutions tailored to your industry needs. From temporary staffing to permanent placements, our reliable manpower ensures smooth operations and business growth. Whether you need temporary, contract-based, or permanent staffing, we provide tailored manpower solutions to ensure efficiency and success.</p>
                        <button className='bg-orange-500 mt-6 w-[200px] p-3 rounded-xl text-white font-bold'>Read More</button>
                    </div>
                    <div className='md:w-1/2 flex justify-center '>
                        <img src={aboutMid} alt='About Us' className='p-10 w-full max-w-sm mt-4 rounded md:max-w-full h-auto' />
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className='w-full flex flex-col md:flex-row items-center justify-center gap-10 bg-amber-200 px-6 py-10'>
                <div className='w-[85%] flex flex-col md:flex-row items-center'>
                    <div className='hidden md:flex md:w-1/2 justify-center'>
                        <img src={repairHead} alt='Home Services' className='w-[80%] max-w-sm md:max-w-full h-auto' />
                    </div>
                    <div className='md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left'>
                        <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl text-amber-800'>
                            We Provide Professional <br /> Home Services.
                        </h2>
                        <p className='mt-5 text-lg'>We specialize in providing skilled, semi-skilled, and general workforce across various industries. Our expert manpower solutions ensure efficiency, productivity, and seamless operations for your business. Whether you need temporary, contract-based, or permanent staffing, we are here to support your workforce needs.</p>
                        <button className='bg-orange-500 mt-6 w-[200px] p-3 rounded-xl text-white font-bold'>Read More</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Repair;
