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

const DeepRootFertilization = () => {
  const location = useLocation();

  return (
    <div className="w-full">
      {/* Hero Section - Full Width */}
      <section className="relative mb-12 w-full">
        <div className="h-70 w-full">
          <div className="absolute inset-0 bg-[url('https://kens-tree-service.com/wp-content/uploads/hero-img.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000b3] to-[#0000008c]"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
              Deep Root Fertilization Tarpon Springs FL
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Container with side margins */}
      <div className="w-10/12 mx-auto pt-10 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
              Your Top Choice for Tree Service in Tarpon Springs, FL
            </h2>

            <p className="text-lg font-semibold text-gray-700 mb-6">
              Let Ken's Tree Service take care of your lawn's health. Our deep root fertilization service in Tarpon Springs, FL will give you a lush and vibrant yard to enjoy. With years of experience and premium products, we guarantee you results.
              Call us at{" "}
              <a href="tel:812-213-5997" className="text-green-800 hover:text-black transition-colors duration-300">
                812-213-5997
              </a>{" "}
              for your free estimate.
            </p>

            <div className="space-y-4 mb-8 text-gray-700">
              <p>
                From food and materials to symbols of strength, protection, and stability - trees are a powerful gift from nature that bring beauty and shade to our landscapes. However, like all living things they need the proper nutrients to stay healthy with vivid foliage; which is why we must take care of them.
              </p>

              <p>
                Deep root fertilization does exactly that. Utilizing specialized techniques and premium products, this service provides trees with the necessary nutrition to remain strong and vibrant for years to come. Whether you want to give your trees a boost or make sure they maintain their strength, deep root fertilization can be an invaluable part of your tree care program.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              What is Deep Root Fertilization
            </h2>

            <div className="space-y-4 mb-8 text-gray-700">
              <p>
                Deep root fertilization is a type of tree care that helps promote
                robust and healthy trees and shrubs. It involves applying
                fertilizer to the roots of plants, either through injection into
                the soil or directly onto their roots. This service provides
                essential nutrients and aerates the soil, making it easier for
                trees to absorb them.
              </p>

              <p className="mb-10">
                Deep root fertilization can help make trees and shrubs more
                resistant to diseases and insect infestations. It also helps
                promote healthy root growth, enabling trees to access the
                essential minerals they need for growth and vitality. With deep
                root fertilization, you can ensure that your trees and shrubs will
                stay strong and vibrant.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Difference Between Deep Root Fertilization and Surface Fertilization
              </h3>

              <p>
                Surface fertilization is the traditional way of applying
                fertilizer to trees. It involves spreading a slow-release granular
                fertilizer around the base of the tree or shrub, usually in late
                winter or early fall. While this method can help provide essential
                nutrients for your small plants and grass, it does not guarantee
                that the fertilizer will reach its roots.
              </p>

              <div className="my-10 group overflow-hidden shadow-lg">
                <img
                  src="/47300128_1070645999762531_1703345697010483200_n.jpg"
                  alt="Deep root fertilization process"
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <p className="mt-4">
                In contrast, deep root fertilization is a specifically designed
                technique for increasing the nutrient uptake of trees. It involves
                injecting liquid or granular fertilizer into the soil and directly
                onto the roots. This process ensures that nutrients are delivered
                where it matters most - at their source - so your trees can get
                all the nutrients they need.
              </p>

              <p>
                Moreover, while it is possible to carry out a conventional
                fertilizing job without professional help, deep root fertilization
                requires an Arborist due to its intricate equipment and
                specialized techniques.
              </p>

              <div className="w-full h-96 mt-10 overflow-hidden shadow-lg">
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

      {/* Do I Need It Section - Full Width */}
      <div className="w-full bg-gradient-to-b from-[#f8faec] to-[#bcc49b] py-20 mt-10">
        <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[#245B3C] text-lg font-bold uppercase">Do I Need It?</p>
          <h1 className="text-center text-4xl font-bold">
            Signs Your Tree Needs Deep Root Fertilization
          </h1>
          <div className="flex justify-center my-5">
            <img decoding="async" src="/divider.png" alt="divider" title="divider" />
          </div>
          <p className="text-center max-w-full mx-auto font-semibold">
            Trees can be very resilient, but sometimes they need a little extra
            care. Here are some signs that your trees could benefit from deep
            root fertilization:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
            {/* Row 1 */}
            <div className="h-full bg-white border-2 border-[#B0B694] p-4 hover:shadow-xl transition-shadow duration-300">
              <img
                src="/electricity.PNG"
                alt="Yellowing leaves"
                className="rounded-full h-24 w-24 border-6 border-black shadow-sm shadow-black mx-auto mt-4 object-cover"
              />
              <h3 className="text-lg font-bold text-center mt-4">Yellowing or Discolored Leaves</h3>
              <p className="text-center mt-3">
                A sign of nutrient deficiency that deep root fertilization can address.
              </p>
            </div>

            <div className="h-full bg-white border-2 border-[#B0B694] p-4 hover:shadow-xl transition-shadow duration-300">
              <img
                src="/wind.PNG"
                alt="Weakened branches"
                className="rounded-full h-24 w-24 border-6 border-black shadow-sm shadow-black mx-auto mt-4 object-cover"
              />
              <h3 className="text-lg font-bold text-center mt-4">Weakened Branches and Twigs</h3>
              <p className="text-center mt-3">
                Indicates poor nutrient absorption that fertilization can improve.
              </p>
            </div>

            <div className="h-full bg-white border-2 border-[#B0B694] p-4 hover:shadow-xl transition-shadow duration-300">
              <img
                src="/plug.PNG"
                alt="Stunted growth"
                className="rounded-full h-24 w-24 border-6 border-black shadow-sm shadow-black mx-auto mt-4 object-cover"
              />
              <h3 className="text-lg font-bold text-center mt-4">Poor Growth or Stunted Development</h3>
              <p className="text-center mt-3">
                Shows the tree isn't getting essential nutrients from the soil.
              </p>
            </div>

            {/* Row 2 */}
            <div className="h-full bg-white border-2 border-[#B0B694] p-4 hover:shadow-xl transition-shadow duration-300">
              <img
                src="/electricity.PNG"
                alt="Early leaf drop"
                className="rounded-full h-24 w-24 border-6 border-black shadow-sm shadow-black mx-auto mt-4 object-cover"
              />
              <h3 className="text-lg font-bold text-center mt-4">Early Leaf Drop</h3>
              <p className="text-center mt-3">
                Premature leaf loss often signals nutritional stress.
              </p>
            </div>

            <div className="h-full bg-white border-2 border-[#B0B694] p-4 hover:shadow-xl transition-shadow duration-300">
              <img
                src="/wind.PNG"
                alt="Pest infestation"
                className="rounded-full h-24 w-24 border-6 border-black shadow-sm shadow-black mx-auto mt-4 object-cover"
              />
              <h3 className="text-lg font-bold text-center mt-4">Insect and Pest Infestations</h3>
              <p className="text-center mt-3">
                Healthy trees resist pests better with proper fertilization.
              </p>
            </div>

            <div className="h-full bg-white border-2 border-[#B0B694] p-4 hover:shadow-xl transition-shadow duration-300">
              <img
                src="/plug.PNG"
                alt="Disease signs"
                className="rounded-full h-24 w-24 border-6 border-black shadow-sm shadow-black mx-auto mt-4 object-cover"
              />
              <h3 className="text-lg font-bold text-center mt-4">Signs of Disease</h3>
              <p className="text-center mt-3">
                Proper nutrition helps trees fight off diseases naturally.
              </p>
            </div>
          </div>

          <p className="text-center max-w-full font-bold mx-auto mt-8">
            If you're seeing any of these signs, it's time to give your trees the nutrition they need with deep root fertilization. The benefits are clear: healthier, better-looking trees and a lush, vibrant lawn. Grass roots also benefit from deep root fertilization, as it can help promote a healthy and robust lawn.
          </p>
        </div>
      </div>

      {/* How It's Done Section */}
      <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 mt-16 mb-16">
          <div className="relative lg:w-5/12 group shadow-lg shadow-black">
            <div className="absolute w-full h-full top-5 -left-5 bg-[#afb593] z-0"></div>
            <img
              src="/truckkk.jpg"
              alt="Deep root fertilization equipment"
              className="relative w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 z-10"
            />
          </div>
          <div className="lg:w-full">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              How is Deep Root Fertilization Done?
            </h1>
            <img src="/divider.png" alt="Divider" title="divider" className="mb-6" />
            <div className="space-y-4 text-gray-700">
              <p>
                At Ken's Tree Service, our experienced Arborists use specialized equipment to safely and effectively deliver the fertilizer directly onto the roots of your trees. First, they will assess the condition of the soil and determine what type and amount of fertilizer are needed for optimal results.
              </p>
              <p>
                Nutrient content, environmental conditions, and tree species are all taken into consideration when formulating a fertilizer mix. Our team will also take into account any insect or disease issues that may be present to provide the best possible solution for your trees.
              </p>
              <p>
                The arborist then injects liquid fertilizer into holes that have been drilled into the soil. Depending on your needs, granular fertilizer can also be applied directly to the tree's root system. The entire process is designed to maximize nutrient absorption and help keep your trees looking their best.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-[#90a99557] py-16">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" rounded-lg max-w-8/12 mx-auto text-center">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
              Choose Ken's Tree Service for Professional Deep Root Fertilization Services in Tarpon Springs, FL
            </h1>
            <img
              src="/divider.png"
              alt="Divider"
              className="mx-auto mb-6"
            />
            <div className="space-y-4 text-gray-700  mx-auto">
              <p>
                When it comes to deep root fertilization services, you can depend on Ken's Tree Service. Our team of Arborists is highly trained and experienced in using the latest technologies and techniques to ensure that your trees are healthy and vibrant.
              </p>
              <p>
                We offer a wide range of tree services, including insect and disease management, tree removal, pruning and trimming, and more. Our team also provides emergency assistance for storm-damaged trees on your property.
              </p>
              <p className="font-bold text-md">
                Contact us at{" "}
                <a href="tel:812-213-5997" className="text-green-800 hover:text-black transition-colors duration-300">
                  812-213-5997
                </a>{" "}
                to get started on deep root fertilization for your trees in Tarpon Springs, FL. We look forward to helping you keep your trees healthy and beautiful.
              </p>
            </div>
            <button className="my-6 bg-[#afb236] hover:bg-[#908927] hover:rounded text-white font-bold py-3 px-8 rounded-3xl shadow-md transition-colors duration-300 transform hover:scale-105">
              REQUEST A FREE ESTIMATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeepRootFertilization;