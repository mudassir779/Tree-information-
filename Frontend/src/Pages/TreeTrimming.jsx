import React from "react";
import { useLocation } from "react-router-dom";

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

const TreeTrimming = () => {
  const location = useLocation();

  return (
    <div className="w-full">
      {/* Hero Section - Full Width */}
      <section className="relative w-full mb-12">
        <div className="h-96 w-full">
          <img
            src="/public/cta2.jpg"
            alt="Tree trimming service"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            Tree Trimming & Pruning
          </h1>
        </div>
      </section>

      {/* Main Content Container with side margins */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Experienced Tree Services Professionals in Tarpon Springs, FL
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Looking for a tree trimming and pruning specialist in Tarpon
              Springs, Florida? Our arborists have the expertise and tools to
              ensure your trees are healthy and visually appealing. Call us at{" "}
              <span className="text-green-600 hover:text-green-800 transition-colors duration-300">
                (727) 934-5804
              </span>{" "}
              for a free consultation.
            </p>

            <p className="text-gray-600 mb-8">
              Regular tree care is vital for promoting strong growth and
              preventing disease. We adhere to ANSI A300 industry pruning
              standards to keep your trees vibrant and secure.
            </p>

            <div className="flex flex-col md:flex-row gap-6 mb-12">
              <div className="bg-green-600 hover:bg-green-700 transition-colors duration-300 p-6 rounded-lg shadow-md flex-1">
                <p className="text-white text-lg">
                  Protect against structural damage and promote healthy growth
                  with our expert tree care services.
                </p>
              </div>
              <div className="flex-1 group overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/public/tree-trimming-and-pruning.jpg"
                  alt="Tree trimming example"
                  className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Tree Trimming or Tree Pruning: Which Service is Right for You?
              </h2>
              <div className="space-y-4 mb-6 text-gray-700">
                <p>
                  Tree trimming involves removing dead or overgrown branches to
                  improve airflow and reduce stress on the tree. This essential
                  service should be done annually to ensure healthy growth and
                  minimize disease risk.
                </p>

                <div className="group overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/public/about-img.jpg"
                    alt="About tree services"
                    className="w-full h-auto rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <p>
                  Tree pruning is the selective removal of live branches to
                  promote healthy growth and improve air circulation. It should
                  be done every three years or as needed for peak tree
                  condition.
                </p>
                <p>
                  Young trees benefit from regular pruning to encourage strong
                  growth. Our arborists can help determine the best care plan to
                  ensure their long and healthy life.
                </p>
              </div>
            </div>

            <div className="w-full h-96 mt-8 rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112577.66100994803!2d-82.772991!3d28.144908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c28cfd6f0942df%3A0xf4297f0ce0bf24b7!2sTarpon%20Springs%2C%20FL!5e0!3m2!1sen!2sus!4v1753449185853!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden group">
                <img
                  src="/public/truck.jpeg"
                  alt="Our service truck"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-green-700 hover:bg-green-800 transition-colors duration-300 text-white text-center">
                <h1 className="text-xl font-bold">
                  Contact Us Today for More Info
                </h1>
                <p className="text-2xl font-bold mt-2">(727) 934-5804</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 sticky top-6">
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

      {/* Benefits Section - Full Width */}
      <div className="w-full bg-[#bcc49b] py-10 mt-10">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-2xl font-bold">Why it Helps</p>
          <h1 className="text-center text-2xl font-bold mt-2">
            Benefits of Regular Tree Trimming & Pruning
          </h1>
          <div className="flex justify-center my-5">
            <img src="/divider-l.png" alt="divider" />
          </div>
          <p className="text-center max-w-3xl mx-auto">
            From enhancing your home's curb appeal to reducing the risk of
            disease, there are many benefits to regular tree care.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10 pb-10">
            <div className="h-full bg-white rounded-xl border-4 border-[#B0B694] p-4 hover:shadow-xl transition-shadow duration-300">
              <img
                src="/electricity.PNG"
                alt="Safety icon"
                className="rounded-full h-30 w-30 border-4 mx-auto mt-4 object-cover"
              />
              <h3 className="text-lg font-bold text-center mt-3">Safety</h3>
              <p className="text-center mt-3">
                Overgrown or dead branches can be hazardous and cause damage to
                nearby property or even personal injury. Regular tree trimming
                and pruning help remove dangerous branches.
              </p>
            </div>

            <div className="h-full bg-white rounded-xl border-4 border-[#B0B694] p-4 hover:shadow-xl transition-shadow duration-300">
              <img
                src="/wind.PNG"
                alt="Health icon"
                className="rounded-full h-30 w-30 border-4 mx-auto mt-4 object-cover"
              />
              <h3 className="text-lg font-bold text-center mt-3">Health</h3>
              <p className="text-center mt-3">
                Promoting healthy growth is essential for maintaining a tree's
                health and preventing disease. Our experts use the latest
                methods to ensure your trees remain strong and vibrant.
              </p>
            </div>

            <div className="h-full bg-white border-4 rounded-xl border-[#B0B694] p-4 hover:shadow-xl transition-shadow duration-300">
              <img
                src="/plug.PNG"
                alt="Curb appeal icon"
                className="rounded-full h-30 w-30 border-4 mx-auto mt-4 object-cover"
              />
              <h3 className="text-lg font-bold text-center mt-3">
                Curb Appeal
              </h3>
              <p className="text-center mt-3">
                Trimming and pruning can help maintain a tree's natural shape
                and improve its appearance. A well-maintained tree can be a
                beautiful addition to any yard.
              </p>
            </div>

            <div className="h-full bg-white border-4 rounded-xl border-[#B0B694] p-4 hover:shadow-xl transition-shadow duration-300">
              <img
                src="/star.PNG"
                alt="Structure icon"
                className="rounded-full h-30 w-30 border-4 mx-auto mt-4 object-cover"
              />
              <h3 className="text-lg font-bold text-center mt-3">
                Shape and Structure
              </h3>
              <p className="text-center mt-3">
                Regular trimming helps keep a tree's natural shape, improving
                its overall look. We can help maintain the desired look of your
                trees while promoting healthy growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Signs Section with side margins */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 mt-16 mb-16">
          <div className="lg:w-1/2 group overflow-hidden rounded-lg shadow-lg">
            <img
              src="/man.jpg"
              alt="Professional arborist at work"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Signs You Need Professional Trimming & Pruning Services
            </h1>
            <img src="/divider-l.png" alt="Divider" className="mb-6" />
            <p className="mb-6 text-gray-700">
              Trees are living things and require regular maintenance to remain
              healthy. If you notice any of the following signs, it's time to
              call in a professional tree service in Tarpon Springs, FL.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li className="hover:text-green-700 transition-colors duration-200">
                Overgrown branches blocking sunlight
              </li>
              <li className="hover:text-green-700 transition-colors duration-200">
                Dead or diseased branches
              </li>
              <li className="hover:text-green-700 transition-colors duration-200">
                Signs of damage such as wounds or cracks
              </li>
              <li className="hover:text-green-700 transition-colors duration-200">
                Branches growing too close to structures
              </li>
              <li className="hover:text-green-700 transition-colors duration-200">
                Trees with an odd shape or misshapen crown
              </li>
              <li className="hover:text-green-700 transition-colors duration-200">
                Hazardous trees or limbs needing removal
              </li>
              <li className="hover:text-green-700 transition-colors duration-200">
                Smaller trees showing poor growth
              </li>
              <li className="hover:text-green-700 transition-colors duration-200">
                Old trees with dead, overgrown, or diseased branches
              </li>
            </ul>
          </div>
        </div>

        {/* Professional Services Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="space-y-4 text-gray-700">
              <p>
                When it comes to tree care, it's best to leave the job to the
                professionals. Arborists spend years honing their craft and have
                the experience to provide quality service. Homeowners who
                attempt to trim or prune trees on their own risk further damage,
                as well as personal injury.
              </p>
              <p className="font-semibold">
                The benefits of choosing a professional tree service company
                include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="hover:text-green-700 transition-colors duration-200">
                  Expert arborists who understand the local climate
                </li>
                <li className="hover:text-green-700 transition-colors duration-200">
                  The latest equipment and techniques
                </li>
                <li className="hover:text-green-700 transition-colors duration-200">
                  Professional-grade safety gear
                </li>
                <li className="hover:text-green-700 transition-colors duration-200">
                  Affordable and competitive pricing
                </li>
                <li className="hover:text-green-700 transition-colors duration-200">
                  Guaranteed results for tree health
                </li>
              </ul>
              <p>
                Professional tree services pay for themselves in the long run.
                Tree removal costs can be exuberant, and regular maintenance can
                help you avoid these expenses. Regular tree maintenance will
                save you time, money, and worry while enhancing your home's curb
                appeal and property value.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 group overflow-hidden rounded-lg shadow-lg">
            <img
              src="/301625125_483491857119721_5793800417287341050_n.jpg"
              alt="Professional tree service"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* CTA Section */}
        
      </div>
      <div className="w-full bg-[#bcc49b]  ">
          <div className="w-full   sm:px-6 lg:px-8">
            <div className=" rounded-lg  p-8 max-w-5xl mx-auto text-center">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Ken's Tree Service, Tarpon Springs: Your Trusted Tree Care
                Partner
              </h1>
              <img
                src="/divider-l.png"
                alt="Divider"
                className="mx-auto mb-6 w-32"
              />
              <div className="space-y-4 text-gray-700 max-w-3xl mx-auto">
                <p>
                  At Ken's Tree Service, we are passionate about delivering our
                  customers the highest standards for tree trimming and removal,
                  fertilization, and consulting services. Whether it is tree
                  removal services, tree pruning services, or stump removal, our
                  arborists are dedicated to providing quality work at
                  competitive rates.
                </p>
                <p>
                  We are confident that you will be satisfied with the results
                  and we look forward to becoming your trusted tree care partner
                  in Tarpon Springs, FL. We offer free estimates and would be
                  happy to discuss your tree care needs.
                </p>
                <p className="font-bold text-lg">
                  Contact us today at{" "}
                  <span className="text-green-600 hover:text-green-800 transition-colors duration-300">
                    (727) 934-5804
                  </span>{" "}
                  to learn more about our services.
                </p>
              </div>
              <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors duration-300 transform hover:scale-105">
                REQUEST A FREE ESTIMATE
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default TreeTrimming;
