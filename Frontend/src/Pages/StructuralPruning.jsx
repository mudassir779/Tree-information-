import React from "react";
import { useLocation } from "react-router-dom"; // For active link highlighting

const services = [
  { name: "Tree Removal", path: "/services/tree-removal" },
  { name: "Tree Trimming & Pruning", path: "/services/tree-trimming-pruning" },
  { name: "Deep Root Fertilization", path: "/services/deep-root-fertilization" },
  { name: "Structural Pruning", path: "/services/structural-pruning" },
  { name: "Land Clearing", path: "/services/land-clearing" },
  { name: "Storm Clean Up", path: "/services/storm-clean-up" },
  { name: "Commercial Tree Services", path: "/services/commercial-tree-services" },
];

const StructuralPruning = () => {
  const location = useLocation();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="relative mb-12 rounded-lg overflow-hidden shadow-lg">
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

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Content */}
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            YExpert Tree Care Services in Tarpon Springs, FL
          </h2>
          
          <p className="text-lg font-semibold text-gray-700 mb-6">
           Ken’s Tree Service offers reliable and professional structural tree pruning services to the local Tarpon Springs, FL area. We have the expertise and knowledge to safely remove branches, limbs, or foliage that can threaten the integrity of your trees. Call us today at (727) 934-5804 for a free estimate.
          </p>

          <div className="space-y-4 mb-8 text-gray-700">
            <p>
              Trees are a gift of nature, providing us with incredible beauty, valuable shade, and refreshingly crisp air. To preserve their splendor, it is essential that we take care of them correctly. Ken’s Tree Service offers top-notch structural pruning services specifically designed to safeguard your trees’ health and integrity – ensuring they remain strong and beautiful for many years to come. 
            </p>

            <p>
             Our highly-qualified arborists understand the crucial role of proper pruning, selecting only healthy branches, and utilizing correct cutting techniques alongside judicious chemical retardants. We make certain to only eliminate what is necessary so that your tree can remain vigorous and healthy.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Structural Pruning: An Essential Part of Tree Maintenance
          </h2>

          <div className="space-y-4 mb-8 text-gray-700">
            <p>
              Structural pruning is a vital part of tree care as it helps to ensure the long-term health and longevity of trees. When landscapes are left untended, trees can often develop multiple trunks or leaders due to an abundance of light. This can weaken the structure of the tree, making it more susceptible to limb breakage.  
            </p>
            <img className="w-full bg-cover h-80" src="/public/39846733_1006526109507854_187030484117618688_n.jpg" alt="" />
            <p className="mt-4">By regularly pruning trees, arborists can help establish a strong single-leader structure for the tree. This will make it less likely to break under stressful conditions or sudden weather changes. Certain trees may also benefit from pruned branches to allow for better air circulation and increased light penetration.</p>
            <p>Pruning at an early stage of the tree’s life is especially important as it can prevent much bigger problems from arising in the future. Removing a small branch when the tree is young may seem insignificant, but it can be a crucial step to ensure its long-term health and vitality. </p>
            <h1 className="text-2xl font-bold">How is Structural Pruning Different from Other Types of Pruning?</h1>
            <p className="mt-4">Structural pruning is a very different process than other types of tree maintenance, such as tree trimming or thinning. While these are important to the overall health of a tree, they do not address the fundamental structure of the tree.</p>
            <p className="mt-4">Structural pruning encourages the promotion of one strong leader while diminishing any potential competitors with strategic reduction cuts. It also helps to establish a well-balanced tree canopy and to open up the interior of the tree.</p>
            <p>When it comes to structural pruning, arborists holistically look at the tree. They consider the environment, species, age, and condition of the tree so that they can determine the best course of action for achieving optimal results. With proper structural pruning, your trees will not just remain healthy but can also achieve their full potential for beauty and grandeur.</p>
          </div>

          
          

          
        </div>

        {/* Right Sidebar */}
        <div className="lg:w-1/3 space-y-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="/public/tree-removal.jpg" 
                alt="Tree removal process" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 bg-green-700 text-white text-center">
              <p className="text-lg font-medium mb-2">Contact Us Today for More Info!</p>
              <p className="text-2xl font-bold">(727) 934-5804</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.path}
                    className={`block px-3 py-2 rounded transition ${location.pathname === service.path 
                      ? 'bg-green-100 text-green-700 font-medium' 
                      : 'text-gray-700 hover:bg-gray-100'}`}
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
  );
};

export default StructuralPruning;