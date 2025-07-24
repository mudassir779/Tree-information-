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

const DeepRootFertilization = () => {
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
            DEEP ROOT FERTILIZAION
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Content */}
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Your Top Choice for Tree Service in Tarpon Springs, FL
          </h2>
          
          <p className="text-lg font-semibold text-gray-700 mb-6">
            Let Ken’s Tree Service take care of your lawn’s health. Our deep root fertilization service in Tarpon Springs, FL will give you a lush and vibrant yard to enjoy. With years of experience and premium products, we guarantee you results. Call us at (727) 934-5804 for your free estimate. <span className="text-green-600">(727) 934-5804</span> for a free estimate today.
          </p>

          <div className="space-y-4 mb-8 text-gray-700">
            <p>
              From food and materials to symbols of strength, protection, and stability – trees are a powerful gift from nature that bring beauty and shade to our landscapes. However, like all living things they need the proper nutrients to stay healthy with vivid foliage; which is why we must take care of them.
            </p>

            <p>
              Deep root fertilization does exactly that. Utilizing specialized techniques and premium products, this service provides trees with the necessary nutrition to remain strong and vibrant for years to come. Whether you want to give your trees a boost or make sure they maintain their strength, deep root fertilization can be an invaluable part of your tree care program.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
           What is Deep Root Fertilization
          </h2>

          <div className="space-y-4 mb-8 text-gray-700">
            <p>
              Deep root fertilization is a type of tree care that helps promote robust and healthy trees and shrubs. It involves applying fertilizer to the roots of plants, either through injection into the soil or directly onto their roots. This service provides essential nutrients and aerates the soil, making it easier for trees to absorb them. .
            </p>

            <p>
              Deep root fertilization can help make trees and shrubs more resistant to diseases and insect infestations. It also helps promote healthy root growth, enabling trees to access the essential minerals they need for growth and vitality. With deep root fertilization, you can ensure that your trees and shrubs will stay strong and vibrant. 
            </p>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Difference Between Deep Root Fertilization and Surface Fertilization</h1>
            <p>Surface fertilization is the traditional way of applying fertilizer to trees. It involves spreading a slow-release granular fertilizer around the base of the tree or shrub, usually in late winter or early fall. While this method can help provide essential nutrients for your small plants and grass, it does not guarantee that the fertilizer will reach its roots.</p>
            <img className="w-full bg-cover h-80" src="/public/47300128_1070645999762531_1703345697010483200_n.jpg" alt="" />
            <p className="mt-4">In contrast, deep root fertilization is a specifically designed technique for increasing the nutrient uptake of trees. It involves injecting liquid or granular fertilizer into the soil and directly onto the roots. This process ensures that nutrients are delivered where it matters most – at their source – so your trees can get all the nutrients they need.</p>
            <p>Moreover, while it is possible to carry out a conventional fertilizing job without professional help, deep root fertilization requires an Arborist due to its intricate equipment and specialized techniques.</p>
          </div>

          {/* Two Column Section */}
          

          
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

export default DeepRootFertilization;