import React from "react";

const services = [
  { name: "Tree Removal", path: "/services/tree-removal-tarpon-springs-fl/" },
  { name: "Tree Trimming & Pruning", path: "/services/tree-trimming-pruning-tarpon-springs-fl/" },
  { name: "Deep Root Fertilization", path: "/services/deep-root-fertilization-tarpon-springs-fl/"},
  { name: "Structural Pruning", path: "/services/structural-pruning-tarpon-springs-fl/" },
  { name: "Land Clearing", path: "/services/land-clearing-tarpon-springs-fl/" },
  { name: "Storm Clean Up", path: "/services/storm-clean-up-tarpon-springs-fl/" },
  { name: "Commercial Tree Services", path: "/services/commercial-tree-services-tarpon-springs-fl/",},
];

const StormCleanUp = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full mb-12">
        <div className="h-70 w-full">
          <div className="absolute inset-0 bg-[url('/hero-img.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000b3] to-[#0000008c]"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4 uppercase">
              Storm Clean Up
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Container with side margins */}
      <div className="w-10/12 mx-auto pt-10 px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side*/}
          <div className="lg:w-2/3">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-3">
              Your Trusted Tree Service Company in Tarpon Springs, FL
            </h1>

            <p className="text-md font-bold text-gray-700 mb-6">
              If you're looking for professional storm cleanup services in Tarpon
              Spring, FL, look no further! Our experienced arborists have the
              expertise and equipment needed to keep your property safe after a
              storm. With our friendly team on the job, you can rest assured that
              your landscape will be restored to its former glory in no time. Call
              us at{" "}
              <a href="tel:812-213-5997" className="text-[#245b3c]">
                812-213-5997
              </a>{" "}
              for a free estimate.
            </p>

            <p className="text-gray-600 mb-8">
              Florida is known for its warmth and sunshine, but it is also prone
              to severe storms, floods, high winds, and even tornadoes.
              Storm-inflicted disasters can cause excessive property damage. With
              high winds and heavy rains, storm season can be hazardous for trees,
              leaving branches scattered around yards or fallen onto buildings.
            </p>

            <p className="text-gray-600 mb-8">
              Not only is this a safety concern, but it can also be an eyesore. We understand the importance of clearing your property quickly and correctly. Our storm cleanup services include removing any fallen branches, trimming back damaged or broken limbs, and clearing away debris.
            </p>

            <div className="flex gap-30">
              <div className="flex-1">
                <img fetchpriority="high" decoding="async" src="/storm-cleanup.jpg" alt="Commercial Tree Maintenance" title="storm-cleanup" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <img decoding="async" src="/32498232_918103371683462_7686778002729861120_n.jpg" alt="Commercial" title="32498232_918103371683462_7686778002729861120_n" className="w-full h-full object-cover" />

              </div>
            </div>
            <div className="mt-12">
              <h1 className="text-2xl font-bold mb-4">
                Dealing with Storm Damage and How We Can Help Cleanup
              </h1>
              <p className="mb-4">
                Facing the aftermaths of a natural disaster can be overwhelming.
                Your front yard, backyard, or commercial property might be filled
                with scattered branches, leaves, uprooted trees, or even unwanted
                items like plywood sheets, tarps, and loose shingles.
              </p>
              <p className="mb-4">
                That's why our storm cleanup services are here to help you restore
                your property quickly and safely. We can assess the damage, create
                a plan of action for clean-up services, and get the job done
                efficiently.
              </p>
              <p className="mb-4">
                When you enlist Ken's Tree Service for storm clean up, here are
                the services we provide:
              </p>
              <ul className="list-disc list-inside text-md pl-5 mb-4">
                <li>Assessing and Removing Fallen Branches </li>
                <li>Clearing Away Debris </li>
                <li>Taking Safety Precautions During Storm Cleanup </li>
                <li>Protecting Your Property from Future Damage </li>
                <li>Expert Advice from Experienced Arborists </li>
                <li>
                  Free Estimates for Storm Cleanup Services in Tarpon Springs, FL,
                  and surrounding areas.
                </li>
              </ul>
              <p>
                With years of experience in the industry and a team of friendly
                professionals on your side, we'll make sure that you can recover
                quickly after a storm hits. From debris removal to general
                cleanup, there is no job too big or small for our team.{" "}
              </p>
              <div className="w-full h-96 mt-8 overflow-hidden shadow-lg">
                <iframe
                  className="mb-5 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112577.66100994803!2d-82.772991!3d28.144908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c28cfd6f0942df%3A0xf4297f0ce0bf24b7!2sTarpon%20Springs%2C%20FL!5e0!3m2!1sen!2sus!4v1753449185853!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Side - Sidebar */}
          <div className="pt-10 lg:w-1/4 lg-h-full space-y-6">
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

      <div className="w-full bg-gradient-to-b from-[#f8faec] to-[#bcc49b] py-20 mt-10">
        <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[#245B3C] text-lg font-bold uppercase">
            Benefits
          </p>
          <h1 className="text-center text-4xl font-bold">
            Benefits of Hiring a Professional for Storm Damage Cleanu
          </h1>
          <div className="flex justify-center my-5">
            <img decoding="async" src="/divider.png" alt="divider" title="divider" />
          </div>
          <p className="max-w-3xl mx-auto text-center text-gray-700 leading-relaxed">
            When a storm hits your property, it's important to act fast and hire
            professionals for cleanup. <br />
            Common storm damage includes fallen
            limbs, uprooted trees, or even whole trees that have toppled over. <br />
            From obstructing roads to damaging buildings, these can pose serious
            risks to your property.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            {/* Minimize Risks */}
            <div className="bg-white rounded-sm shadow hover:shadow-xl transition-shadow duration-300 border-2 border-[#FFFFFF]">
              <img loading="lazy" decoding="async" src="/38612377_989310431229422_6230231288440160256_n.jpg" alt="minimize-risks" title="38612377_989310431229422_6230231288440160256_n" className="h-60 w-full object-cover" />
              <h3 className="text-xl font-semibold text-center mt-5">
                Minimize Risks
              </h3>
              <p className="text-center text-gray-700 font-small px-6 my-4">
                Our storm cleanup services are aimed at minimizing the risk of
                further damage while also restoring the natural beauty of your
                landscape. With our experienced arborists, we can provide the
                most efficient and cost-effective clean-up solutions.
              </p>
            </div>

            {/* Experienced Professionalss */}
            <div className="bg-white rounded-sm shadow hover:shadow-xl transition-shadow duration-300 border-2 border-[#FFFFFF]">
              <img loading="lazy" decoding="async" src="/117234206_1549671068526686_4566334105761471143_n.jpg" alt="experienced-professionals" title="117234206_1549671068526686_4566334105761471143_n" className="h-60 w-full object-cover" />
              <h3 className="text-xl font-semibold text-center mt-5">
                Experienced Professionals
              </h3>
              <p className="text-center text-gray-700 font-small px-6 my-4">
                From debris removal to tree trimming, we take care of all the
                hard work so you don't have to worry. Plus, our arborists are
                trained in proper safety regulations, ensuring that your
                property remains safe and secure.
              </p>
            </div>

            {/* Stress-Free */}
            <div className="bg-white rounded-sm shadow hover:shadow-xl transition-shadow duration-300 border-2 border-[#FFFFFF]">
              <img loading="lazy" decoding="async" src="/38668235_989310174562781_3587591873180467200_n.jpg" alt="stress-free" title="38668235_989310174562781_3587591873180467200_n" className="h-60 w-full object-cover" />
              <h3 className="text-xl font-semibold text-center mt-5">
                Stress-Free
              </h3>
              <p className="text-center text-gray-700 font-small px-6 my-4">
                For our commercial clients, we specialize in storm damage
                management and stress-free service. We can inspect and assess
                the affected area, provide detailed reports to your insurance
                company, and provide clean-up services as needed.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 mt-16 mb-16">
          <div className="relative lg:w-5/12 group shadow-lg shadow-black">
            <div className="absolute w-full h-full top-5 -left-5 bg-[#afb593] z-0"></div>
            <img loading="lazy" decoding="async" src="/contact-us-img.jpg" alt="contact us" title="contact-us-img" className="relative w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 z-10" />
          </div>
          <div className="lg:w-full pb-5">
            <h1 className="text-[#245B3C] text-md font-bold uppercase">24/7 Availability</h1>
            <h2 className="text-3xl font-bold text-gray-800">
              Emergency Response Storm Cleanup in Tarpon Springs, FL
            </h2>
            <img src="/divider.png" alt="Divider" title="divider" className="my-5" />
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Fallen trees can cause a lot of damage to your property and should be dealt with as soon as possible. Our team offers 24/7 emergency response services to help you get your property back on track. We understand that time is of the essence in these cases, so we will work quickly and efficiently to restore your property.
              </p>
              <h3 className="text-xl font-bold text-gray-800 mt-6">
                Why Choose Professional Storm Cleanup Services in Tarpon Spring, FL
              </h3>
              <p className="leading-relaxed ">Storm cleanup is a job for the professionals. Owing to the complexity, safety risks, and potential for damage, it’s not something that should be attempted by an untrained individual. From debris removal to tree trimming and assessment, professionals have the training and experience needed to get the job done right.</p>
              <p className="leading-relaxed ">Heavy winds, lightning, and excessive rain can wreak havoc on your property. Our team of experienced arborists is trained to safely remove fallen trees, branches, and debris without risking further damage. We will make sure any hanging or broken limbs are cleared away from power lines and other structures.
                With our storm cleanup services, you can rest assured that your property will be safe and secure after a storm. To prevent future damage, we also offer preventive treatments such as cabling or staking weak limbs</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-full bg-[#90a99557] items-center py-16 text">
        <h1 className="text-3xl font-extrabold text-gray-800 mt-4 mb-4">
          Experience You Can Trust:
        </h1>
        <h1 className="text-3xl font-extrabold text-gray-800">
          Ken's Professional Storm Cleanup Services
        </h1>
        <img src="/divider.png" alt="Divider" title="divider" className="my-8" />
        <div className="w-11/12 mx-auto">
          <p className="text-gray-700 ml-5 mr-5 text-center">
            At Ken's Tree Service, we stand by our commitment to providing top-quality storm cleanup services. Our experienced arborists are here to make sure that your property is taken care of quickly and correctly after a storm.
          </p>
          <p className="text-gray-700 ml-10 mr-10 text-center font-semibold mt-3">
            With over 20 years of experience, we understand the complexity and potential risks associated with storm damage cleanup. That’s why our team is trained and equipped with the latest tools and safety gear to ensure that your property is restored on time..
          </p>
          <p className="text-gray-700 ml-10 mr-10 font-bold text-center mt-3">
            If you're looking for professional storm cleanup services in Tarpon Springs, Palm Harbor, New Port Richey, or the surrounding areas, contact us at{" "}
            <a href="tel:812-213-5997" className="text-[#245b3c]">
              812-213-5997
            </a>{"."}
          </p>
        </div>
        <button className="my-6 bg-[#afb236] hover:bg-[#908927] hover:rounded text-white font-bold py-3 px-8 rounded-3xl shadow-md transition-colors duration-300 transform hover:scale-105">
          REQUEST A FREE ESTIMATE
        </button>
      </div>
    </div>
  );
};

export default StormCleanUp;
