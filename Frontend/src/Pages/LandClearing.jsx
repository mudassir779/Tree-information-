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

const LandClearing = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-50 "></div>
        <img
          src="/public/cta2.jpg"
          alt="Tree trimming service"
          className="w-full  h-96 object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Land Clearing
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-12 ml-20 mr-20 flex flex-col lg:flex-row gap-8">
        {/* Left Side - Main Content */}
        <div className="lg:w-2/3">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Providing Professional Tree Services in Tarpon Springs, FL
          </h1>

          <b className="text-lg text-gray-700 mb-6">
            Trust Ken’s Tree Service for Tree removal and land clearing services
            in Tarpon Springs, Florida. With 20 years of experience and
            expertise in delivering quality tree care, you can trust us to get
            the job done quickly and safely. Call us at (727) 934-5804 for a
            free quote.
          </b>

          <p className="text-gray-600 mb-8">
            The process of preparing your land for construction or home
            improvement projects can be a difficult, hazardous job. By getting
            expert help from Ken’s Tree Service with plantation disposal, stump
            grinding, and tree removal service, you’ll have the assurance that
            it will be done correctly and securely.
          </p>

          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="bg-green-600 p-6 rounded-lg shadow-md flex-1">
              <p className="text-white text-lg">
                Safety is the cornerstone of our business. We are proud to have
                top-notch equipment, certified arborists, and an experienced
                team on hand to ensure that your land-clearing project runs
                smoothly from start to finish
              </p>
            </div>
            <div className="flex-1">
              <img
                src="/1.jpg"
                alt="Tree trimming example"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
          <div className="mt-12">
            <h1 className="text-2xl font-bold mb-4">
              Experienced Land Clearing Services, Tarpon Springs, FL
            </h1>
            <p className="mb-4">
              Land clearing is the process of removing trees, stumps, rocks, and
              other debris from a site to prepare it for construction or
              landscaping. It can also be used to remove invasive species that
              are damaging native plants found in your area. It is important to
              have the land cleared properly to avoid any issues during the
              building process or with your existing plants..
            </p>
            <div>
              <img
                src="/2.jpg"
                alt="About tree services"
                className="w-full h-auto rounded-lg shadow-md mb-4"
              />
            </div>
            <p className="mb-4">
              Land clearing is also important because it helps to improve the
              aesthetics of your site. We use our expertise in tree removal and
              landscaping to help you create a vision for the perfect outdoor
              space, with plenty of room for trees and greenery that accentuate
              the area’s natural beauty.
            </p>
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

      <div className="w-full bg-[#bcc49b] py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-center text-3xl font-extrabold text-gray-900">
            Types
          </p>
          <h1 className="text-center text-3xl font-extrabold mt-3 text-gray-900">
            Land Clearing Services Offered
          </h1>
          <div className="flex justify-center my-6">
            <img src="/divider-l.png" alt="divider" className="w-64 h-4" />
          </div>
          <p className="max-w-3xl mx-auto text-center text-gray-700 leading-relaxed">
            Ken's Tree Service offers a comprehensive suite of land clearing
            solutions tailored for residential and commercial properties in
            Tarpon Springs, Florida. Our expert services include tree removal,
            stump grinding, tree trimming, storm damage cleanup, and ongoing
            landscape maintenance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            {/* Tree Removal */}
            <div className="bg-white rounded-xl shadow hover:shadow-xl transition-shadow duration-300">
              <img
                src="/3.jpg"
                alt="Tree removal service"
                className="h-60 w-full rounded-t-xl object-cover"
              />
              <h3 className="text-xl font-semibold text-center mt-5">
                Tree Removal
              </h3>
              <p className="text-center text-gray-700 font-medium px-6 mt-4">
                Our certified arborists perform safe and precise tree removals
                using industry-best practices. We handle hazardous trees
                efficiently and minimize impact on the surrounding environment.
              </p>
              <p className="text-center text-gray-700 font-medium px-6 mt-3 mb-6">
                Utilizing specialized equipment and techniques, we swiftly
                remove trees, stumps, branches, and roots to keep your property
                safe and clean.
              </p>
            </div>

            {/* Bush Hogging */}
            <div className="bg-white rounded-xl shadow hover:shadow-xl transition-shadow duration-300">
              <img
                src="/4.jpg"
                alt="Bush hogging service"
                className="h-60 w-full rounded-t-xl object-cover"
              />
              <h3 className="text-xl font-semibold text-center mt-5">
                Bush Hogging
              </h3>
              <p className="text-center text-gray-700 font-medium px-6 mt-4">
                With advanced bush hogging equipment, we clear dense vegetation,
                including small trees and shrubs, quickly and efficiently.
              </p>
              <p className="text-center text-gray-700 font-medium px-6 mt-3 mb-6">
                This creates clear, accessible land perfect for construction or
                landscaping, while preserving your property's natural integrity.
              </p>
            </div>

            {/* Rock Excavation */}
            <div className="bg-white rounded-xl shadow hover:shadow-xl transition-shadow duration-300">
              <img
                src="/5.jpg"
                alt="Rock excavation service"
                className="h-60 w-full rounded-t-xl object-cover"
              />
              <h3 className="text-xl font-semibold text-center mt-5">
                Rock Excavation
              </h3>
              <p className="text-center text-gray-700 font-medium px-6 mt-4">
                We remove large rocks and debris through professional excavation
                and grading, preparing your land for building or landscaping.
              </p>
              <p className="text-center text-gray-700 font-medium px-6 mt-3 mb-6">
                Our skilled operators use specialized machinery to deliver
                precise leveling while maintaining strict safety standards.
              </p>
            </div>
          </div>

          {/* Last two boxes centered */}
          <div className="flex flex-col md:flex-row justify-center gap-10 mt-10">
            {/* Plantation Disposal */}
            <div className="bg-white rounded-xl shadow hover:shadow-xl transition-shadow duration-300 w-full md:w-1/2 max-w-md">
              <img
                src="/6.jpg"
                alt="Plantation disposal service"
                className="h-60 w-full rounded-t-xl object-cover"
              />
              <h3 className="text-xl font-semibold text-center mt-5">
                Plantation Disposal
              </h3>
              <p className="text-center text-gray-700 font-medium px-6 mt-4">
                Plantation disposal requires expertise and care. Our team
                ensures comprehensive removal and eco-conscious disposal of all
                vegetation debris.
              </p>
              <p className="text-center text-gray-700 font-medium px-6 mt-3 mb-6">
                We leave your property clean and prepared for its next phase of
                use, adhering to environmentally responsible practices.
              </p>
            </div>

            {/* Stump Grinding & Mulch Production */}
            <div className="bg-white rounded-xl shadow hover:shadow-xl transition-shadow duration-300 w-full md:w-1/2 max-w-md">
              <img
                src="/7.jpg"
                alt="Stump grinding service"
                className="h-60 w-full rounded-t-xl object-cover"
              />
              <h3 className="text-xl font-semibold text-center mt-5">
                Stump Grinding & Mulch Production
              </h3>
              <p className="text-center text-gray-700 font-medium px-6 mt-4">
                We safely grind stumps to eliminate hazards and prevent
                regrowth, converting woody debris into nutrient-rich mulch.
              </p>
              <p className="text-center text-gray-700 font-medium px-6 mt-3 mb-6">
                This mulch can be reused around gardens and landscaping
                projects, offering an environmentally friendly solution.
              </p>
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Professional Tree Service Company for Land Clearing in Tarpon
            Springs, FL
          </h2>
          <div className="flex justify-start my-4">
            <div className="w-24 h-1 bg-green-600 rounded-full"></div>
          </div>
          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed">
              Land clearing can be a daunting undertaking, but with the help of
              certified and experienced professionals, it doesn't have to be.
              Removing huge tree stumps or rocks without proper experience could
              result in severe damage to your property, making professional
              assistance crucial.
            </p>
            <p className="leading-relaxed">
              Our qualified tree care experts provide the expertise and
              resources necessary to properly and safely clear land with minimal
              disruption to other vegetation. We utilize the latest equipment
              and techniques to ensure your land-clearing project is completed
              efficiently without compromising quality or safety.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6">
              Benefits of Our Professional Tree Services:
            </h3>
            <ul className="space-y-3 list-disc pl-5">
              <li className="leading-relaxed">
                Experienced staff with the knowledge and specialized equipment
                to complete projects quickly and safely
              </li>
              <li className="leading-relaxed">
                Proper debris disposal in compliance with all local regulations
              </li>
              <li className="leading-relaxed">
                Guaranteed quality workmanship and project completion
              </li>
              <li className="leading-relaxed">
                Fully insured, licensed, and bonded services for your protection
              </li>
              <li className="leading-relaxed">
                Customizable solutions tailored to your specific needs and
                budget
              </li>
              <li className="leading-relaxed">
                Peace of mind knowing your land will be cleared responsibly
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full bg-gray-300 items-center my-16 text">
        <h1 className="text-3xl font-bold text-gray-800 mt-4 mb-4">Trust Ken’s Tree Service</h1>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">for All Your Tree Maintenance Needs in Tarpon Springs, FL</h1>
        <img className="my-4 w-80" src="/divider-l.png" alt="" />
        <p className="text-gray-700 ml-5 mr-5 text-center">
          Ken’s Tree Service is the go-to arborist in Tarpon Springs, FL for all
          of your tree maintenance needs. From simple land clearing and tree
          trimming to complex tree pruning goals, our qualified team of
          arborists can provide customized solutions for all your tree-related
          needs.
        </p>
        <p className="text-gray-700 ml-10 mr-10 text-center font-semibold mt-3">
          Our professional tree services are designed to keep trees healthy and
          growing strong, while also ensuring that they look their best.
          Adhering strictly to the industry standards defined by both the TCIA
          and ISA, our team is dedicated to delivering quality and reliable
          services that will exceed your expectations.
        </p>
        <b className="text-gray-700 ml-10 mr-10 font-semibold text-center mt-3">
          Contact us today at (727) 934-5804 to learn more about our land
          clearing services and how we can help make your property look its
          best.
        </b>
        <button className="bg-green-600 hover:bg-green-700 hover:rounded-2xl text-white px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300 mt-10">REQUEST A FREE ESTIMATE</button>
      </div>
    </div>
  );
};

export default LandClearing;
