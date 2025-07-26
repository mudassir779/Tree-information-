import React, { useState } from 'react';
import { 
  FaFacebookF, 
  FaPhoneVolume, 
  FaEnvelope, 
  FaInstagram, 
  FaLocationDot, 
  FaGoogle, 
  FaAngleDown, 
  FaAngleUp,
  FaXmark 
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [showEstimateForm, setShowEstimateForm] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        serviceRequested: '',
        receiveInfo: false
    });

    const handleMouseEnter = (menu) => {
        setActiveDropdown(menu);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    const toggleEstimateForm = () => {
        setShowEstimateForm(!showEstimateForm);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setShowEstimateForm(false);
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            serviceRequested: '',
            receiveInfo: false
        });
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
                        className="hover:text-green-600 transition-colors duration-200">
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://search.google.com/local/writereview?placeid=ChIJU-pP1XeNwogR1JU0sbJZtbU"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Follow on Google"
                        className="hover:text-green-600 transition-colors duration-200">
                        <FaGoogle />
                    </a>
                    <a
                        href="https://www.instagram.com/kenstreeserviceinc/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Follow on Instagram"
                        className="hover:text-green-600 transition-colors duration-200">
                        <FaInstagram />
                    </a>
                </div>
                <div className='flex space-x-6'>
                    <a 
                        href="https://www.google.com/maps/place/Ken's+Tree+Service/@28.1114504,-82.749315,11z/data=!4m2!3m1!1s0x0:0xb5b559b2b13495d4?sa=X&hl=en-US&gl=us&ved=2ahUKEwi607afwKf9AhUcg2oFHfvYCqoQ_BJ6BAh5EAg" 
                        className="flex items-center space-x-1 hover:text-green-600 transition-colors duration-200"
                    >
                        <FaLocationDot className="text-green-600" />
                        <p>Tarpon Springs, Florida 34688</p>
                    </a>

                    <a 
                        href="mailto:support@kens-tree-service.com" 
                        className="flex items-center space-x-1 hover:text-green-600 transition-colors duration-200"
                    >
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
                            <a href="tel:+17279345804" className="hover:text-green-600 transition-colors duration-200">
                                <p className="text-sm">CALL FOR MORE INFORMATION</p>
                                <p className="text-lg font-bold">812-213-5997</p>
                            </a>
                        </div>
                    </div>
                    <button 
                        onClick={toggleEstimateForm}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-3xl font-bold transition-colors duration-200"
                    >
                        REQUEST A FREE ESTIMATE
                    </button>
                </div>
            </div>

            {/* Navigation */}
            <nav className="bg-green-700 relative">
                <ul className="flex w-full justify-center space-x-8 py-3 text-white font-medium">
                    <li className="hover:underline">
                        <Link to="/" className="flex items-center py-2">HOME</Link>
                    </li>
                    
                    <li className="relative group">
                        <div className="flex items-center">
                            <Link 
                                to="/about-us" 
                                className="flex items-center py-2 hover:underline"
                                onMouseEnter={() => handleMouseEnter('about')}
                                onMouseLeave={handleMouseLeave}
                            >
                                ABOUT US
                                {activeDropdown === 'about' ? <FaAngleUp className="ml-1" /> : <FaAngleDown className="ml-1" />}
                            </Link>
                        </div>
                        {activeDropdown === 'about' && (
                            <ul 
                                className="absolute left-0 mt-0 w-48 bg-white text-green-800 shadow-lg rounded-b z-50"
                                onMouseEnter={() => handleMouseEnter('about')}
                                onMouseLeave={handleMouseLeave}
                            >
                                {aboutUsItems.map((item, index) => (
                                    <li key={index} className="hover:bg-green-100 transition-colors duration-200">
                                        <Link to={item.path} className="block px-4 py-2">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    <li className="relative group">
                        <div className="flex items-center">
                            <Link 
                                to="/services" 
                                className="flex items-center py-2 hover:underline"
                                onMouseEnter={() => handleMouseEnter('services')}
                                onMouseLeave={handleMouseLeave}
                            >
                                SERVICES
                                {activeDropdown === 'services' ? <FaAngleUp className="ml-1" /> : <FaAngleDown className="ml-1" />}
                            </Link>
                        </div>
                        {activeDropdown === 'services' && (
                            <ul 
                                className="absolute left-0 mt-0 w-64 bg-white text-green-800 shadow-lg rounded-b z-50"
                                onMouseEnter={() => handleMouseEnter('services')}
                                onMouseLeave={handleMouseLeave}
                            >
                                {servicesItems.map((item, index) => (
                                    <li key={index} className="hover:bg-green-100 transition-colors duration-200">
                                        <Link to={item.path} className="block px-4 py-2">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    <li className="relative group">
                        <div className="flex items-center">
                            <Link 
                                to="/service-areas" 
                                className="flex items-center py-2 hover:underline"
                                onMouseEnter={() => handleMouseEnter('areas')}
                                onMouseLeave={handleMouseLeave}
                            >
                                SERVICE AREAS
                                {activeDropdown === 'areas' ? <FaAngleUp className="ml-1" /> : <FaAngleDown className="ml-1" />}
                            </Link>
                        </div>
                        {activeDropdown === 'areas' && (
                            <ul 
                                className="absolute left-0 mt-0 w-64 bg-white text-green-800 shadow-lg rounded-b z-50"
                                onMouseEnter={() => handleMouseEnter('areas')}
                                onMouseLeave={handleMouseLeave}
                            >
                                {serviceAreasItems.map((item, index) => (
                                    <li key={index} className="hover:bg-green-100 transition-colors duration-200">
                                        <Link to={item.path} className="block px-4 py-2">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    <li className="hover:underline">
                        <Link to="/photo-gallery" className="flex items-center py-2">PHOTO GALLERY</Link>
                    </li>
                    <li className="hover:underline">
                        <Link to="/contact-us" className="flex items-center py-2">CONTACT US</Link>
                    </li>
                    <li className="hover:underline">
                        <Link to="/blog" className="flex items-center py-2">BLOG</Link>
                    </li>
                </ul>
            </nav>

            {/* Estimate Request Modal */}
            {showEstimateForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative">
                        <button 
                            onClick={toggleEstimateForm}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            <FaXmark className="text-xl" />
                        </button>
                        
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                                Get a Free Estimate
                            </h2>
                            
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                                        Full Name*
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                                
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                        Email*
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                                
                                <div className="mb-4">
                                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                                        Phone*
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                                
                                <div className="mb-4">
                                    <label htmlFor="serviceRequested" className="block text-gray-700 font-medium mb-2">
                                        Service Requested*
                                    </label>
                                    <select
                                        id="serviceRequested"
                                        name="serviceRequested"
                                        value={formData.serviceRequested}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    >
                                        <option value="">Select a service</option>
                                        {servicesItems.map((service, index) => (
                                            <option key={index} value={service.name}>
                                                {service.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                
                                <div className="mb-6 flex items-center">
                                    <input
                                        type="checkbox"
                                        id="receiveInfo"
                                        name="receiveInfo"
                                        checked={formData.receiveInfo}
                                        onChange={handleInputChange}
                                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="receiveInfo" className="ml-2 block text-gray-700">
                                        I confirm that I want to receive helpful info and discounted offers from this company
                                    </label>
                                </div>
                                
                                <button
                                    type="submit"
                                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-200"
                                >
                                    Submit Info
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;