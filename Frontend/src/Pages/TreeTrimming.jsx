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
      <section className="relative mb-12 w-full">
        <div className="h-70 w-full">
          <div className="absolute inset-0 bg-[url('/hero-img.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gray-600 bg-opacity-40 mix-blend-multiply">
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
              Tree Trimming & Pruning
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Container with side margins */}
      <div className="w-10/12 mx-auto pt-10 px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
              Experienced Tree Services Professionals in Tarpon Springs, FL
            </h2>

            <p className="text-lg font-bold text-gray-700 mb-6">
              Looking for a tree trimming and pruning specialist in Tarpon Springs, Florida? Look no further! Our arborists have the technical know-how and latest tools to ensure your trees are healthy, robust, and visually appealing. Give us a call at
              {" "}
              <a href="tel:812-213-5997" className="text-green-800 hover:text-black transition-colors duration-300">
                812-213-5997
              </a>{" "} for a free quote.
              now to get started with a free consultation.
              for a free consultation.
            </p>

            <p className="text-gray-600 mb-8">
              Regular tree care is vital for promoting strong growth and
              preventing disease. We adhere to ANSI A300 industry pruning
              standards to keep your trees vibrant and secure.
            </p>

            <div className="flex flex-col md:flex-row gap-17 mb-12">
              <div className="bg-green-800 mb-10 p-15 mx-5 flex-1 justify-center items-center">
                <p className="text-white font-bold text-lg">
                  Not only can this help protect against structural damage, but it also helps to nourish and promote the healthy growth of the affected trees.
                </p>
              </div>
              <div className="flex-1 group overflow-hidden shadow-lg">
                <img fetchpriority="high" decoding="async" src="/trim.jpg" alt="disease" title="trim" />
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Tree Trimming or Tree Pruning: Which Service is Right for You?
              </h2>
              <div className="space-y-4 mb-6 text-gray-700">
                <p>
                  Tree trimming is the process of removing dead or overgrown branches and limbs from your tree. This will help improve airflow throughout the tree, reducing stress on each branch and preventing structural damage. It's an essential service that should be done each year to ensure healthy growth and reduce the risk of disease.
                </p>

                <div className="my-20 group overflow-hidden shadow-lg">
                  <img
                    src="/about-img.jpg"
                    alt="About tree services"
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <p>
                  Tree pruning is the process of selectively removing live branches and limbs. This helps promote healthy growth, allowing more sunlight to reach each branch. It also improves air circulation throughout the tree and maintains its natural shape. Pruning should be done every three years or as needed to keep your trees in peak condition.
                </p>
                <p>
                  Young trees also benefit from regular pruning to encourage strong, healthy growth. Our arborists can help you determine the best tree care plan for your young trees to ensure they have a long and healthy life.
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
          <div className="lg:w-1/4 lg-h-full space-y-6">
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
                  <a href="tel:812-213-5997" className="text-white text-2xl md:text-3xl font-bold mb-4">
                    812-213-5997
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 sticky top-6">
              <h3 className="bg-[#1e4d32] text-xl font-bold text-white pl-2.5 mb-4 pb-2 border-b border-gray-200">
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

      {/* Benefits Section - Full Width */}
      <div className="w-full bg-[#bcc49b] py-10 mt-10">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-2xl font-bold uppercase">Why it Helps</p>
          <h1 className="text-center text-4xl font-bold">
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
      <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col w-full lg:flex-row gap-20 mt-16 mb-16">
          <div className="lg:w-1/3 group overflow-hidden shadow-lg">          
            <img loading="lazy" decoding="async" src="/25488113_844434852383648_5012362303994108244_o.jpg" alt="contact us" title="25488113_844434852383648_5012362303994108244_o" />
          </div>
          <div className="lg:w-11/12">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Signs You Need Professional Trimming & Pruning Services
            </h1>
            <img loading="lazy" decoding="async" src="/divider-d.png" alt="divider" title="divider-d" className="mb-6"/>

            <p className="text-gray-700 lg:w-full">
              Trees are living things and require regular maintenance to remain
              healthy. If you notice any of the following signs, it's time to
              call in a professional tree service in Tarpon Springs, FL.
            </p>
            <ul className="list-disc pl-10 space-y-2 text-gray-700">
              <li className="hover:text-green-700 transition-colors duration-200">
                Overgrown branches or limbs that are blocking sunlight from reaching other parts of the tree
              </li>
              <li className="hover:text-green-700 transition-colors duration-200">
                Dead or diseased branches
              </li>
              <li className="hover:text-green-700 transition-colors duration-200">
                Signs of damage such as wounds or cracks
              </li>
              <li className="hover:text-green-700 transition-colors duration-200">
                Branches that are growing too close to the house or other structures 
              </li>
              <li className="hover:text-green-700 transition-colors duration-200">
                Trees with an odd shape or misshapen crown
              </li>
              <li className="hover:text-green-700 transition-colors duration-200">
                Hazardous trees or limbs that need to be removed for safety reasons
              </li>
              <li className="hover:text-green-700 transition-colors duration-200">
                Smaller trees showing poor growth
              </li>
              <li className="hover:text-green-700 transition-colors duration-200">
                Old and huge tree with dead, overgrown, or diseased branches 
              </li>
            </ul>
          </div>
        </div>

        {/* Professional Services Section */}
        <div className="flex flex-col w-full lg:flex-row gap-20 mb-16">
          <div className="lg:w-11/12 order-2 lg:order-1">
            <div className="space-y-4 text-gray-700 mr-5">
              <p>
                When it comes to tree care, it's best to leave the job to the professionals. Arborists spend years honing their craft and have the experience to provide quality service. Homeowners who attempt to trim or prune trees on their own risk further damage, as well as personal injury. 
              </p>
              <p className="font-semibold">
                The benefits of choosing a professional tree service company
                include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="hover:text-green-700 transition-colors duration-200">
                  Expert arborists who understand the local climate and can provide tailored advice for your specific needs 
                </li>
                <li className="hover:text-green-700 transition-colors duration-200">
                  The latest equipment and techniques for safe and efficient trimming and pruning 
                </li>
                <li className="hover:text-green-700 transition-colors duration-200">
                  Professional-grade safety gear to ensure everyone's safety 
                </li>
                <li className="hover:text-green-700 transition-colors duration-200">
                  Affordable and competitive pricing 
                </li>
                <li className="hover:text-green-700 transition-colors duration-200">
                  Guaranteed results that will help you maintain the health of your trees for years to come 
                </li>
              </ul>
              <p>
                Professional tree services pay for themselves in the long run. Tree removal costs can be exuberant, and regular maintenance can help you avoid these expenses. Regular tree maintenance will save you time, money, and worry while enhancing your home’s curb appeal and increasing the value of residential and commercial properties. 
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 order-1 lg:order-2 group overflow-hidden shadow-black shadow-lg">
            <img
              src="/301625125_483491857119721_5793800417287341050_n.jpg"
              alt="Professional tree service"
              title="Professional tree service"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* CTA Section */}

      </div>
      <div className="w-full bg-[#90a99538]  ">

        <div className="w-full py-20  sm:px-6 lg:px-8">
          <div className=" rounded-lg py-10 max-w-11/12 mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              American Tree Experts, Tarpon Springs: Your Trusted Tree Care
              Partner
            </h1>
            <div className="flex justify-center mb-4">
              <img loading="lazy" decoding="async" src="/divider.png" alt="divider" title="divider" />
            </div>
            <div className="space-y-4 text-gray-700 mx-auto">
              <p>
                At American Tree Experts, we are passionate about delivering our customers the highest standards for tree trimming and removal, fertilization, and consulting services. Whether it is tree removal services, tree pruning services, or stump removal, our arborists are dedicated to providing quality work at competitive rates.
              </p>
              <p>
                We are confident that you will be satisfied with the results and we look forward to becoming your trusted tree care partner in Tarpon Springs, FL. We offer free estimates and would be happy to discuss your tree care needs so you can make an informed decision.
              </p>
              <p className="font-bold text-md">
                Contact us today at {" "}
                <a href="812-213-5997" className="text-[#245b3c] hover:cursor-pointer">
                  812-213-5997
                </a>{" "}
                 to learn more about our services and how we can help you maintain the health of your trees for years to come.
              </p>
            </div>
            <button className="mt-6 bg-[#afb236] hover:bg-[#908927] hover:rounded text-white font-bold py-3 px-8 rounded-3xl shadow-md transition-colors duration-300 transform hover:scale-105">
              REQUEST A FREE ESTIMATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreeTrimming;
