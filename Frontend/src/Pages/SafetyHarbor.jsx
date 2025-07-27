import React, { useState } from "react";
import { FaPlus, FaChevronLeft, FaChevronRight, FaTimes, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const services = [
  { name: "Tarpon Springs", path: "/service-areas/tarpon-springs" },
  { name: "Clear Water", path: "/service-areas/clearwater" },
  { name: "Dunedin", path: "/service-areas/dunedin" },
  { name: "New Port Richey", path: "/service-areas/new-port-richey" },
  { name: "Oldsmar", path: "/service-areas/oldsmar" },
  { name: "Palm Harbor", path: "/service-areas/palm-harbor" },
  { name: "Safety Harbor", path: "/service-areas/safety-harbor" },
];

const SafetyHarbor = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    { src: "/31.jpg", alt: "Tree service example" },
    { src: "/32.jpg", alt: "Tree trimming example" }
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentImageIndex - 1 + images.length) % images.length;
    } else {
      newIndex = (currentImageIndex + 1) % images.length;
    }
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="">
      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors"
          >
            <FaTimes />
          </button>
          
          <button 
            onClick={() => navigate('prev')}
            className="absolute left-4 text-white text-3xl hover:text-gray-300 transition-colors"
          >
            <FaChevronLeft size={40} />
          </button>
          
          <div className="max-w-4xl w-full mx-16">
            <img 
              src={images[currentImageIndex].src} 
              alt={images[currentImageIndex].alt}
              className="max-h-[80vh] w-full object-contain"
            />
          </div>
          
          <button 
            onClick={() => navigate('next')}
            className="absolute right-4 text-white text-3xl hover:text-gray-300 transition-colors"
          >
            <FaChevronRight size={40} />
          </button>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src="/truck.jpeg"
          alt="Tree trimming service"
          className="w-full h-96 object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            TREE SERVICE safety harbor FL
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-12 mx-4 sm:mx-8 lg:mx-20 flex flex-col lg:flex-row gap-8">
        {/* Left Side - Main Content */}
        <div className="lg:w-2/3">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Professional Tree Services in Safety Harbor, FL
          </h1>

          <p className="text-lg font-semibold text-gray-700 mb-6">
            Ken’s Tree Service has been a proud family tree care business for over two decades and counting! We are arborists, so you can trust us to provide excellent tree care services that will keep your trees looking healthy and beautiful. Additionally, our membership in ISA & TCIA demonstrates the commitment we have to provide reliable service. Get in touch with us today at (727) 934-5804 to receive a free estimate.
          </p>

          <p className="text-gray-600 mb-8">
            Trees are essential to the environment and can be a great source of beauty, shade, and oxygen. Properly caring for trees is essential in preventing potential hazards from occurring due to overgrowth or damaged branches. This is why professional tree care services are necessary to protect your property’s value and safety. 
          </p>
          
          <p className="mb-8">
           Ken’s Tree Service has been providing quality tree care services to the Safety Harbor, FL area for over 22 years. Our team of experts are members of the International Society of Arboriculture and Tree Care Industry Association, so you can trust that your trees will receive excellent care. We offer a range of services, such as:  
          </p>

          {/* Image Gallery */}
          <div className="relative flex gap-4 md:gap-8 mt-2 mb-12">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="flex-1 relative group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black bg-opacity-50 rounded-full p-3">
                    <FaPlus className="text-white text-2xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
              Tree Services in Saftey Harbor, FL
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Tree Trimming & Pruning in Safety Harbor, FL</h3>
                <p className="text-gray-600">
                  Tree pruning and trimming are essential practices to keep trees healthy and looking good. Our arborists will assess your tree’s condition and carefully prune branches to shape or train them for optimal growth. We use ANSI A300 industry standards to ensure safe and beautiful results.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Structural Pruning in Safety Harbor, FL</h3>
                <p className="text-gray-600">
                Structural pruning is the process of removing or reducing the length of branches competing with the leader and shaping the tree for optimal growth. We understand how to properly perform this service properly, ensuring that your trees stay healthy and look their best.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Tree Removal in Safety Harbor, FL</h3>
                <p className="text-gray-600">
                  Tree removal can be a tricky process requiring specialized techniques and equipment. At Ken’s Tree Service, our team of arborists has the necessary training and experience to remove trees safely without damaging your property or surrounding features. 
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Land Clearing in Safety Harbor, FL</h3>
                <p className="text-gray-600">
                 Whether you’re looking to clear land for construction or need a whole area cleared of vegetation, our team of arborists is an expert in land clearing. We have the necessary equipment and expertise to quickly and safely remove trees, stumps, brushes, and other debris. 
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Storm Clean Up in Safety Harbor, FL</h3>
                <p className="text-gray-600">
                  After severe weather events such as thunderstorms or hurricanes, your property may become littered with debris or downed branches from nearby trees. Ken’s Tree Service is experienced in safely removing storm debris and can help you restore your property to its original condition.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Deep Root Fertilization in Safety Harbor, FL</h3>
                <p className="text-gray-600">
                 Deep root fertilization is an important part of tree maintenance and health. Our team of arborists will carefully inject fertilizer into your trees’ roots to ensure that they remain healthy and grow properly for years to come.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Commercial Tree Services in Safety Harbor, FL</h3>
                <p className="text-gray-600">
                  Our team of arborists is experienced in providing commercial tree services, such as tree trimming and pruning, land clearing, and deep root fertilization. We understand the safety protocols necessary for commercial properties, ensuring that your trees are healthy and aesthetically pleasing.  
                </p>
              </div>
            </div>

            <div className="mt-10 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Trust Ken’s Tree Service for Professional Tree Care Services in Safety Harbor, FL</h3>
              <p className="text-gray-600">
                At Ken’s Tree Service, our professional arborists have been providing top-notch services in Safety Harbor, FL for over two decades. With unmatched expertise and a passion for delivering outstanding results every single time, we are the team to call when you require quality tree care services.   
              </p>
              <p className="text-gray-600 ">We understand that your trees are a valuable investment and pride ourselves in providing reliable and cost-effective services. Don’t hesitate to contact us at (727) 934-5804 to learn more about how we can help keep your property looking its best.</p>
            </div>

            <div className="w-full h-96 mt-8 mb-10 rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112577.66100994803!2d-82.772991!3d28.144908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c28cfd6f0942df%3A0xf4297f0ce0bf24b7!2sTarpon%20Springs%2C%20FL!5e0!3m2!1sen!2sus!4v1753449185853!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Right Side - Sidebar */}
        <div className="lg:w-1/3">
          {/* Contact Card with Image */}
          <div className="relative rounded-lg overflow-hidden shadow-md mb-4">
            <img 
              src="/12.jpg" 
              alt="Tree service professional" 
              className="w-full h-60 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-4 text-center">
              <h1 className="text-2xl font-bold text-white mb-2">Contact Us Today</h1>
              <p className="text-xl text-white font-medium">(727) 934-5804</p>
              <a 
                href="tel:7279345804"
                className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors inline-flex items-center"
              >
                <FaPhone className="mr-2" /> Call Now
              </a>
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-green-600" />
              Service Areas
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.path}
                    className="block px-4 py-3 bg-gray-50 hover:bg-green-50 text-gray-700 hover:text-green-700 rounded-md transition-colors border-l-4 border-green-500"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">Emergency Service Available</h4>
              <p className="text-gray-600 mb-3">24/7 storm damage and hazardous tree removal</p>
              <a 
                href="tel:7279345804" 
                className="block w-full text-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Call Now: (727) 934-5804
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyHarbor;