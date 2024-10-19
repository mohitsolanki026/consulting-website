import React, { useState } from 'react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav
            className={` absolute w-full z-50 bg-black text-white  p-4 ${!isOpen ? 'animate-fadeOut' : 'animate-fadeIn'
                }`}
        >
            <div className="container mx-auto">

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center justify-between">
                    <div className="text-white font-bold text-lg">LOGO</div>
                    <div className='flex gap-5 '>
                        <button className=' text-sm rounded-3xl bg-gradient-to-r from-red-600 to-red-800 px-5 p-2'>Get a Ouote</button>
                        <button
                            className="text-white hover:text-gray-200 focus:outline-none"
                            onClick={toggleMenu}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-4  items-center justify-between">
                    <div className="text-white font-bold text-lg">LOGO</div>

                    <div className=' flex gap-5 '>
                        <a href="/" className="text-white hover:text-red-500  ">
                            About us
                        </a>
                        <a href="/about" className="text-white hover:text-red-500">
                            Projects
                        </a>
                        <a href="/services" className="text-white hover:text-red-500">
                            Services
                        </a>
                        <a href="/pricing" className="text-white hover:text-red-500">
                            Pricing
                        </a>
                        <a href="/contact" className="text-white hover:text-red-500">
                            Contact
                        </a>
                    </div>
                    <div>
                        <button className=' rounded-3xl bg-gradient-to-r from-red-600 to-red-800 px-7  p-2'> Get a Ouote </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-2 text-center">
                    <a href="/" className="block text-white hover:text-gray-200 mb-2">
                        Home
                    </a>
                    <a
                        href="/about"
                        className="block text-white hover:text-gray-200 mb-2"
                    >
                        About
                    </a>
                    <a
                        href="/services"
                        className="block text-white hover:text-gray-200 mb-2"
                    >
                        Services
                    </a>
                    <a
                        href="/pricing"
                        className="block text-white hover:text-gray-200 mb-2"
                    >
                        Pricing
                    </a>
                    <a
                        href="/contact"
                        className="block text-white hover:text-gray-200"
                    >
                        Contact
                    </a>
                </div>
            )}
        </nav>

    )
}

export default Navbar