import { useLocation } from "react-router-dom";

const services = [
  { name: "Tree Removal", path: "/services/tree-removal-tarpon-springs-fl/" },
  { name: "Tree Trimming & Pruning", path: "/services/tree-trimming-pruning-tarpon-springs-fl/" },
  { name: "Deep Root Fertilization", path: "/services/deep-root-fertilization-tarpon-springs-fl/" },
  { name: "Structural Pruning", path: "/services/structural-pruning-tarpon-springs-fl/" },
  { name: "Land Clearing", path: "/services/land-clearing-tarpon-springs-fl/" },
  { name: "Storm Clean Up", path: "/services/storm-clean-up-tarpon-springs-fl/" },
  { name: "Commercial Tree Services", path: "/services/commercial-tree-services-tarpon-springs-fl/" },
];

const DeepRootFertilization = () => {
  const location = useLocation();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative mb-12">
        <div className="h-[350px] md:h-[450px] relative w-full">
          <div className="absolute inset-0 bg-[url('/hero-img.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
              Deep Root Fertilization Tarpon Springs FL
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-11/12 max-w-screen-xl mx-auto px-4 lg:px-0 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Main Content */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-6">
              Your Top Choice for Tree Service in Tarpon Springs, FL
            </h2>

            <p className="text-md text-justify font-semibold text-gray-700 mb-6">
              Let Ken's Tree Service take care of your lawn's health. Our deep root fertilization service in Tarpon Springs, FL will give you a lush and vibrant yard to enjoy.
              Call us at{" "}
              <a href="tel:812-213-5997" className="text-green-700 underline">
                812-213-5997
              </a>{" "}
              for your free estimate.
            </p>

            <div className="space-y-4 mb-8 text-gray-700">
              <p>
                Trees are powerful gifts from nature that bring beauty and shade. However, they need proper nutrients to stay healthy—this is where deep root fertilization comes in.
              </p>
              <p>
                Utilizing specialized techniques and premium products, this service provides trees with essential nutrition, ensuring they remain strong and vibrant for years.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">What is Deep Root Fertilization</h2>
            <div className="space-y-4 mb-8 text-gray-700">
              <p>
                Deep root fertilization involves injecting fertilizer directly into the root zone, aerating soil and improving nutrient absorption. This strengthens resistance to disease and pests while supporting robust root development.
              </p>
              <p>
                Unlike surface fertilization, which may not reach tree roots, deep root techniques deliver nutrients precisely where they're needed most.
              </p>

              <div className="overflow-hidden rounded shadow-md my-6">
                <img
                  src="/47300128_1070645999762531_1703345697010483200_n.jpg"
                  alt="Deep root fertilization"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <p>
                Deep root fertilization requires trained professionals and specialized equipment to ensure proper application and tree health benefits.
              </p>

              <div className="w-full h-96 mt-10 overflow-hidden rounded shadow-md">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112577.66100994803!2d-82.772991!3d28.144908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c28cfd6f0942df%3A0xf4297f0ce0bf24b7!2sTarpon%20Springs%2C%20FL!5e0!3m2!1sen!2sus!4v1753449185853!5m2!1sen!2sus"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            {/* Call to Action Card */}
            <div className="relative h-60 rounded overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="absolute inset-0 bg-[url('/map-bg.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-[#1e4d32e6]"></div>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
                <h3 className="text-lg font-bold mb-2">Contact Us Today for More Info!</h3>
                <a href="tel:812-213-5997" className="text-2xl font-extrabold">
                  (812) 213-5997
                </a>
              </div>
            </div>

            {/* Services List */}
            <div className="bg-white rounded shadow-md overflow-hidden">
              <h3 className="bg-[#1e4d32] text-white px-5 py-2 text-md font-bold">
                Our Services
              </h3>
              <ul className="divide-y divide-gray-100">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.path}
                      className={`block px-5 py-2 text-sm md:text-base transition ${
                        location.pathname === service.path
                          ? "bg-green-100 text-green-700 font-semibold"
                          : "text-gray-700 hover:bg-green-50 hover:text-green-700"
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

      {/* Do I Need It Section */}
      <section className="w-full bg-gradient-to-b from-[#f8faec] to-[#bcc49b] py-20">
        <div className="w-11/12 max-w-screen-xl mx-auto text-center px-4">
          <p className="text-lg font-bold uppercase text-[#245B3C]">Do I Need It?</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Signs Your Tree Needs Deep Root Fertilization</h2>
          <img src="/divider.png" alt="divider" className="mx-auto my-4" />
          <p className="font-medium max-w-2xl mx-auto">
            Trees are resilient, but even they need extra help. Watch for these common signs that it's time for deep root fertilization.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {[
              { src: "/yellow_leaves.PNG", title: "Yellowing or Discolored Leaves", text: "A sign of nutrient deficiency." },
              { src: "/twigs.PNG", title: "Weakened Branches and Twigs", text: "Poor nutrient absorption weakens trees." },
              { src: "/development.PNG", title: "Stunted Growth", text: "Lack of essential nutrients." },
              { src: "/leaf_drop.PNG", title: "Early Leaf Drop", text: "Often caused by nutritional stress." },
              { src: "/pests.PNG", title: "Pest Infestations", text: "Healthy trees resist pests better." },
              { src: "/star.PNG", title: "Signs of Disease", text: "Well-fed trees fight disease naturally." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border-2 border-[#B0B694] p-4 rounded hover:shadow-xl transition">
                <img
                  src={item.src}
                  alt={item.title}
                  className="rounded-full h-24 w-24 mx-auto mt-2 border-4 border-black shadow"
                />
                <h4 className="text-lg font-bold mt-4">{item.title}</h4>
                <p className="mt-2">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="font-bold text-md max-w-xl mx-auto mt-10">
            If your trees show these symptoms, it's time to nourish them from the ground up. Let Ken's Tree Service restore your trees and lawn.
          </p>
        </div>
      </section>

      {/* How It’s Done Section */}
      <section className="w-11/12 max-w-screen-xl mx-auto py-20 px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="relative lg:w-1/2 shadow-md group">
            <div className="absolute top-5 -left-5 w-full h-full bg-[#afb593] z-0"></div>
            <img
              src="/truckkk.jpg"
              alt="Equipment"
              className="relative z-10 w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">How is Deep Root Fertilization Done?</h2>
            <img src="/divider.png" alt="Divider" className="mb-4" />
            <div className="space-y-4 text-gray-700">
              <p>
                Our certified Arborists assess your soil and tree condition to formulate the right nutrient blend. We inject liquid or granular fertilizer directly into the root zone.
              </p>
              <p>
                This ensures maximum absorption while improving resistance to pests, diseases, and environmental stressors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#90a99557] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
            Choose Ken's Tree Service for Professional Deep Root Fertilization in Tarpon Springs, FL
          </h2>
          <img src="/divider.png" alt="Divider" className="mx-auto mb-6" />
          <div className="space-y-4 text-gray-700">
            <p>
              Our expert Arborists use the latest tools and techniques to keep your trees thriving. We also offer pruning, removal, and emergency services.
            </p>
            <p className="font-bold">
              Call us at{" "}
              <a href="tel:812-213-5997" className="text-green-800 underline hover:text-black">
                812-213-5997
              </a>{" "}
              for a free estimate.
            </p>
          </div>
          <button className="mt-6 bg-[#afb236] hover:bg-[#908927] text-white font-bold py-3 px-8 rounded-full shadow-md transition hover:scale-105">
            REQUEST A FREE ESTIMATE
          </button>
        </div>
      </section>
    </div>
  );
};

export default DeepRootFertilization;
