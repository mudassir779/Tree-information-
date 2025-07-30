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

const PalmHarbor = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: "/Tree-Removal-Palm-Harbor-FL-400x284.jpg", alt: "Tree Removal Palm Harbor FL", title: "Tree Services, Palm Harbor, FL 1" },
    { src: "/Tree-Services-Palm-Harbor-FL-400x284.jpg", alt: "Tree Services Palm Harbor FL", title: "Tree Services, Palm Harbor, FL 2" }
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
    <div className="font-sans">
      {/* Lightbox - Improved for mobile */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 sm:p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white text-2xl sm:text-3xl hover:text-gray-300 transition-colors"
          >
            <FaTimes />
          </button>

          <button
            onClick={() => navigate('prev')}
            className="absolute left-2 sm:left-4 text-white text-2xl sm:text-3xl hover:text-gray-300 transition-colors"
          >
            <FaChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>

          <div className="max-w-4xl w-full mx-4 sm:mx-8 md:mx-16">
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="max-h-[80vh] w-full object-contain"
            />
          </div>

          <button
            onClick={() => navigate('next')}
            className="absolute right-2 sm:right-4 text-white text-2xl sm:text-3xl hover:text-gray-300 transition-colors"
          >
            <FaChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
        </div>
      )}

      {/* Hero Section - Improved for mobile */}
      <section className="relative w-full mb-8 sm:mb-12">
        <div className="h-48 sm:h-64 md:h-80 w-full">
          <div className="absolute inset-0 bg-[url('/hero-img.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000b3] to-[#0000008c]"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4 uppercase">
              TREE SERVICE palm harbor FL
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Container - Responsive margins */}
      <div className="w-full sm:w-11/12 md:w-10/12 mx-auto mb-12 sm:mb-20 px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Main Content - Stack on mobile, row on desktop */}
        <div className="mt-8 sm:mt-12 mx-2 sm:mx-4 md:mx-8 lg:mx-12 xl:mx-20 flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Side - Main Content */}
          <div className="lg:w-2/3">
            <h1 className="text-xl sm:text-2xl font-extrabold text-gray-800 mb-4 sm:mb-6">
              Expert Tree Service by Certified Arborists in Palm Harbor, FL
            </h1>

            <p className="text-base sm:text-lg font-bold text-gray-700 mb-4 sm:mb-6">
              Ken's Tree Service has been a proud family tree care business for over two decades and counting! We are arborists, so you can trust us to provide excellent tree care services that will keep your trees looking healthy and beautiful. Additionally, our membership in ISA & TCIA demonstrates the commitment we have to provide reliable service. Get in touch with us today at
              {" "}<a href="tel:(812) 213-5997" className="text-[#245b3c] hover:underline">(812) 213-5997</a>{" "}
              to receive a free estimate.
            </p>

            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
              Trees are essential to the environment and can be a great source of beauty, shade, and oxygen. Properly caring for trees is essential in preventing potential hazards from occurring due to overgrowth or damaged branches. This is why professional tree care services are necessary to protect your property's value and safety.
            </p>

            <p className="mb-6 sm:mb-8 text-sm sm:text-base">
              Ken's Tree Service has been providing quality tree care services to the Palm Harbor, FL area for over 22 years. Our team of experts are members of the International Society of Arboriculture and Tree Care Industry Association, so you can trust that your trees will receive excellent care. We offer a range of services, such as:
            </p>

            {/* Image Gallery - Stack on small screens */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-2 mb-8 sm:mb-12">
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
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover border-2 sm:border-4 border-black shadow-lg sm:shadow-xl shadow-[#333] group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-[#afb236] bg-opacity-50 rounded-full p-2 sm:p-3">
                      <FaPlus className="text-white text-xl sm:text-2xl" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-12">
              <h2 className="text-xl sm:text-2xl font-extrabold mb-4 sm:mb-6 text-gray-800 border-b pb-2">
                Tree Services in Palm Harbor, FL
              </h2>

              <div className="space-y-6 sm:space-y-8">
                {[
                  {
                    title: "Tree Trimming & Pruning in Palm Harbor, FL",
                    content: "Tree pruning and trimming are essential practices to keep trees healthy and looking good. Our arborists will assess your tree's condition and carefully prune branches to shape or train them for optimal growth. We use ANSI A300 industry standards to ensure safe and beautiful results."
                  },
                  {
                    title: "Structural Pruning in Palm Harbor, FL",
                    content: "Structural pruning is the process of removing or reducing the length of branches competing with the leader and shaping the tree for optimal growth. We understand how to properly perform this service properly, ensuring that your trees stay healthy and look their best."
                  },
                  {
                    title: "Tree Removal in Palm Harbor, FL",
                    content: "Tree removal can be a tricky process requiring specialized techniques and equipment. At Ken's Tree Service, our team of arborists has the necessary training and experience to remove trees safely without damaging your property or surrounding features."
                  },
                  {
                    title: "Land Clearing in Palm Harbor, FL",
                    content: "Whether you're looking to clear land for construction or need a whole area cleared of vegetation, our team of arborists is an expert in land clearing. We have the necessary equipment and expertise to quickly and safely remove trees, stumps, brushes, and other debris."
                  },
                  {
                    title: "Storm Clean Up in Palm Harbor, FL",
                    content: "After severe weather events such as thunderstorms or hurricanes, your property may become littered with debris or downed branches from nearby trees. Ken's Tree Service is experienced in safely removing storm debris and can help you restore your property to its original condition."
                  },
                  {
                    title: "Deep Root Fertilization in Palm Harbor, FL",
                    content: "Deep root fertilization is an important part of tree maintenance and health. Our team of arborists will carefully inject fertilizer into your trees' roots to ensure that they remain healthy and grow properly for years to come."
                  },
                  {
                    title: "Commercial Tree Services in Palm Harbor, FL",
                    content: "Our team of arborists is experienced in providing commercial tree services, such as tree trimming and pruning, land clearing, and deep root fertilization. We understand the safety protocols necessary for commercial properties, ensuring that your trees are healthy and aesthetically pleasing."
                  }
                ].map((service, index) => (
                  <div key={index}>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{service.content}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 sm:mt-10 bg-blue-50 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Trust Ken's Tree Service for Professional Tree Care Services in Palm Harbor, FL</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  At Ken's Tree Service, our professional arborists have been providing top-notch services in Palm Harbor, FL for over two decades. With unmatched expertise and a passion for delivering outstanding results every single time, we are the team to call when you require quality tree care services.
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  We understand that your trees are a valuable investment and pride ourselves in providing reliable and cost-effective services. Don't hesitate to contact us at
                  {" "}
                  <a href="tel:812-213-5997" className="text-[#245b3c] hover:underline">
                    (812) 213-5997
                  </a>
                  {" "}
                  to learn more about how we can help keep your property looking its best.
                </p>
              </div>

              <div className="w-full h-64 sm:h-80 md:h-96 mt-6 sm:mt-8 mb-8 sm:mb-10 overflow-hidden shadow-md sm:shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112639.55925414668!2d-82.778351!3d28.085963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2f1d307e6570d%3A0x40993b1f9b5af5fc!2sPalm%20Harbor%2C%20FL!5e0!3m2!1sen!2sus!4v1753732614366!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Side - Sidebar - Full width on mobile */}
          <div className="pt-6 sm:pt-8 lg:pt-10 w-full lg:w-1/4 space-y-4 sm:space-y-6">
            <div className="bg-white shadow-md sm:shadow-[#0000004d] overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 sm:h-52 md:h-60 w-full">
                <div className="absolute inset-0 bg-[url('/map-bg.jpg')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-[#1e4d32e6]"></div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 sm:p-4">
                  <h1 className="text-sm sm:text-base md:text-lg font-bold text-white text-center px-2 sm:px-4">
                    Contact Us Today for More Info!
                  </h1>
                  <a href="tel:812-213-5997" className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4 hover:underline">
                    (812) 213-5997
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-sm sm:text-base flex items-center font-bold bg-[#1e4d32] w-full text-white mb-2 sm:mb-4 px-3 sm:px-5 py-1 sm:py-2">
                <FaMapMarkerAlt className="mr-2 text-green-600 text-sm sm:text-base" />
                Service Areas
              </h3>
              <ul className="space-y-1 sm:space-y-2 p-1 sm:p-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.path}
                      className={`block px-2 sm:px-3 py-1 sm:py-1.5 rounded transition text-sm sm:text-base ${window.location.pathname === service.path
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

export default PalmHarbor;