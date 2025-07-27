import React from "react";

const services = [
  { name: "Tree Removal", path: "/services/tree-removal" },
  { name: "Tree Trimming & Pruning", path: "/services/tree-trimming-pruning" },
  {
    name: "Deep Root Fertilization",
    path: "/services/deep-root-fertilization",
  },
  { name: "Structural Pruning", path: "/services/structural-pruning" },
  { name: "Land Clearing", path: "/services/land-clearing" },
  { name: "Storm Clean Up", path: "/services/storm-clean-up" },
  {
    name: "Commercial Tree Services",
    path: "/services/commercial-tree-services",
  },
];

const CommercialTreeServices = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-50 "></div>
        <img
          src="/truck.jpeg"
          alt="Tree trimming service"
          className="w-full  h-96 object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Commercial Tree Services
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-12 ml-20 mr-20 flex flex-col lg:flex-row gap-8">
        {/* Left Side - Main Content */}
        <div className="lg:w-2/3">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Expert Tree Service by Certified Arborists in Tarpon Springs, FL
          </h1>

          <b className="text-lg text-gray-700 mb-6">
            Ken’s Tree Service provides professional commercial tree services to
            Tarpon Springs, FL, and surrounding areas. From pruning to complete
            removal with expert advice and care, our team of arborists works
            safely and efficiently to take your project from start to finish.
            Call us at (727) 934-5804 to get started today.
          </b>

          <p className="text-gray-600 mb-8">
            Trees are a valuable asset for any home or property, adding natural
            beauty, increasing air and water quality, and even boosting property
            value. However, it can be easy to overlook the responsibility of
            sufficient tree maintenance which can lead to sickness and damage. .
          </p>
          <p>
            That’s why Ken’s Tree Service is here to help. We specialize in
            commercial tree services, ensuring the trees on your property are
            well-maintained and assessed for safety risks. Whether you are
            looking to make a positive brand impression, boost curb appeal, or
            provide fresh air for employees and customers, commercial tree
            services are irreplaceable.
          </p>

          <div className="flex gap-8 mt-2">
            <div className="  flex-1">
              <img
                src="/13.jpg"
                alt=""
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="flex-1">
              <img
                src="/14.jpg"
                alt="Tree trimming example"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
          <div className="mt-12">
            <h1 className="text-2xl font-bold mb-4">
              Partnering with Your HOA Community for Tree Maintenance and Safety
              Assessments
            </h1>
            <p className="mb-4">
              At Ken’s Tree Service, we understand the challenges associated
              with managing trees in homeowners’ and business associations. We
              know that it can be difficult to determine the correct time for
              tree trimming and care, as well as how much should be invested in
              commercial tree services. .
            </p>
            <p>
              Most board members and business owners don’t have the knowledge or
              expertise to make the best decision when it comes to tree care,
              which is why we are here for you. Our team of experts has the
              experience and dedication to help make sure that your trees remain
              healthy and look great for years to come.
            </p>
            <p>
              We can also create a tailored tree maintenance budget for you that
              will provide lasting and cost-effective results. By carefully
              crafting an effective Homeowner’s Association Tree Maintenance
              Plan, our team can keep your trees safe and healthy while
              delivering years of rewards to the inhabitants of your community.
            </p>
            <img src="/15.jpg" alt="" />

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
        <div className="lg:w-1/3 space-y-6">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/public/truck.jpeg"
              alt="Our service truck"
              className="w-full h-48 object-cover"
            />
            <div className="bg-green-700 p-4">
              <h1 className="text-xl font-bold text-white text-center">
                Contact Us Today for More Info
              </h1>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.path}
                    className={`block px-3 py-2 rounded transition ${
                      location.pathname === service.path
                        ? "bg-green-100 text-green-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
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
      {/* i have to add here */}

      <div className="w-full bg-[#bcc49b] py-16 mt-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-3xl font-extrabold text-gray-900">
              Our Services
            </p>
            <h1 className="text-3xl font-extrabold mt-3 text-gray-900">
              Professional Commercial Tree Services in Tarpon Springs, FL, and
              Surrounding Areas
            </h1>
            <div className="flex justify-center my-6">
              <img src="/divider-l.png" alt="divider" className="w-64 h-4" />
            </div>
            <p className="max-w-3xl mx-auto text-center text-gray-700 leading-relaxed">
              When it comes to quality tree care services, there is no better
              choice than Ken's Tree Service. We are dedicated to providing
              excellent customer service with a focus on safety and quality
              results for all types of residential and commercial properties.
            </p>
          </div>

          {/* First row - 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Tree Trimming */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <img
                src="/16.jpg"
                alt="Tree removal service"
                className="h-60 w-full object-cover"
              />
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
                  <button className="px-6 py-2 bg-[#9ca87b] text-white font-medium rounded-lg hover:bg-[#8a966a] transition-colors duration-300">
                    Discover More
                  </button>
                </div>
              </div>
            </div>

            {/* Tree Health */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <img
                src="/17.jpg"
                alt="Bush hogging service"
                className="h-60 w-full object-cover"
              />
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
                  <button className="px-6 py-2 bg-[#9ca87b] text-white font-medium rounded-lg hover:bg-[#8a966a] transition-colors duration-300">
                    Discover More
                  </button>
                </div>
              </div>
            </div>

            {/* Tree Removal */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <img
                src="/18.jpg"
                alt="Rock excavation service"
                className="h-60 w-full object-cover"
              />
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
                  <button className="px-6 py-2 bg-[#9ca87b] text-white font-medium rounded-lg hover:bg-[#8a966a] transition-colors duration-300">
                    Discover More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Second row - 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {/* Land Clearing */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <img
                src="/19.jpg"
                alt="Land clearing service"
                className="h-60 w-full object-cover"
              />
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
                  <button className="px-6 py-2 bg-[#9ca87b] text-white font-medium rounded-lg hover:bg-[#8a966a] transition-colors duration-300">
                    Discover More
                  </button>
                </div>
              </div>
            </div>

            {/* Storm Cleanup */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <img
                src="/20.jpg"
                alt="Storm cleanup service"
                className="h-60 w-full object-cover"
              />
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
                  <button className="px-6 py-2 bg-[#9ca87b] text-white font-medium rounded-lg hover:bg-[#8a966a] transition-colors duration-300">
                    Discover More
                  </button>
                </div>
              </div>
            </div>

            {/* Tree Plantation */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <img
                src="/21.jpg"
                alt="Tree plantation service"
                className="h-60 w-full object-cover"
              />
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
                  <button className="px-6 py-2 bg-[#9ca87b] text-white font-medium rounded-lg hover:bg-[#8a966a] transition-colors duration-300">
                    Discover More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-center my-16">
        <div className="ml-10 h-72 w-full mb-62 ">
          <img
            src="/contact-us-img.jpg"
            alt="Professional land clearing team at work"
            className="rounded-lg shadow-xl object-cover"
          />
        </div>
        <div className="mr-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            24/7 Availability
          </h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Emergency Tree Services in Tarpon Springs
          </h2>
          <img src="/divider-l.png" alt="" />
          <div className="flex justify-start my-4"></div>
          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed">
              In the event of an emergency, timing is of the essence! Our team is available 24/7 to handle any emergency tree services. We understand the importance of acting quickly and efficiently to avoid further damage or disruption
            </p>
            <p>Any large tree project requires a team of professionals who know what they are doing, and we at Ken’s Tree Service have the experience to provide quality tree care services that you can trust.</p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6">
              Expert Advice & Care for Pruning to Removal from Ken’s Commerical Tree Service 
            </h3>
            <p className="leading-relaxed ">
              For commercial clients in the Tampa Bay area and Northern Pinellas County seeking professional tree service, look no further than Ken’s Tree Service. With over two decades of experience in the industry, our insured team is dedicated to providing you with quality services that exceed your expectations. 
            </p>
            <p className="leading-relaxed ">
             We follow ANSI A300 standards and utilize our years of experience to give you the best advice on how to care for your trees. Rest assured that when it comes to tree care, we are the experts you can trust.
            </p>
            <p>Contact us today at (727) 934-5804 for a free estimate and to learn more about the services we offer. We look forward to hearing from you.</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CommercialTreeServices;
