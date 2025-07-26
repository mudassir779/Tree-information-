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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        <img
          src="/public/cta2.jpg"
          alt="Tree trimming service"
          className="w-full  h-96 object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Tree Trimming & Pruning
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-12 flex flex-col lg:flex-row gap-8">
        {/* Left Side - Main Content */}
        <div className="lg:w-2/3">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Experienced Tree Services Professionals in Tarpon Springs, FL
          </h1>

          <p className="text-lg text-gray-700 mb-6">
            Looking for a tree trimming and pruning specialist in Tarpon
            Springs, Florida? Our arborists have the expertise and tools to
            ensure your trees are healthy and visually appealing. Call us at{" "}
            <span className="text-green-600">(727) 934-5804</span> for a free
            consultation.
          </p>

          <p className="text-gray-600 mb-8">
            Regular tree care is vital for promoting strong growth and
            preventing disease. We adhere to ANSI A300 industry pruning
            standards to keep your trees vibrant and secure.
          </p>

          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="bg-green-600 p-6 rounded-lg shadow-md flex-1">
              <p className="text-white text-lg">
                Protect against structural damage and promote healthy growth
                with our expert tree care services.
              </p>
            </div>
            <div className="flex-1">
              <img
                src="/public/tree-trimming-and-pruning.jpg"
                alt="Tree trimming example"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
          <div className="mt-12">
            <h1 className="text-2xl font-bold mb-4">
              Tree Trimming or Tree Pruning: Which Service is Right for You?
            </h1>
            <p className="mb-4">
              Tree trimming involves removing dead or overgrown branches to
              improve airflow and reduce stress on the tree. This essential
              service should be done annually to ensure healthy growth and
              minimize disease risk.
            </p>
            <div>
              <img
                src="/public/about-img.jpg"
                alt="About tree services"
                className="w-full h-auto rounded-lg shadow-md mb-4"
              />
            </div>
            <p className="mb-4">
              Tree pruning is the selective removal of live branches to promote
              healthy growth and improve air circulation. It should be done
              every three years or as needed for peak tree condition.
            </p>
            <p>
              Young trees benefit from regular pruning to encourage strong
              growth. Our arborists can help determine the best care plan to
              ensure their long and healthy life.
            </p>
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
      
      
    </div>
  );
};

export default CommercialTreeServices;
