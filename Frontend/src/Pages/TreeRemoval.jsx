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

const TreeRemoval = () => {
  const location = useLocation();
  
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
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
            Tree Removal Services
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Content */}
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Professional Tree Services in Tarpon Springs, FL
          </h2>
          
          <p className="text-lg font-semibold text-gray-700 mb-6">
            For high-quality tree removal services in the Tarpon Springs, FL area, 
            look no further than Ken's Tree Services. Our experienced arborists 
            use the latest tree removal techniques to ensure your property is safe 
            and secure. Call us at <span className="text-green-600">(727) 934-5804</span> for a free estimate today.
          </p>

          <div className="space-y-4 mb-8 text-gray-700">
            <p>
              Tree removal can be a tricky process and requires an experienced eye
              to do it correctly. Multiple variables such as the size, location,
              health, and soil condition of the tree should all be taken into
              account when removing it safely. Our arborists are experienced in
              the latest tree removal techniques and understand how to properly
              assess each situation.
            </p>

            <p>
              For the past 17 years, Ken's Tree Services has been proudly serving
              Tarpon Springs and delivering remarkable tree service for
              residential and commercial properties. Our team of professionals has
              the essential skill set to tackle projects large and small with care
              and precision.
            </p>

            <p>
              We realize that every project is unique which is why we take time to
              review details with each client before commencing any action -
              guaranteeing your safety as well as a great service experience.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Experienced in Tree Removal Service in Tarpon Springs, FL
          </h2>

          <div className="space-y-4 mb-8 text-gray-700">
            <p>
              When it comes to tree removal in Tarpon Springs, FL, it's important
              to call a professional arborist. Trees that are diseased or dead can
              cause damage to your property and also create unsafe conditions.
            </p>

            <p>
              Additionally, trees can interfere with power lines or be placed too
              close to foundations or other structures, leading to further safety
              concerns.
            </p>
          </div>

          {/* Two Column Section */}
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Signs you may need to call a professional tree service include:
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Dead or dying branches</li>
                <li>Visible signs of disease or infestation</li>
                <li>Trees that are too close to buildings or power lines</li>
                <li>Overhanging branches blocking roads or walkways</li>
                <li>Storm damage to trees that need attention</li>
              </ul>
            </div>

            <div className="md:w-1/2">
              <img 
                src="/public/disease.jpg" 
                alt="Signs of tree disease" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>

          <div className="space-y-4 text-gray-700">
            <p>
              If your property has trees that are unhealthy or weakened trees, it is critical 
              that you remove them right away. Damaged and diseased trees present a significant 
              safety hazard to your home and family. By calling an arborist from Ken's Tree Services 
              for tree removal, you can be confident that the job will be done correctly and safely.
            </p>

            <p>
              Dead and dying trees can also be a major hazard to nearby structures, power lines, 
              and roads. Similarly, if you're concerned about potential damage to your property, 
              calling a professional tree service can help protect the investment you have in your home.
            </p>

            <p>
              For commercial properties, the timely removal of hazardous trees can help keep employees 
              and visitors safe. Overgrown or dead trees can be hazardous to those walking around your 
              property, so it's important to remove them promptly.
            </p>
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

export default TreeRemoval;