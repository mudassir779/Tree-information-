import { useState } from "react";
import {
  FaPlus,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

const services = [
  { name: "Tarpon Springs", path: "/service-areas/" },
  { name: "Clear Water", path: "/service-areas/tree-service-clearwater-fl/" },
  { name: "Dunedin", path: "/service-areas/tree-service-dunedin-fl/" },
  { name: "New Port Richey", path: "/service-areas/tree-service-new-port-richey-fl/" },
  { name: "Oldsmar", path: "/service-areas/tree-service-oldsmar-fl/" },
  { name: "Palm Harbor", path: "/service-areas/tree-service-palm-harbor-fl/" },
  { name: "Safety Harbor", path: "/service-areas/tree-service-safety-harbor-fl/" },
];

const Dunedin = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const location = useLocation();

  const images = [
    {
      src: "/Tree-Removal-Dunedin-FL-400x284.jpg",
      alt: "Tree Removal Dunedin FL",
      title: "Tree Removal Dunedin FL 1",
    },
    {
      src: "/Tree-Services-Dunedin-FL.jpg",
      alt: "Tree Services Dunedin FL",
      title: "Tree Services, Dunedin, FL 2",
    },
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const navigate = (direction) => {
    const total = images.length;
    const nextIndex =
      direction === "prev"
        ? (currentImageIndex - 1 + total) % total
        : (currentImageIndex + 1) % total;
    setCurrentImageIndex(nextIndex);
  };

  return (
    <div className="w-full">
      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300"
          >
            <FaTimes />
          </button>

          <button
            onClick={() => navigate("prev")}
            className="absolute left-4 text-white text-3xl hover:text-gray-300"
          >
            <FaChevronLeft size={40} />
          </button>

          <div className="max-w-3xl w-full mx-4">
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="max-h-[80vh] w-full object-contain"
            />
          </div>

          <button
            onClick={() => navigate("next")}
            className="absolute right-4 text-white text-3xl hover:text-gray-300"
          >
            <FaChevronRight size={40} />
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative w-full mb-12">
        <div className="h-72 w-full relative">
          <div className="absolute inset-0 bg-[url('/hero-img.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4 uppercase">
              Tree Service Dunedin FL
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-11/12 mx-auto px-2 md:px-4 lg:px-8 mb-20">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column */}
          <div className="lg:w-3/4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">
              Expert Tree Care Services in Dunedin, FL
            </h2>

            <p className="text-base text-gray-700 font-medium mb-6">
              Ken's Tree Service has been a proud family tree care business for over two decades and counting!
              We are arborists, so you can trust us to provide excellent tree care services that will keep your
              trees looking healthy and beautiful. Additionally, our membership in ISA & TCIA demonstrates the
              commitment we have to provide reliable service. Get in touch with us today at{" "}
              <a href="tel:8122135997" className="text-green-800 underline">(812) 213-5997</a> to receive a free estimate.
            </p>

            <p className="text-gray-600 mb-6">
              Trees are essential to the environment and can be a great source of beauty, shade, and oxygen.
              Properly caring for trees is essential in preventing potential hazards from occurring due to
              overgrowth or damaged branches.
            </p>

            <p className="text-gray-600 mb-8">
              Ken's Tree Service has been providing quality tree care services to the Dunedin, FL area for over
              22 years. We offer:
            </p>

            {/* Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    fetchpriority="high"
                    decoding="async"
                    src={image.src}
                    alt={image.alt}
                    title={image.title}
                    className="w-full h-64 object-cover border-4 border-black shadow-xl group-hover:opacity-80 transition"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <div className="bg-green-700 bg-opacity-60 rounded-full p-3">
                      <FaPlus className="text-white text-2xl" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Services List */}
            <div className="space-y-10">
              {[
                { title: "Tree Trimming & Pruning", text: "Tree pruning and trimming are essential practices..." },
                { title: "Structural Pruning", text: "Structural pruning removes or reduces competing branches..." },
                { title: "Tree Removal", text: "Our team has training and experience to safely remove trees..." },
                { title: "Land Clearing", text: "We quickly and safely remove trees, stumps, brushes, and debris..." },
                { title: "Storm Clean Up", text: "We remove storm debris and restore your property quickly..." },
                { title: "Deep Root Fertilization", text: "We inject fertilizer to promote tree health and longevity..." },
                { title: "Commercial Tree Services", text: "We handle all tree services for commercial properties..." },
              ].map((service, i) => (
                <div key={i}>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.text}</p>
                </div>
              ))}
            </div>

            {/* Final CTA Block */}
            <div className="bg-blue-50 p-6 rounded-md mt-12 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Trust Ken's Tree Service for Professional Tree Care in Dunedin, FL
              </h3>
              <p className="text-gray-600 mb-3">
                With unmatched expertise and a passion for delivering outstanding results, we are the team to call when you need quality tree care services.
              </p>
              <p className="text-gray-600">
                Call us today at{" "}
                <a href="tel:8122135997" className="text-green-700 font-semibold underline">
                  (812) 213-5997
                </a>{" "}
                to keep your property in top shape.
              </p>
            </div>

            {/* Embedded Google Map */}
            <div className="w-full h-96 mt-10 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d225365.01501059684!2d-82.790327!3d28.044997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2f10dc5a12b61%3A0xcfa7bd97734810f5!2sDunedin%2C%20FL!5e0!3m2!1sen!2sus!4v1753730126100!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-none"
                title="Map of Dunedin, FL"
              ></iframe>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="lg:w-1/4 space-y-6">
            {/* Contact Box */}
            <div className="bg-white shadow-md hover:shadow-lg transition rounded overflow-hidden">
              <div className="relative h-48 sm:h-56 w-full">
                <div className="absolute inset-0 bg-[url('/map-bg.jpg')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-[#1e4d32e6]" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                  <h4 className="text-white font-bold text-center mb-2">
                    Contact Us Today for More Info!
                  </h4>
                  <a
                    href="tel:8122135997"
                    className="text-white text-2xl font-bold"
                  >
                    (812) 213-5997
                  </a>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white shadow-md rounded hover:shadow-lg transition">
              <h5 className="flex items-center font-bold bg-[#1e4d32] text-white px-5 py-3">
                <FaMapMarkerAlt className="mr-2 text-green-400" />
                Service Areas
              </h5>
              <ul className="divide-y divide-gray-200">
                {services.map((service, i) => (
                  <li key={i}>
                    <a
                      href={service.path}
                      className={`block px-4 py-2 transition ${
                        location.pathname === service.path
                          ? "bg-green-100 text-green-700 font-semibold"
                          : "hover:bg-green-50 text-gray-700"
                      }`}
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Dunedin;
