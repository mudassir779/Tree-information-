import { FaFacebookF, FaGoogle, FaInstagram } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className="relative">
                {/* Background image with green tint overlay */}
                <div className="absolute inset-0 [background-image:linear-gradient(180deg,rgba(27,71,48,0.87)_0%,rgba(27,71,48,0.93)_99%),url('/cta2.jpg')] bg-cover bg-center">
                </div>

                {/* Content */}
                <div className="relative z-10 py-16">
                    <div className="container mx-auto px-4 flex flex-col items-center text-center">
                        <div className="mb-8 max-w-3xl">
                            <h3 className="text-2xl md:text-3xl font-bold leading-tight text-white">
                                We Provide Residential and Commercial Tree
                                Services in
                                Tarpon Springs, FL & The Surrounding Areas
                            </h3>
                            <h4 className="text-sm md:text-sm font-semibold mb-4 text-gray-300">
                                CONTACT US FOR MORE INFORMATION
                            </h4>
                            <a href='tel:812-213-5997' className="text-5xl md:text-5xl font-bold mb-6 text-white">
                                812-213-5997
                            </a>
                        </div>
                        <div>
                            <button className="bg-green-600 hover:bg-green-700 hover:rounded-2xl text-white px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300">
                                REQUEST A FREE ESTIMATE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {/* Company Info Section */}
                        <div className="md:col-span-1">
                            <div className="mb-6">
                                <img
                                    src="/logo.png"
                                    alt="Ken's Tree Service"
                                    className="h-20 w-auto mb-4"
                                />
                            </div>
                            <div className="mb-6 text-gray-700 text-sm leading-relaxed">
                                Are trees on your property dying, falling
                                down, or causing you concern? We are
                                ready to hear from you! If you have dying
                                trees, ugly stumps, or just need your
                                landscape cleaned up from fallen debris,
                                reach out today.
                            </div>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.facebook.com/kenstrees"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Follow on Facebook"
                                    className="text-gray-600 hover:text-green-600 transition-colors"
                                >
                                    <FaFacebookF size={18} />
                                </a>
                                <a
                                    href="https://search.google.com/local/writereview?placeid=ChIJU-pP1XeNwogR1JU0sbJZtbU"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Follow on Google"
                                    className="text-gray-600 hover:text-green-600 transition-colors"
                                >
                                    <FaGoogle size={18} />
                                </a>
                                <a
                                    href="https://www.instagram.com/kenstreeserviceinc/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Follow on Instagram"
                                    className="text-gray-600 hover:text-green-600 transition-colors"
                                >
                                    <FaInstagram size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Services Section */}
                        <div className="md:col-span-1">
                            <div className="mb-3">
                                <h3 className="font-bold text-lg text-gray-800">SERVICES</h3>
                            </div>
                            <div className="border-t-2 border-gray-300 w-16 mb-4"></div>
                            <ul className="space-y-2 text-sm list-disc list-inside">
                                <li>
                                    <Link to="/services/tree-removal"  className="text-gray-700 hover:text-green-600 transition-colors">
                                        Tree Removal
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services/tree-trimming-pruning-tarpon-springs-fl" className="text-gray-700 hover:text-green-600 transition-colors">
                                        Tree Trimming & Pruning
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services/deep-root-fertilization-tarpon-springs-fl" className="text-gray-700 hover:text-green-600 transition-colors">
                                        Deep Root Fertilization
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services/structural-pruning-tarpon-springs-fl" className="text-gray-700 hover:text-green-600 transition-colors">
                                        Structural Pruning
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services/land-clearing-tarpon-springs-fl" className="text-gray-700 hover:text-green-600 transition-colors">
                                        Land Clearing
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services/storm-clean-up-tarpon-springs-fl" className="text-gray-700 hover:text-green-600 transition-colors">
                                        Storm Clean Up
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services/commercial-tree-services-tarpon-springs-fl" className="text-gray-700 hover:text-green-600 transition-colors">
                                        Commercial Tree Services
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Service Areas Section */}
                        <div className="md:col-span-1">
                            <div className="mb-3">
                                <h3 className="font-bold text-lg text-gray-800">SERVICE AREAS</h3>
                            </div>
                            <div className="border-t-2 border-gray-300 w-16 mb-4"></div>
                            <ul className="space-y-2 text-sm list-disc list-inside">
                                <li>
                                    <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">
                                        Tarpon Springs, FL
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services-areas/tree-service-clearwater-fl" className="text-gray-700 hover:text-green-600 transition-colors">
                                        Clearwater, FL
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services-areas/tree-service-dunedin-fl" className="text-gray-700 hover:text-green-600 transition-colors">
                                        Dunedin, FL
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services-areas/tree-service-new-port-richey-fl" className="text-gray-700 hover:text-green-600 transition-colors">
                                        New Port Richey, FL
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services-areas/tree-service-oldsmar-fl" className="text-gray-700 hover:text-green-600 transition-colors">
                                        Oldsmar, FL
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services-areas/tree-service-palm-harbor-fl" className="text-gray-700 hover:text-green-600 transition-colors">
                                        Palm Harbor, FL
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services-areas/tree-service-safety-harbor-fl" className="text-gray-700 hover:text-green-600 transition-colors">
                                        Safety Harbor, FL
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Us Section */}
                        <div className="md:col-span-1">
                            <div className="mb-3">
                                <h3 className="font-bold text-lg text-gray-800">CONTACT US</h3>
                            </div>
                            <div className="border-t-2 border-gray-300 w-16 mb-4"></div>
                            <div className="space-y-2 text-sm text-gray-700">
                                <p>Tarpon Springs, Florida 34688</p>
                                <p>
                                    <a href="mailto:Thetreexperts@gmail.com" className="hover:text-green-600 transition-colors">
                                        Thetreexperts@gmail.com
                                    </a>
                                </p>
                                <p>
                                    <a href="tel:+17279345804" className="hover:text-green-600 transition-colors">
                                        (727) 934-5804
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Location Section */}
                        <div className="md:col-span-1">
                            <div className="mb-3">
                                <h3 className="font-bold text-lg text-gray-800">LOCATION</h3>
                            </div>
                            <div className="border-t-2 border-gray-300 w-16 mb-4"></div>
                            <div className="w-full h-48">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d900640.4512516966!2d-82.686871!3d28.142629!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c28d77d54fea53%3A0xb5b559b2b13495d4!2sKen&#39;s%20Tree%20Service%2C%20Inc!5e0!3m2!1sen!2sus!4v1753296642078!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#B0B694] text-white">
                <div className="max-w-7xl mx-auto px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                        {/* Left Section - Copyright and Links */}
                        <div className="text-sm space-y-2">
                            <div>
                                <p>© 2025 <span className="font-medium">American Tree Experts, Land LLC</span>. All Rights Reserved.</p>
                            </div>
                            <div className="flex flex-wrap items-center gap-1">
                                <Link to="/" className="text-white hover:text-green-400 transition-colors">
                                    Home
                                </Link>
                                <span className="text-white mx-1">|</span>
                                <Link to="/blog" className="text-white hover:text-green-400 transition-colors">
                                    Blog
                                </Link>
                                <span className="text-white mx-1">|</span>
                                <Link to="/privacy-policy" className="text-white hover:text-green-400 transition-colors">
                                    Privacy Policy
                                </Link>
                                <span className="text-white mx-1">|</span>
                                <Link to="/sitemap" className="text-white hover:text-green-400 transition-colors">
                                    Sitemap
                                </Link>
                                <span className="text-white mx-1">|</span>
                                <Link to="/contact-us" className="text-white hover:text-green-400 transition-colors">
                                    Contact Us
                                </Link>
                            </div>
                        </div>

                        {/* Center Section - Payment Methods */}
                        <div className="flex-shrink-0">
                            <img
                                src="/ss-pm.png"
                                alt="Accepted payment methods - Mastercard, Visa, American Express, Discover, and more"
                                className="h-12 w-auto"
                                loading="lazy"
                            />
                        </div>

                        {/* Right Section - Powered by Tree Service Digital */}
                        <div className="flex items-center gap-2 text-sm">
                            <a
                                href="https://treeservicedigital.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition-opacity"
                            >
                                <img
                                    src="/treeservicedigital-logo.png"
                                    alt="Tree Service Digital"
                                    className="h-10 w-auto"
                                    loading="lazy"
                                />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer