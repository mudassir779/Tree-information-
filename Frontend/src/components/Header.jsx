import React from 'react'
import { FaFacebookF, FaPhoneVolume, FaEnvelope, FaInstagram, FaLocationDot, FaGoogle } from 'react-icons/fa6'

const Header = () => {
    return (
        <header className="bg-white">
            {/* Top contact/social bar */}
            <div className='mx-10 py-2 items-center flex justify-between text-sm'>
                <div className='flex space-x-4'>
                    <a
                        href="https://www.facebook.com/kenstrees"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Follow on Facebook"
                        className="hover:text-green-600">
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://search.google.com/local/writereview?placeid=ChIJU-pP1XeNwogR1JU0sbJZtbU"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Follow on Google"
                        className="hover:text-green-600">
                        <FaGoogle />
                    </a>
                    <a
                        href="https://www.instagram.com/kenstreeserviceinc/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Follow on Instagram"
                        className="hover:text-green-600">
                        <FaInstagram />
                    </a>
                </div>
                <div className='flex space-x-6'>
                    <div className='flex items-center space-x-1'>
                        <a href="">
                            <FaLocationDot className="text-green-600" />
                            <p>Tarpon Springs, Florida 34688</p>
                        </a>      
                    </div>
                    <div className='flex items-center space-x-1'>
                        <FaEnvelope className="text-green-600" />
                        <a href="mailto:support@kens-tree-service.com" className="hover:text-green-600">
                            support@kens-tree-service.com
                        </a>
                    </div>
                </div>
            </div>

            {/* Main header with logo and phone */}
            <div className='flex justify-between items-center border-t-3 border-b border-gray-200 px-10 py-4'>
                <div className="flex items-center">
                    <a href="/">
                        <img src="/logo.png" alt="Ken's Tree Service" className="h-16" />
                    </a>

                </div>

                <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                        <FaPhoneVolume className="text-green-600 text-xl" />
                        <div>
                            <a href="tel:+17279345804">
                                <p className="text-sm">CALL FOR MORE INFORMATION</p>
                                <p className="text-lg font-bold">(727) 934-5804</p>
                            </a>
                        </div>
                    </div>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold">
                        REQUEST A FREE ESTIMATE
                    </button>
                </div>
            </div>

            {/* Navigation */}
            <nav className="bg-green-600">
                <ul className="flex justify-center space-x-8 py-3 text-white font-medium">
                    <li className="hover:underline cursor-pointer">HOME</li>
                    <li className="hover:underline cursor-pointer">ABOUT US</li>
                    <li className="hover:underline cursor-pointer">SERVICE AREAS</li>
                    <li className="hover:underline cursor-pointer">PHOTO GALLERY</li>
                    <li className="hover:underline cursor-pointer">CONTACT US</li>
                    <li className="hover:underline cursor-pointer">BLOG</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header