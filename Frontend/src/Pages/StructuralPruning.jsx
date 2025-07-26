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

const StructuralPruning = () => {
  const location = useLocation();

  return (
    <div className="w-full">
      {/* Hero Section - Full Width */}
      <section className="relative w-full mb-12">
        <div className="h-96 w-full">
          <img
            src="/images/truck.jpeg"
            alt="Ken's Tree Services truck and equipment"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            Structural Pruning
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
              Expert Tree Care Services in Tarpon Springs, FL
            </h2>

            <p className="text-lg font-semibold text-gray-700 mb-6">
              Ken's Tree Service offers reliable and professional structural tree
              pruning services to the local Tarpon Springs, FL area. We have the
              expertise and knowledge to safely remove branches, limbs, or foliage
              that can threaten the integrity of your trees. Call us today at{" "}
              <span className="text-green-600 hover:text-green-800 transition-colors duration-300">
                (727) 934-5804
              </span>{" "}
              for a free estimate.
            </p>

            <div className="space-y-4 mb-8 text-gray-700">
              <p>
                Trees are a gift of nature, providing us with incredible beauty,
                valuable shade, and refreshingly crisp air. To preserve their
                splendor, it is essential that we take care of them correctly.
                Ken's Tree Service offers top-notch structural pruning services
                specifically designed to safeguard your trees' health and
                integrity – ensuring they remain strong and beautiful for many
                years to come.
              </p>

              <p>
                Our highly-qualified arborists understand the crucial role of
                proper pruning, selecting only healthy branches, and utilizing
                correct cutting techniques alongside judicious chemical
                retardants. We make certain to only eliminate what is necessary so
                that your tree can remain vigorous and healthy.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Structural Pruning: An Essential Part of Tree Maintenance
            </h2>

            <div className="space-y-4 mb-8 text-gray-700">
              <p>
                Structural pruning is a vital part of tree care as it helps to
                ensure the long-term health and longevity of trees. When
                landscapes are left untended, trees can often develop multiple
                trunks or leaders due to an abundance of light. This can weaken
                the structure of the tree, making it more susceptible to limb
                breakage.
              </p>
              
              <div className="group overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/public/39846733_1006526109507854_187030484117618688_n.jpg"
                  alt="Structural pruning example"
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <p className="mt-4">
                By regularly pruning trees, arborists can help establish a strong
                single-leader structure for the tree. This will make it less
                likely to break under stressful conditions or sudden weather
                changes. Certain trees may also benefit from pruned branches to
                allow for better air circulation and increased light penetration.
              </p>
              
              <p>
                Pruning at an early stage of the tree's life is especially
                important as it can prevent much bigger problems from arising in
                the future. Removing a small branch when the tree is young may
                seem insignificant, but it can be a crucial step to ensure its
                long-term health and vitality.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-800 mt-6">
                How is Structural Pruning Different from Other Types of Pruning?
              </h3>
              
              <p className="mt-4">
                Structural pruning is a very different process than other types of
                tree maintenance, such as tree trimming or thinning. While these
                are important to the overall health of a tree, they do not address
                the fundamental structure of the tree.
              </p>
              
              <p className="mt-4">
                Structural pruning encourages the promotion of one strong leader
                while diminishing any potential competitors with strategic
                reduction cuts. It also helps to establish a well-balanced tree
                canopy and to open up the interior of the tree.
              </p>
              
              <p>
                When it comes to structural pruning, arborists holistically look
                at the tree. They consider the environment, species, age, and
                condition of the tree so that they can determine the best course
                of action for achieving optimal results. With proper structural
                pruning, your trees will not just remain healthy but can also
                achieve their full potential for beauty and grandeur.
              </p>
              
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
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden group">
                <img
                  src="/public/tree-removal.jpg"
                  alt="Tree service process"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-green-700 hover:bg-green-800 transition-colors duration-300 text-white text-center">
                <p className="text-lg font-medium mb-2">
                  Contact Us Today for More Info!
                </p>
                <p className="text-2xl font-bold">(727) 934-5804</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
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
          <p className="text-center text-2xl font-bold">Benefits</p>
          <h1 className="text-center text-2xl font-bold mt-2">
            Benefits of Choosing Professional Tree Services
          </h1>
          <div className="flex justify-center my-5">
            <img src="/divider-l.png" alt="divider" className="w-32" />
          </div>
          <p className="text-center max-w-3xl mx-auto">
            Tree care services can be expensive and time-consuming, but the
            benefits of having a professional arborist tend to your trees are
            worth it. An Arborist has the expertise, knowledge, and experience
            to provide quality care for your trees.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 pb-10">
            <div className="h-full bg-white rounded-xl border-4 border-[#B0B694] p-4 hover:shadow-xl transition-shadow duration-300">
              <img
                src="/electricity.PNG"
                alt="Trained Professionals"
                className="rounded-full h-24 w-24 border-4 border-white mx-auto mt-4 object-cover"
              />
              <h3 className="text-lg font-bold text-center mt-4">Trained Professionals</h3>
              <p className="text-center mt-3">
                Professional arborists are trained to recognize potential
                hazards in trees and can identify any signs of disease or damage
                before they become major issues.
              </p>
            </div>

            <div className="h-full bg-white rounded-xl border-4 border-[#B0B694] p-4 hover:shadow-xl transition-shadow duration-300">
              <img
                src="/wind.PNG"
                alt="Precision & Care"
                className="rounded-full h-24 w-24 border-4 border-white mx-auto mt-4 object-cover"
              />
              <h3 className="text-lg font-bold text-center mt-4">Precision & Care</h3>
              <p className="text-center mt-3">
                Structural pruning must be done with precision. Arborists make
                strategic, precise cuts with specialized tools to achieve a
                well-balanced tree structure.
              </p>
            </div>

            <div className="h-full bg-white rounded-xl border-4 border-[#B0B694] p-4 hover:shadow-xl transition-shadow duration-300">
              <img
                src="/plug.PNG"
                alt="Knowledgeable Experts"
                className="rounded-full h-24 w-24 border-4 border-white mx-auto mt-4 object-cover"
              />
              <h3 className="text-lg font-bold text-center mt-4">Knowledgeable Experts</h3>
              <p className="text-center mt-3">
                Arborists understand how to best prune your trees without
                damaging them, and suggest other services to ensure your tree
                remains vigorous and healthy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 mt-16 mb-16">
          <div className="lg:w-1/2 group overflow-hidden rounded-lg shadow-lg">
            <img
              src="/301616262_483491860453054_79566879866319948_n.jpg"
              alt="Professional tree service"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Trust Ken's Tree Service Company for All of Your Tree Maintenance Needs
            </h1>
            <img src="/divider-l.png" alt="Divider" className="mb-6 w-32" />
            <div className="space-y-4 text-gray-700">
              <p>
                At Ken's Tree Service Company, we understand the importance of proper tree care and maintenance. Our team of Arborists provides comprehensive structural pruning services for residential and commercial clients.
              </p>
              <p>
                Our arborists have years of experience in pruning trees of all shapes and sizes. We use the most advanced techniques and equipment to ensure that the work is done correctly and safely. Whether you have young, old, or dying trees, our arborists will develop a tailored plan to suit your specific needs and goals.
              </p>
              <p className="font-bold text-lg">
                At Ken's Tree Service Company, we aim to offer great service, superior results, and complete customer satisfaction. Contact us at{" "}
                <span className="text-green-600 hover:text-green-800 transition-colors duration-300">
                  (727) 934-5804
                </span>{" "}
                for a free quote on structural pruning services in Tarpon Spring, FL.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-[#bcc49b] py-16">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg shadow-lg p-8 max-w-5xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to Improve Your Tree's Health and Structure?
            </h1>
            <img 
              src="/divider-l.png" 
              alt="Divider" 
              className="mx-auto mb-6 w-32"
            />
            <div className="space-y-4 text-gray-700 max-w-3xl mx-auto">
              <p>
                Our expert arborists are ready to assess your trees and provide professional structural pruning services that will enhance their health, beauty, and longevity.
              </p>
              <p className="font-bold text-lg">
                Call us today at{" "}
                <span className="text-green-600 hover:text-green-800 transition-colors duration-300">
                  (727) 934-5804
                </span>{" "}
                or request a free estimate below.
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

export default StructuralPruning;