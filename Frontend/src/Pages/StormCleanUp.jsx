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

const StormCleanUp = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-50 "></div>
        <img
          src="/truck.jpeg"
          alt="Tree trimming service"
          className="w-full  h-96 object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Storm Clean Up
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-12 ml-20 mr-20 flex flex-col lg:flex-row gap-8">
        {/* Left Side - Main Content */}
        <div className="lg:w-2/3">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Your Trusted Tree Service Company in Tarpon Springs, FL
          </h1>

          <b className="text-lg text-gray-700 mb-6">
            If you’re looking for professional storm cleanup services in Tarpon
            Spring, FL, look no further! Our experienced arborists have the
            expertise and equipment needed to keep your property safe after a
            storm. With our friendly team on the job, you can rest assured that
            your landscape will be restored to its former glory in no time. Call
            us at (727) 934-5804 for a free estimate.
          </b>

          <p className="text-gray-600 mb-8">
            Florida is known for its warmth and sunshine, but it is also prone
            to severe storms, floods, high winds, and even tornadoes.
            Storm-inflicted disasters can cause excessive property damage. With
            high winds and heavy rains, storm season can be hazardous for trees,
            leaving branches scattered around yards or fallen onto buildings.
          </p>

          <div className="flex gap-8">
            <div className="  flex-1">
              <img
                src="/8.jpg"
                alt=""
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="flex-1">
              <img
                src="/9.jpg"
                alt="Tree trimming example"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
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
            <p>
              That’s why our storm cleanup services are here to help you restore
              your property quickly and safely. We can assess the damage, create
              a plan of action for clean-up services, and get the job done
              efficiently.
            </p>
            <p>
              When you enlist Ken’s Tree Service for storm clean up, here are
              the services we provide:
            </p>
            <li>Assessing and Removing Fallen Branches </li>
            <li>Clearing Away Debris </li>
            <li>Taking Safety Precautions During Storm Cleanup </li>
            <li>Protecting Your Property from Future Damage </li>
            <li>Expert Advice from Experienced Arborists </li>
            <li>
              Free Estimates for Storm Cleanup Services in Tarpon Springs, FL,
              and surrounding areas.
            </li>
            <p>
              With years of experience in the industry and a team of friendly
              professionals on your side, we’ll make sure that you can recover
              quickly after a storm hits. From debris removal to general
              cleanup, there is no job too big or small for our team.{" "}
            </p>
            <div className="w-full h-96 mt-8 rounded-lg overflow-hidden shadow-lg">
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
      {/* i have to add here */}

      <div className="w-full bg-[#bcc49b] py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-center text-3xl font-extrabold text-gray-900">
            Benefits
          </p>
          <h1 className="text-center text-3xl font-extrabold mt-3 text-gray-900">
            Benefits of Hiring a Professional for Storm Damage Cleanu
          </h1>
          <div className="flex justify-center my-6">
            <img src="/divider-l.png" alt="divider" className="w-64 h-4" />
          </div>
          <p className="max-w-3xl mx-auto text-center text-gray-700 leading-relaxed">
            When a storm hits your property, it’s important to act fast and hire
            professionals for cleanup. Common storm damage includes fallen
            limbs, uprooted trees, or even whole trees that have toppled over.
            From obstructing roads to damaging buildings, these can pose serious
            risks to your property.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            {/* Tree Removal */}
            <div className="bg-white rounded-xl shadow hover:shadow-xl transition-shadow duration-300">
              <img
                src="/10.jpg"
                alt="Tree removal service"
                className="h-60 w-full rounded-t-xl object-cover"
              />
              <h3 className="text-xl font-semibold text-center mt-5">
                Minimize Risks
              </h3>
              <p className="text-center text-gray-700 font-medium px-6 mt-4">
                Our storm cleanup services are aimed at minimizing the risk of
                further damage while also restoring the natural beauty of your
                landscape. With our experienced arborists, we can provide the
                most efficient and cost-effective clean-up solutions.
              </p>
            </div>

            {/* Bush Hogging */}
            <div className="bg-white rounded-xl shadow hover:shadow-xl transition-shadow duration-300">
              <img
                src="/11.jpg"
                alt="Bush hogging service"
                className="h-60 w-full rounded-t-xl object-cover"
              />
              <h3 className="text-xl font-semibold text-center mt-5">
                Experienced Professionals
              </h3>
              <p className="text-center text-gray-700 font-medium px-6 mt-4">
                From debris removal to tree trimming, we take care of all the
                hard work so you don’t have to worry. Plus, our arborists are
                trained in proper safety regulations, ensuring that your
                property remains safe and secure.
              </p>
            </div>

            {/* Rock Excavation */}
            <div className="bg-white rounded-xl shadow hover:shadow-xl transition-shadow duration-300">
              <img
                src="/12.jpg"
                alt="Rock excavation service"
                className="h-60 w-full rounded-t-xl object-cover"
              />
              <h3 className="text-xl font-semibold text-center mt-5">
                Stress-Free
              </h3>
              <p className="text-center text-gray-700 font-medium px-6 mt-4">
                For our commercial clients, we specialize in storm damage
                management and stress-free service. We can inspect and assess
                the affected area, provide detailed reports to your insurance
                company, and provide clean-up services as needed.
              </p>
            </div>
          </div>

          {/* Last two boxes centered */}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-center my-16">
        <div className="ml-10 h-72 w-full mb-62 ">
          <img
            src="/contact-us-img.jpg"
            alt="Professional land clearing team at work"
            className="rounded-lg shadow-xl object-cover"
          />
        </div>
        <div className="mr-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">24/7 Availability</h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Emergency Response Storm Cleanup in Tarpon Springs, FL
          </h2>
          <img src="/divider-l.png" alt="" />
          <div className="flex justify-start my-4">
            
          </div>
          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed">
             Fallen trees can cause a lot of damage to your property and should be dealt with as soon as possible. Our team offers 24/7 emergency response services to help you get your property back on track. We understand that time is of the essence in these cases, so we will work quickly and efficiently to restore your property.
            </p>
            

            <h3 className="text-xl font-semibold text-gray-800 mt-6">
              Why Choose Professional Storm Cleanup Services in Tarpon Spring, FL
            </h3>
            <p className="leading-relaxed ">Storm cleanup is a job for the professionals. Owing to the complexity, safety risks, and potential for damage, it’s not something that should be attempted by an untrained individual. From debris removal to tree trimming and assessment, professionals have the training and experience needed to get the job done right.</p>
            <p className="leading-relaxed ">Heavy winds, lightning, and excessive rain can wreak havoc on your property. Our team of experienced arborists is trained to safely remove fallen trees, branches, and debris without risking further damage. We will make sure any hanging or broken limbs are cleared away from power lines and other structures.
With our storm cleanup services, you can rest assured that your property will be safe and secure after a storm. To prevent future damage, we also offer preventive treatments such as cabling or staking weak limbs</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full bg-gray-300 items-center py-16 text">
        <h1 className="text-3xl font-bold text-gray-800 mt-4 mb-4">
          Experience You Can Trust:
        </h1>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Ken’s Professional Storm Cleanup Services
        </h1>
        <img className="my-4 w-80" src="/divider-l.png" alt="" />
        <p className="text-gray-700 ml-5 mr-5 text-center">
          At Ken’s Tree Service, we stand by our commitment to providing top-quality storm cleanup services. Our experienced arborists are here to make sure that your property is taken care of quickly and correctly after a storm.
        </p>
        <p className="text-gray-700 ml-10 mr-10 text-center font-semibold mt-3">
          With over 20 years of experience, we understand the complexity and potential risks associated with storm damage cleanup. That’s why our team is trained and equipped with the latest tools and safety gear to ensure that your property is restored on time..
        </p>
        <b className="text-gray-700 ml-10 mr-10 font-semibold text-center mt-3">
          If you’re looking for professional storm cleanup services in Tarpon Springs, Palm Harbor, New Port Richey, or the surrounding areas, contact us at (727) 934-5804.
        </b>
        <button className="bg-green-600 hover:bg-green-700 hover:rounded-2xl text-white px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300 mt-10">
          REQUEST A FREE ESTIMATE
        </button>
      </div>
    </div>
  );
};

export default StormCleanUp;
