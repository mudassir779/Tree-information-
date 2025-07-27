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

const TreeRemoval = () => {
  const location = useLocation();

  return (
    <div className="w-full mx-auto">
      {/* Hero Section - Full Width */}
      <section className="relative mb-12 w-full">
        <div className="h-70 w-full">
          <div className="absolute inset-0 bg-[url('/hero-img.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gray-600 bg-opacity-40 mix-blend-multiply">
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
              Tree Removal Services
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
              Professional Tree Services in Tarpon Springs, FL
            </h2>

            <p className="text-lg font-bold text-gray-700 mb-6">
              For high-quality tree removal services in the Tarpon Springs, FL
              area, look no further than Ken's Tree Services. Our experienced
              arborists use the latest tree removal techniques to ensure your
              property is safe and secure. Call us at{" "}
              <a href="tel:812-213-5997" className="text-green-800 hover:text-black transition-colors duration-300">
                812-213-5997
              </a>{" "}
              for a free estimate today.
            </p>

            <div className="space-y-4 mb-8 font-semibold text-gray-700">
              <p>
                Tree removal can be a tricky process and requires an experienced
                eye to do it correctly. Multiple variables such as the size,
                location, health, and soil condition of the tree should all be
                taken into account when removing it safely. Our arborists are
                experienced in the latest tree removal techniques and understand
                how to properly assess each situation.
              </p>

              <p>
                For the past 17 years, Ken's Tree Services has been proudly
                serving Tarpon Springs and delivering remarkable tree service for
                residential and commercial properties. Our team of professionals
                has the essential skill set to tackle projects large and small
                with care and precision.
              </p>

              <p>
                We realize that every project is unique which is why we take time
                to review details with each client before commencing any action -
                guaranteeing your safety as well as a great service experience.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Experienced in Tree Removal Service in Tarpon Springs, FL
            </h2>

            <div className="space-y-4 mb-8 text-gray-700">
              <p>
                When it comes to tree removal in Tarpon Springs, FL, it's
                important to call a professional arborist. Trees that are diseased
                or dead can cause damage to your property and also create unsafe
                conditions.
              </p>

              <p>
                Additionally, trees can interfere with power lines or be placed
                too close to foundations or other structures, leading to further
                safety concerns.
              </p>
            </div>

            {/* Two Column Section */}
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Signs you may need to call a professional tree service include:
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li className="hover:text-green-700 transition-colors duration-200">Dead or dying branches</li>
                  <li className="hover:text-green-700 transition-colors duration-200">Visible signs of disease or infestation</li>
                  <li className="hover:text-green-700 transition-colors duration-200">Trees that are too close to buildings or power lines</li>
                  <li className="hover:text-green-700 transition-colors duration-200">Overhanging branches blocking roads or walkways</li>
                  <li className="hover:text-green-700 transition-colors duration-200">Storm damage to trees that need attention</li>
                </ul>
              </div>

              <div className="md:w-1/2 group overflow-hidden">
                <img
                  src="/disease.jpg"
                  alt="Signs of tree disease"
                  className="w-1/2 h-auto shadow-md transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="space-y-4 text-gray-700">
              <p>
                If your property has trees that are unhealthy or weakened trees,
                it is critical that you remove them right away. Damaged and
                diseased trees present a significant safety hazard to your home
                and family. By calling an arborist from Ken's Tree Services for
                tree removal, you can be confident that the job will be done
                correctly and safely.
              </p>

              <p>
                Dead and dying trees can also be a major hazard to nearby
                structures, power lines, and roads. Similarly, if you're concerned
                about potential damage to your property, calling a professional
                tree service can help protect the investment you have in your
                home.
              </p>

              <p>
                For commercial properties, the timely removal of hazardous trees
                can help keep employees and visitors safe. Overgrown or dead trees
                can be hazardous to those walking around your property, so it's
                important to remove them promptly.
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
          <div className="lg:w-1/4 lg-h-full space-y-6">
            <div className="bg-white shadow-md overflow-hidden transform hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-70 w-full">
                <div className="absolute inset-0 bg-[url('/map-bg.jpg')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-green-900 bg-opacity-40 mix-blend-multiply">
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

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Our Services
              </h3>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.path}
                      className={`block px-3 py-2 rounded transition ${location.pathname === service.path
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

      {/* 24/7 Section - Full Width */}
      <div className="w-full bg-[#bcc49b] py-10 mt-10">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-2xl font-bold">24/7 Availability</p>
          <h1 className="text-center text-2xl font-bold mt-2">
            Emergency Tree Removal Services in Tarpon Springs, FL
          </h1>
          <div className="flex justify-center my-5">
            <img src="/divider-l.png" alt="divider" />
          </div>
          <p className="text-center max-w-3xl mx-auto">
            Emergencies can happen at any time, which is why Ken's Tree Services
            provides 24/7 emergency services. When a tree is damaged or destroyed
            and could create an imminent danger to your home, you can count on us
            to be there when you need us most. We understand the urgency of these
            situations and will respond quickly to remove the tree from your
            property.
          </p>
          <h1 className="text-center text-md font-semibold mt-6">
            Situations that require emergency tree removal services include:
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10 pb-10">
            <div className="h-full bg-white rounded-xl border-4 border-[#B0B694] p-4 hover:shadow-xl transition-shadow duration-300">
              <img
                src="/electricity.PNG"
                alt="Lightning damage"
                className="rounded-full h-30 w-30 border-4 mx-auto mt-4 object-cover"
              />
              <p className="text-center mt-5">
                Trees that have been damaged by lightning
              </p>
            </div>

            <div className="h-full bg-white rounded-xl border-4 border-[#B0B694] p-4 hover:shadow-xl transition-shadow duration-300">
              <img
                src="/wind.PNG"
                alt="Wind damage"
                className="rounded-full h-30 w-30 border-4 mx-auto mt-4 object-cover"
              />
              <p className="text-center mt-5">
                Trees damaged by high winds or storms
              </p>
            </div>

            <div className="h-full bg-white border-4 rounded-xl border-[#B0B694] p-4 hover:shadow-xl transition-shadow duration-300">
              <img
                src="/plug.PNG"
                alt="Power line danger"
                className="rounded-full h-30 w-30 border-4 mx-auto mt-4 object-cover"
              />
              <p className="text-center mt-5">
                Trees threatening power lines or structures
              </p>
            </div>

            <div className="h-full bg-white border-4 rounded-xl border-[#B0B694] p-4 hover:shadow-xl transition-shadow duration-300">
              <img
                src="/star.PNG"
                alt="Emergency services"
                className="rounded-full h-30 w-30 border-4 mx-auto mt-4 object-cover"
              />
              <p className="text-center mt-5">
                Trees at immediate risk of falling
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section with side margins */}
      <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 mt-16 mb-16">
          <div className="lg:w-1/3 group overflow-hidden rounded-lg shadow-lg">
            <img
              src="/tree.jpg"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              alt="Professional tree removal"
            />
          </div>
          <div className="lg:w-1/2 mb-auto h-9/12">
            <h1 className="text-xl lg:text-2xl font-bold text-gray-800">
              Professional Tree Removal Services with Experienced Arborists in Tarpon Springs, FL.
            </h1>
            <img loading="lazy" decoding="async" src="/divider-d.png" alt="divider" title="divider-d" className="mt-5 shadow-2xl" />
            <div className="space-y-4 mt-5 text-gray-700">
              <p>
                Tree removal is a process that requires professional knowledge and experience. That's why it's important to always hire a reputable tree service company for the job. DIY tree removal may appear to be a cheaper option, but it can quickly become expensive and dangerous if things don't go as planned.
              </p>
              <p>
                Arborists and tree care experts have the skills and experience necessary to properly remove trees. They understand the unique needs of each tree, allowing them to safely and effectively remove it while minimizing the impact on surrounding vegetation.
              </p>
              <p>
                Certain trees may be too close to power lines, buildings, or other structures. Proximity to these hazards is just one of the many factors that professional tree care experts take into consideration. The rules and regulations for tree removal in Tarpon Springs, FL can also be complex and you need an arborist to ensure your safety.
              </p>
            </div>
            <h1 className="mt-8 text-2xl font-bold text-gray-800">
              Experience Peace of Mind with Tree Removal Services from Ken's Tree Services in Tarpon Springs, FL
            </h1>
            <div className="space-y-4 mt-4 text-gray-700">
              <p>
                At Ken's Tree Services, we have years of experience dealing with all types of tree projects. Our arborists and tree care experts will safely and effectively remove your trees – large or small – with care and precision.
              </p>
              <p>
                Our quality tree care services, excellent customer service, and competitive rates make us the top choice for tree removal services in Tarpon Springs, FL. We are fully licensed, insured, and bonded for your peace of mind. We always strive to exceed our client's expectations while providing the highest level of customer service.
              </p>
              <p>
                Whether it is tree pruning, tree trimming, stump removal, or any other lawn services, you can trust Ken's Tree Services to take care of all your tree needs at a fair price. Call us at
                {" "}
                <a href="tel:812-213-5997" className="text-green-800 hover:text-black transition-colors duration-300">
                  812-213-5997
                </a>{" "} for a free quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreeRemoval;