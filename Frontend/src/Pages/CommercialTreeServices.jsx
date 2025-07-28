import React from "react";

const services = [
  { name: "Tree Removal", path: "/services/tree-removal-tarpon-springs-fl/" },
  { name: "Tree Trimming & Pruning", path: "/services/tree-trimming-pruning-tarpon-springs-fl/" },
  { name: "Deep Root Fertilization", path: "/services/deep-root-fertilization-tarpon-springs-fl/"},
  { name: "Structural Pruning", path: "/services/structural-pruning-tarpon-springs-fl/" },
  { name: "Land Clearing", path: "/services/land-clearing-tarpon-springs-fl/" },
  { name: "Storm Clean Up", path: "/services/storm-clean-up-tarpon-springs-fl/" },
  { name: "Commercial Tree Services", path: "/services/commercial-tree-services-tarpon-springs-fl/",},
];

const CommercialTreeServices = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full mb-12">
        <div className="h-70 w-full">
          <div className="absolute inset-0 bg-[url('/hero-img.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000b3] to-[#0000008c]"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4 uppercase">
              Commercial Tree Services
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Container with side margins */}
      <div className="w-10/12 mx-auto pt-10 px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Main Content */}
          <div className="lg:w-2/3">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-3">
              Expert Tree Service by Certified Arborists in Tarpon Springs, FL
            </h1>

            <p className="text-md font-bold text-gray-700 mb-6">
              Ken's Tree Service provides professional commercial tree services to
              Tarpon Springs, FL, and surrounding areas. From pruning to complete
              removal with expert advice and care, our team of arborists works
              safely and efficiently to take your project from start to finish.
              Call us at
              {" "}
              <a href="tel:812-213-5997" className="text-[#245b3c]">
                812-213-5997
              </a>{" "}
              to get started today.
            </p>

            <p className="text-gray-600 mb-8">
              Trees are a valuable asset for any home or property, adding natural
              beauty, increasing air and water quality, and even boosting property
              value. However, it can be easy to overlook the responsibility of
              sufficient tree maintenance which can lead to sickness and damage. .
            </p>
            <p className="text-gray-600 mb-8">
              That's why Ken's Tree Service is here to help. We specialize in
              commercial tree services, ensuring the trees on your property are
              well-maintained and assessed for safety risks. Whether you are
              looking to make a positive brand impression, boost curb appeal, or
              provide fresh air for employees and customers, commercial tree
              services are irreplaceable.
            </p>

            <div className="flex gap-30">
              <div className="flex-1">
                <img fetchpriority="high" decoding="async" src="/Commercial_Tree_Maintenance1.jpg" alt="Commercial Tree Maintenance" title="Commercial_Tree_Maintenance1" />
              </div>
              <div className="flex-1">
                <img decoding="async" src="/commercial.jpg" alt="Commercial" title="commercial" />
              </div>
            </div>
            <div className="mt-12">
              <h1 className="text-2xl font-bold mb-4">
                Partnering with Your HOA Community for Tree Maintenance and Safety
                Assessments
              </h1>
              <p className="mb-4">
                At Ken's Tree Service, we understand the challenges associated
                with managing trees in homeowners' and business associations. We
                know that it can be difficult to determine the correct time for
                tree trimming and care, as well as how much should be invested in
                commercial tree services. .
              </p>
              <p className="mb-4">
                Most board members and business owners don't have the knowledge or
                expertise to make the best decision when it comes to tree care,
                which is why we are here for you. Our team of experts has the
                experience and dedication to help make sure that your trees remain
                healthy and look great for years to come.
              </p>
              <p className="mb-4">
                We can also create a tailored tree maintenance budget for you that
                will provide lasting and cost-effective results. By carefully
                crafting an effective Homeowner's Association Tree Maintenance
                Plan, our team can keep your trees safe and healthy while
                delivering years of rewards to the inhabitants of your community.
              </p>

              <img decoding="async" className="my-10 w-full h-70 object-cover" src="/Commercial_Tree_Maintenance3.jpg" alt="Commercial Tree Maintenance" title="Commercial_Tree_Maintenance3" />

              <div className="w-full h-96 mt-8 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  className="mb-5 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112577.66100994803!2d-82.772991!3d28.144908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c28cfd6f0942df%3A0xf4297f0ce0bf24b7!2sTarpon%20Springs%2C%20FL!5e0!3m2!1sen!2sus!4v1753449185853!5m2!1sen!2sus"
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
              <h3 className="text-md font-bold bg-[#1e4d32] w-full text-white mb-4 px-5 py-2">
                Our Services
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

      <div className="w-full bg-gradient-to-b from-[#f8faec] to-[#bcc49b] py-20 mt-10">
        <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-center text-[#245B3C] text-lg font-bold uppercase">
              Our Services
            </p>
            <h1 className="text-4xl font-extrabold text-gray-900">
              Professional Commercial Tree Services in Tarpon Springs, FL, and
              Surrounding Areas
            </h1>
            <div className="flex justify-center my-5">
              <img decoding="async" src="/divider.png" alt="divider" title="divider" />
            </div>
            <p className="max-w-full mx-auto text-center text-gray-700 leading-relaxed">
              When it comes to quality tree care services, there is no better
              choice than Ken's Tree Service. We are dedicated to providing
              excellent customer service with a focus on safety and quality
              results for all types of residential and commercial properties.
            </p>
          </div>

          {/* First row - 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Tree Trimming and Pruning Services */}
            <div className="bg-white rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-2 border-[#FFFFFF]">
              <img loading="lazy" decoding="async" width="502" height="276" src="/tree-trimming-and-pruning.jpg" alt="tree-trimming-and-pruning" title="tree-trimming-and-pruning" className="w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-center text-gray-800">
                  Tree Trimming and Pruning Services
                </h3>
                <p className="text-gray-600 mt-4 text-center">
                  Tree pruning and trimming can be a daunting task, particularly
                  for larger commercial properties. We understand the importance
                  of proper trimming and pruning to maintain the desired shape.
                </p>
                <div className="mt-6 text-center">
                  <button className="my-6 bg-[#afb236] hover:bg-[#908927] hover:rounded text-white font-bold py-3 px-8 rounded-3xl shadow-md transition-colors duration-300 transform hover:scale-105">
                    Discover More
                  </button>
                </div>
              </div>
            </div>

            {/* Tree Health Assessments */}
            <div className="bg-white rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-2 border-[#FFFFFF]">
              <img loading="lazy" decoding="async" src="/structural-pruning.jpg" alt="structural-pruning" title="structural-pruning" className="w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-center text-gray-800">
                  Tree Health Assessments
                </h3>
                <p className="text-gray-600 mt-4 text-center">
                  Tree health assessments are essential for any commercial
                  property. They can help identify any potential risks or
                  problems and create a plan for how to best address them.
                </p>
                <div className="mt-6 text-center">
                  <button className="my-6 bg-[#afb236] hover:bg-[#908927] hover:rounded text-white font-bold py-3 px-8 rounded-3xl shadow-md transition-colors duration-300 transform hover:scale-105">
                    Discover More
                  </button>
                </div>
              </div>
            </div>

            {/* Tree Removal Services */}
            <div className="bg-white rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-2 border-[#FFFFFF]">
              <img loading="lazy" decoding="async" src="/tree-removal.jpg" alt="tree-removal" title="tree-removal" className="w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-center text-gray-800">
                  Tree Removal Services
                </h3>
                <p className="text-gray-600 mt-4 text-center">
                  The removal of dead or hazardous trees is a delicate process
                  that requires proper planning and execution. We have the skill
                  set to safely remove trees from any commercial property.
                </p>
                <div className="mt-6 text-center">
                  <button className="my-6 bg-[#afb236] hover:bg-[#908927] hover:rounded text-white font-bold py-3 px-8 rounded-3xl shadow-md transition-colors duration-300 transform hover:scale-105">
                    Discover More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Second row - 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {/* Land Clearing */}
            <div className="bg-white rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-2 border-[#FFFFFF]">
              <img loading="lazy" decoding="async" src="/land-clearing.jpg" alt="land-clearing" title="land-clearing" className="w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-center text-gray-800">
                  Land Clearing Services
                </h3>
                <p className="text-gray-600 mt-4 text-center">
                  We can help with any land-clearing task, from small-scale to
                  larger commercial properties. Our team has the experience and
                  expertise to clear away any debris or vegetation.
                </p>
                <div className="mt-6 text-center">
                  <button className="my-6 bg-[#afb236] hover:bg-[#908927] hover:rounded text-white font-bold py-3 px-8 rounded-3xl shadow-md transition-colors duration-300 transform hover:scale-105">
                    Discover More
                  </button>
                </div>
              </div>
            </div>

            {/* Storm Cleanup */}
            <div className="bg-white rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-2 border-[#FFFFFF]">
              <img loading="lazy" decoding="async" src="/storm-cleanup.jpg" alt="storm-cleanup" title="storm-cleanup" className="w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-center text-gray-800">
                  Storm Cleanup Services
                </h3>
                <p className="text-gray-600 mt-4 text-center">
                  Storms can cause significant damage to trees and vegetation.
                  We're equipped to handle any storm cleanup task with speed,
                  safety, and efficiency.
                </p>
                <div className="mt-6 text-center">
                  <button className="my-6 bg-[#afb236] hover:bg-[#908927] hover:rounded text-white font-bold py-3 px-8 rounded-3xl shadow-md transition-colors duration-300 transform hover:scale-105">
                    Discover More
                  </button>
                </div>
              </div>
            </div>

            {/* Tree Plantation */}
            <div className="bg-white rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-2 border-[#FFFFFF]">
              <img loading="lazy" decoding="async" src="/commercial-tree-services.jpg" alt="commercial-tree-services" title="commercial-tree-services" className="w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-center text-gray-800">
                  Tree Plantation Services
                </h3>
                <p className="text-gray-600 mt-4 text-center">
                  Looking to enhance your commercial property? We offer an
                  extensive selection of trees that will blend in perfectly with
                  their environment while delivering significant visual appeal.
                </p>
                <div className="mt-6 text-center">
                  <button className="my-6 bg-[#afb236] hover:bg-[#908927] hover:rounded text-white font-bold py-3 px-8 rounded-3xl shadow-md transition-colors duration-300 transform hover:scale-105">
                    Discover More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 mt-16 mb-16">
          <div className="relative lg:w-7/12 group shadow-lg shadow-black">
            <div className="absolute w-full h-full top-5 -left-5 bg-[#afb593] z-0"></div>
            <img loading="lazy" decoding="async" src="/contact-us-img.jpg" alt="contact us" title="contact-us-img" className="relative w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 z-10" />
          </div>
          <div className="lg:w-full pb-5">
            <h1 className="text-[#245B3C] text-md font-bold uppercase">24/7 Availability</h1>
            <h2 className="text-3xl font-bold text-gray-800">
              Emergency Tree Services in Tarpon Springs
            </h2>
            <img src="/divider.png" alt="Divider" title="divider" className="my-5" />
            <div className="flex justify-start my-4"></div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                In the event of an emergency, timing is of the essence! Our team is available 24/7 to handle any emergency tree services. We understand the importance of acting quickly and efficiently to avoid further damage or disruption
              </p>
              <p>Any large tree project requires a team of professionals who know what they are doing, and we at Ken's Tree Service have the experience to provide quality tree care services that you can trust.</p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6">
                Expert Advice & Care for Pruning to Removal from Ken's Commerical Tree Service
              </h3>
              <p className="leading-relaxed ">
                For commercial clients in the Tampa Bay area and Northern Pinellas County seeking professional tree service, look no further than Ken's Tree Service. With over two decades of experience in the industry, our insured team is dedicated to providing you with quality services that exceed your expectations.
              </p>
              <p className="leading-relaxed ">
                We follow ANSI A300 standards and utilize our years of experience to give you the best advice on how to care for your trees. Rest assured that when it comes to tree care, we are the experts you can trust.
              </p>
              <p>
                Contact us today at
                {" "}
                <a href="tel:812-213-5997" className="text-[#245b3c]">
                  (812) 213-5997
                </a>{" "}
                for a free estimate and to learn more about the services we offer. We look forward to hearing from you.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CommercialTreeServices;
