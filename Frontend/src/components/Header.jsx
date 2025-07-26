import { useState } from 'react';
import { FaFacebookF, FaPhoneVolume, FaEnvelope, FaInstagram, FaLocationDot, FaGoogle, FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    const servicesItems = [
        { name: "TREE REMOVAL", path: "/services/tree-removal" },
        { name: "TREE TRIMMING & PRUNING", path: "/services/tree-trimming-pruning" },
        { name: "DEEP ROOT FERTILIZATION", path: "/services/deep-root-fertilization" },
        { name: "STRUCTURAL PRUNING", path: "/services/structural-pruning" },
        { name: "LAND CLEARING", path: "/services/land-clearing" },
        { name: "STORM CLEAN UP", path: "/services/storm-clean-up" },
        { name: "COMMERCIAL TREE SERVICES", path: "/services/commercial-tree-services" }
    ];

    const serviceAreasItems = [
        { name: "TARPON SPRINGS, FL", path: "/service-areas/tarpon-springs" },
        { name: "CLEARWATER, FL", path: "/service-areas/clearwater" },
        { name: "DUNEDIN, FL", path: "/service-areas/dunedin" },
        { name: "NEW PORT RICHEY, FL", path: "/service-areas/new-port-richey" },
        { name: "OLDSMAR, FL", path: "/service-areas/oldsmar" },
        { name: "PALM HARBOR, FL", path: "/service-areas/palm-harbor" },
        { name: "SAFETY HARBOR, FL", path: "/service-areas/safety-harbor" }
    ];

    const aboutUsItems = [
        { name: "TESTIMONIALS", path: "/about-us/testimonials" }
    ];

    return (
        <header className="bg-white relative">
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
                    <a href="https://www.google.com/maps/place/Ken's+Tree+Service/@28.1114504,-82.749315,11z/data=!4m2!3m1!1s0x0:0xb5b559b2b13495d4?sa=X&hl=en-US&gl=us&ved=2ahUKEwi607afwKf9AhUcg2oFHfvYCqoQ_BJ6BAh5EAg" className="flex items-center space-x-1 hover:text-green-600">
                        <FaLocationDot className="text-green-600" />
                        <p>Tarpon Springs, Florida 34688</p>
                    </a>

                    <a href="mailto:support@kens-tree-service.com" className="flex items-center space-x-1 hover:text-green-600">
                        <FaEnvelope className="text-green-600" />
                        <p>support@kens-tree-service.com</p>
                    </a>
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
                            <a href="tel:812-213-5997">
                                <p className="text-sm">CALL FOR MORE INFORMATION</p>
                                <p className="text-lg font-bold">812-213-5997</p>
                            </a>
                        </div>
                    </div>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-3xl font-bold">
                        REQUEST A FREE ESTIMATE
                    </button>
                </div>
            </div>

            {/* Navigation */}
            <nav className="bg-green-700 relative">
                <ul className="flex w-full justify-center space-x-8 py-3 text-white font-medium">
                    <li className="hover:underline cursor-pointer">
                        <Link to="/" className="flex items-center">HOME</Link>
                    </li>
                    
                    <li className="relative group">
                        <div 
                            className="flex items-center cursor-pointer hover:underline"
                            onClick={() => toggleDropdown('about')}
                        >
                            <Link to="/about-us">ABOUT US</Link>
                            {activeDropdown === 'about' ? <FaAngleUp className="ml-1" /> : <FaAngleDown className="ml-1" />}
                        </div>
                        {activeDropdown === 'about' && (
                            <ul className="absolute left-0 mt-2 w-48 bg-white text-green-800 shadow-lg rounded z-50">
                                {aboutUsItems.map((item, index) => (
                                    <li key={index} className="hover:bg-green-100">
                                        <Link to={item.path} className="block px-4 py-2">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    <li className="relative group">
                        <div 
                            className="flex items-center cursor-pointer hover:underline"
                            onClick={() => toggleDropdown('services')}
                        >
                            <Link to="/services">SERVICES</Link>
                            {activeDropdown === 'services' ? <FaAngleUp className="ml-1" /> : <FaAngleDown className="ml-1" />}
                        </div>
                        {activeDropdown === 'services' && (
                            <ul className="absolute left-0 mt-2 w-64 bg-white text-green-800 shadow-lg rounded z-50">
                                {servicesItems.map((item, index) => (
                                    <li key={index} className="hover:bg-green-100">
                                        <Link to={item.path} className="block px-4 py-2">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    <li className="relative group">
                        <div 
                            className="flex items-center cursor-pointer hover:underline"
                            onClick={() => toggleDropdown('areas')}
                        >
                            <Link to="/service-areas">SERVICE AREAS</Link>
                            {activeDropdown === 'areas' ? <FaAngleUp className="ml-1" /> : <FaAngleDown className="ml-1" />}
                        </div>
                        {activeDropdown === 'areas' && (
                            <ul className="absolute left-0 mt-2 w-64 bg-white text-green-800 shadow-lg rounded z-50">
                                {serviceAreasItems.map((item, index) => (
                                    <li key={index} className="hover:bg-green-100">
                                        <Link to={item.path} className="block px-4 py-2">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    <li className="hover:underline cursor-pointer">
                        <Link to="/photo-gallery" className="flex items-center">PHOTO GALLERY</Link>
                    </li>
                    <li className="hover:underline cursor-pointer">
                        <Link to="/contact-us" className="flex items-center">CONTACT US</Link>
                    </li>
                    <li className="hover:underline cursor-pointer">
                        <Link to="/blog" className="flex items-center">BLOG</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;