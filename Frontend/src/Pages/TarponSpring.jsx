import { useState } from "react";
import { FaPlus, FaChevronLeft, FaChevronRight, FaTimes, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const services = [
  { name: "Tarpon Springs", path: "/service-areas/" },
  { name: "Clear Water", path: "/service-areas/tree-service-clearwater-fl/" },
  { name: "Dunedin", path: "/service-areas/tree-service-dunedin-fl/" },
  { name: "New Port Richey", path: "/service-areas/tree-service-new-port-richey-fl/" },
  { name: "Oldsmar", path: "/service-areas/tree-service-oldsmar-fl/" },
  { name: "Palm Harbor", path: "/service-areas/tree-service-palm-harbor-fl/" },
  { name: "Safety Harbor", path: "/service-areas/tree-service-safety-harbor-fl/" },
];

const TarponSpring = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: "/Tree-Removal-Palm-Harbor-FL-400x284.jpg", alt: "Tree Removal Tarpon Springs FL", title: "Tree Services, Tarpon Springs, FL 1"},
    { src: "/Tree-Services-Safety-Harbor-FL-400x284.jpg", alt: "Tree Services Tarpon Springs FL", title: "Tree Services, Tarpon Springs, FL 2" }
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
      <section className="relative w-full mb-12">
        <div className="h-70 w-full">
          <div className="absolute inset-0 bg-[url('/hero-img.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000b3] to-[#0000008c]"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4 uppercase">
              TREE SERVICE Tarpon Springs FL
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Container with side margins */}
      <div className="w-10/12 mx-auto mb-20 px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="mt-12 mx-4 sm:mx-8 lg:mx-20 flex flex-col lg:flex-row gap-8">
          {/* Left Side - Main Content */}
          <div className="lg:w-2/3">
            <h1 className="text-2xl font-extrabold text-gray-800 mb-6">
              Experienced Tree Services Professionals in Tarpon Springs, FL
            </h1>

            <p className="text-md font-bold text-gray-700 mb-6">
              Ken's Tree Service has been a proud family tree care business for over two decades and counting! We are arborists, so you can trust us to provide excellent tree care services that will keep your trees looking healthy and beautiful. Additionally, our membership in ISA & TCIA demonstrates the commitment we have to provide reliable service. Get in touch with us today at
              {" "}<a href="tel:(812) 213-5997" className="text-[#245b3c]">(812) 213-5997</a>{" "}
              to receive a free estimate.
            </p>

            <p className="text-gray-600 mb-8">
              Trees are essential to the environment and can be a great source of beauty, shade, and oxygen. Properly caring for trees is essential in preventing potential hazards from occurring due to overgrowth or damaged branches. This is why professional tree care services are necessary to protect your property's value and safety.
            </p>

            <p className="mb-8">
              Ken's Tree Service has been providing quality tree care services to the Tarpon Springs, FL area for over 22 years. Our team of experts are members of the International Society of Arboriculture and Tree Care Industry Association, so you can trust that your trees will receive excellent care.
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
                    fetchpriority="high"
                    decoding="async"
                    src={image.src}
                    alt={image.alt}
                    title={image.title}
                    className="w-full h-64 md:h-80 object-cover border-4 border-black shadow-xl shadow-[#333] group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-[#afb236] bg-opacity-50 rounded-full p-3">
                      <FaPlus className="text-white text-2xl" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-extrabold mb-6 text-gray-800 border-b pb-2">
                Tree Services in Tarpon Springs, FL
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Tree Trimming & Pruning</h3>
                  <p className="text-gray-600">
                    Tree pruning and trimming are essential practices to keep trees healthy and looking good. Our arborists will assess your tree's condition and carefully prune branches to shape or train them for optimal growth. We use ANSI A300 industry standards to ensure safe and beautiful results.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Structural Pruning</h3>
                  <p className="text-gray-600">
                    Structural pruning is the process of removing or reducing the length of branches competing with the leader and shaping the tree for optimal growth. We understand how to properly perform this service, ensuring that your trees stay healthy and look their best.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Tree Removal</h3>
                  <p className="text-gray-600">
                    Tree removal can be a tricky process requiring specialized techniques and equipment. Our certified arborists have the training and experience to remove trees safely without damaging your property.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Land Clearing</h3>
                  <p className="text-gray-600">
                    Whether for construction or landscaping, our land clearing services efficiently remove trees, stumps, and brush with minimal environmental impact.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Storm Clean Up</h3>
                  <p className="text-gray-600">
                    After severe weather, our team quickly and safely removes storm debris. We help restore your property while following all safety protocols.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Deep Root Fertilization</h3>
                  <p className="text-gray-600">
                    Our deep root fertilization promotes healthy growth by delivering nutrients directly to the root zone. This essential service helps trees resist disease and environmental stress.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Commercial Tree Services</h3>
                  <p className="text-gray-600">
                    From routine maintenance to emergency services, we provide comprehensive tree care for commercial properties with minimal business disruption.
                  </p>
                </div>
              </div>

              <div className="mt-10 bg-blue-50">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Trust Ken's Tree Service</h3>
                <p className="text-gray-600 mb-4">
                  At Ken's Tree Service, our professional arborists have been providing top-notch services in Tarpon Springs, FL for over two decades. With unmatched expertise and a passion for delivering outstanding results every single time, we are the team to call when you require quality tree care services. 
                </p>
                <p className="text-gray-600">
                  We understand that your trees are a valuable investment and pride ourselves in providing reliable and cost-effective services. Don't hesitate to contact us at
                  {" "}
                  <a href="tel:812-213-5997" className="text-[#245b3c]">
                    (812) 213-5997
                  </a>
                  {" "}
                  to learn more about how we can help keep your property looking its best.
                </p>
              </div>

              <div className="w-full h-96 mt-8 overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56288.802577753515!2d-82.85093050795753!3d28.144961138354184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c28cfd6f0942df%3A0xf4297f0ce0bf24b7!2sTarpon%20Springs%2C%20FL!5e0!3m2!1sen!2sus!4v1753736459901!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Side - Sidebar */}
          <div className="pt-10 lg:w-1/4 lg-h-full space-y-6">
            <div className="bg-white shadow-md shadow-[#0000004d] overflow-hidden transform hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-60 w-full">
                <div className="absolute inset-0 bg-[url('/map-bg.jpg')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-[#1e4d32e6]">
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h1 className="text-md md:text-lg font-bold text-white text-center px-4">
                    Contact Us Today for More Info!
                  </h1>
                  <a href="tel:812-213-5997" className="text-white text-xl md:text-3xl font-bold mb-4">
                    (812) 213-5997
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md  hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-md flex items-center font-bold bg-[#1e4d32] w-full text-white mb-4 px-5 py-2">
                <FaMapMarkerAlt className="mr-2 text-green-600" />
                Service Areas
              </h3>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.path}
                      className={`block px-3 rounded transition ${location.pathname === service.path
                        ? "bg-green-100 text-green-700 font-medium"
                        : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                        }`}
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarponSpring;