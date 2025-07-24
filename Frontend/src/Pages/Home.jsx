import React from 'react';

const Home = () => {
  return (
    <div className=''>
      {/* Hero Section */}
      <div className="relative p-15">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-img.jpg"
            alt="Truck background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-700 bg-opacity-50 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 max-w-6xl">
            <p className="text-5xl font-extrabold mb-5">LICENSED. TRAINED. INSURED.</p>
            <div className='flex justify-center mb-5'><img src="/divider-l.png" alt="" /></div>
            <p className="text-xl mb-6">
              Making the cut since 1997, we offer 5-star tree services for residential <br />
              and commercial properties of any size.
            </p>
            <button className="bg-lime-600 hover:bg-lime-700 hover:rounded text-white font-bold py-3 px-6 mb-20 rounded-3xl transition duration-300">
              REQUEST A FREE ESTIMATE
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 text-white bg-[#B0B694]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Emergency Service */}
          <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold mb-4 flex justify-center">
              <img loading="lazy" decoding="async" src="/24_7.png" alt="24_7" />
            </div>
            <h3 className="text-xl font-semibold mb-4">24/7 Emergency Tree Service</h3>
            <p className="text-center">
              We understand that tree emergencies don't always occur during regular business hours.
              That is why we offer 24/7 emergency tree services to help protect your property
              and ensure the safety of your family.
            </p>
          </div>

          {/* Licensed and Insured */}
          <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold mb-4 flex justify-center">
              <img loading="lazy" decoding="async" src="licensed-and-insured.png" alt="licensed-and-insured" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Licensed and Insured</h3>
            <p className="text-center">
              We are proud of our team of arborists who offer professional tree care services for residential and commercial properties. Our arborists are licensed and insured to provide the highest quality of service for your tree care needs. With our team of arborists, you can rest assured that your trees will receive the best possible care.
            </p>
          </div>

          {/* Superior Service */}
          <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold mb-4 flex justify-center">
              <img loading="lazy" decoding="async" src="/superior-service.png" alt="superior-service" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Superior Service</h3>
            <p className="text-center">
              We strive to offer superior service and satisfaction for all our customers. We take the time to get to know you to provide personalized service and meet your individual needs. Our team is passionate about providing high-quality services that will leave you feeling satisfied with the results.
            </p>
          </div>
        </div>
      </div>
      <div><img loading="lazy" decoding="async" src="/ZigZag.png" alt="" className='w-full' /></div>

      {/* Our Services Section */}
      <div className="py-25 mx-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-md font-bold text-gray-900">OUR SERVICES</h2>
          <p className="text-3xl font-bold mb-3">
            We Offer Fast, Professional, and Reliable
            Tree Services
          </p>
          <div className='flex justify-center mb-3'>
            <img loading="lazy" decoding="async" src="/divider.png" alt="divider" title="divider" />
          </div>
          <div className='text-xl font-semibold mb-6'>
            <p>Exceeding Our Client's Expectations</p>
          </div>
          <div className='flex justify-center'>
            <img loading="lazy" decoding="async" src="/badges.jpg" alt="badges" title="badges" />
          </div>
        </div>
      </div>

      {/* Boxes Section */}
      <div className='mx-15 sm:mx-6'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 lg:px-8">
          {/* First Row with 3 Boxes */}
          <div className="p-6 rounded-lg shadow-lg bg-white">
            <img src="/tree-trimming-and-pruning.jpg" alt="Tree Trimming & Pruning" title='tree-trimming-pruning"' className="w-full h-fit object-cover rounded-t-lg" />
            <h1 className="text-xl font-bold mt-4 text-center">Tree Trimming & Pruning</h1>
            <p className='px-3 text-center'>Our certified arborists offer professional tree trimming and pruning services to improve the health, safety, and aesthetic appeal of your trees. We use the latest techniques to ensure proper growth and optimal tree health</p>
            <div className='flex justify-center'>
              <button className="mt-4 bg-lime-600 hover:bg-lime-700 hover:rounded text-white font-bold py-2 px-4 rounded-3xl">DISCOVER MORE</button>
            </div>
          </div>

          <div className="p-6 rounded-lg shadow-lg bg-white">
            <img src="/structural-pruning.jpg" alt="Structural Pruning" title="structural-pruning" className="w-full h-fit object-cover rounded-t-lg" />
            <h1 className="text-xl font-bold mt-4 text-center">Structural Pruning</h1>
            <p className='px-3 text-center'>Structural pruning involves cutting back branches to improve the overall structure of a tree and help it maintain its balance. This will reduce the risk of potential damage caused by strong winds or storms, as well as prevent limbs from interfering with utility wires or buildings.</p>
            <div className='flex justify-center'>
              <button className="mt-4 bg-lime-600 hover:bg-lime-700 hover:rounded text-white font-bold py-2 px-4 rounded-3xl">DISCOVER MORE</button>
            </div>
          </div>

          <div className="p-6 rounded-lg shadow-lg bg-white">
            <img src="/tree-removal.jpg" alt="Tree Removal" title='tree-removal' className="w-full h-fit object-cover rounded-t-lg" />
            <h1 className="text-xl font-bold mt-4 text-center">Tree Removal</h1>
            <p className='px-3 text-center'>Tree removal is a dangerous task that should be left to professionals. Our experienced arborists use the latest safety equipment and techniques to perform tree removals safely and efficiently.</p>
            <div className='flex justify-center'>
              <button className="mt-4 bg-lime-600 hover:bg-lime-700 hover:rounded text-white font-bold py-2 px-4 rounded-3xl">DISCOVER MORE</button>
            </div>
          </div>
        </div>

        {/* Second Row with 4 Boxes */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 lg:px-8'>
          <div className="p-6 rounded-lg shadow-lg bg-white">
            <img src="/land-clearing.jpg" alt="Land Clearing" title='land-clearing' className="w-full h-fit object-cover rounded-t-lg" />
            <h1 className="text-xl font-bold mt-4 text-center">Land Clearing</h1>
            <p className='px-3 text-center'>Our land clearing services are designed for residential, commercial, and industrial properties. We will remove trees, stumps, brush, and other debris to free up space for development or construction projects.</p>
            <div className='flex justify-center'>
              <button className="mt-4 bg-lime-600 hover:bg-lime-700 hover:rounded text-white font-bold py-2 px-4 rounded-3xl">DISCOVER MORE</button>
            </div>
          </div>

          <div className="p-6 rounded-lg shadow-lg bg-white">
            <img src="/storm-cleanup.jpg" alt="Storm Clean Up" title='storm-cleanup' className="w-full h-fit object-cover rounded-t-lg" />
            <h1 className="text-xl font-bold mt-4 text-center">Storm Clean Up</h1>
            <p className='px-3 text-center'>Our team is available 24/7 to respond to storm damage clean up. We have the experience and equipment to handle even the most difficult jobs quickly and safely.</p>
            <div className='flex justify-center'>
              <button className="mt-4 bg-lime-600 hover:bg-lime-700 hover:rounded text-white font-bold py-2 px-4 rounded-3xl">DISCOVER MORE</button>
            </div>
          </div>

          <div className="p-6 rounded-lg shadow-lg bg-white">
            <img src="/deep-root-fertilization.jpg" alt="Deep Root Fertilization" title='deep-root-fertilization' className="w-full h-fit object-cover rounded-t-lg" />
            <h1 className="text-xl font-bold mt-4 text-center">Deep Root Fertilization</h1>
            <p className='px-3 text-center'>Deep root fertilization is an important part of maintaining healthy trees. Our certified arborists can inject nutrients directly into the roots of your trees to improve their health and vigor.</p>
            <div className='flex justify-center'>
              <button className="mt-4 bg-lime-600 hover:bg-lime-700 hover:rounded text-white font-bold py-2 px-4 rounded-3xl">DISCOVER MORE</button>
            </div>
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-white">
            <img src="/commercial-tree-services.jpg" alt="Commercial Tree Services" title='commercial-tree-services' className="w-full h-fit object-cover rounded-t-lg" />
            <h1 className="text-xl font-bold mt-4 text-center">Commercial Tree Services</h1>
            <p className='px-3 text-center'>We offer a variety of tree services for businesses including pruning, removal, stump grinding, and more. Our experienced arborists will work with you to ensure the safety and health of your trees while also protecting your bottom line.</p>
            <div className='flex justify-center'>
              <button className="mt-4 bg-lime-600 hover:bg-lime-700 hover:rounded text-white font-bold py-2 px-4 rounded-3xl">DISCOVER MORE</button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-[url('/tree-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-green-900 bg-opacity-70 mix-blend-multiply"></div>
        </div>
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl font-extrabold">
              The Safety of Our Customers' Families, Homes, Businesses, and Assets Is Our Number One Priority.
            </blockquote>
            <h4 className="text-sm md:text-sm font-semibold px-4 text-gray-300">
              CONTACT US FOR MORE INFORMATION
            </h4>
            <a href="tel:+17279345804" className='font-extrabold text-5xl'>(727) 934-5804</a>
            <div className="mt-12">
              <button className="bg-lime-600 hover:bg-lime-700 hover:rounded text-white font-bold py-3 px-6 mb-20 rounded-3xl transition duration-300">
                REQUEST A FREE ESTIMATE
              </button>
            </div>
          </div>
        </section>

        {/* Zigzag pattern at the bottom */}
        <div className="relative w-full h-8 bg-white">
          <div className="absolute inset-0 bg-[url('/tree-bg.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-green-900 bg-opacity-70 mix-blend-multiply"></div>
          </div>
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 1200 40"
            preserveAspectRatio="none"
          >
            <defs>
              <mask id="zigzag-mask">
                <rect width="100%" height="100%" fill="black" />
                <polygon
                  points="0,40 30,0 60,40 90,0 120,40 150,0 180,40 210,0 240,40 270,0 300,40 330,0 360,40 390,0 420,40 450,0 480,40 510,0 540,40 570,0 600,40 630,0 660,40 690,0 720,40 750,0 780,40 810,0 840,40 870,0 900,40 930,0 960,40 990,0 1020,40 1050,0 1080,40 1110,0 1140,40 1170,0 1200,40 1200,40 0,40"
                  fill="white"
                />
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="white" mask="url(#zigzag-mask)" />
          </svg>
        </div>
      </div>

      <div className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center'>
            {/* Header section */}
            <div className='mb-8'>
              <h3 className='text-green-700 text-md font-bold tracking-wider uppercase mb-4'>About Us</h3>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-800 leading-tight'>
                Arborists From Ken's Tree Service are All Highly<br />
                Trained Professionals.
              </h2>
            </div>

            {/* Decorative divider */}
            <div className='flex justify-center mb-8'>
              <img loading="lazy" decoding="async" src="/divider.png" alt="divider" title="divider" className='h-4' />
            </div>

            {/* Main image */}
            <div className='mb-10'>
              <img
                loading="lazy"
                decoding="async"
                src="/about-img.jpg"
                alt="KEN'S TREE SERVICES"
                title="KEN'S TREE SERVICES"
                className='w-full rounded-lg shadow-lg'
              />
            </div>

            {/* Content paragraphs */}
            <div className='max-w-4xl mx-auto mb-8'>
              <p className='text-gray-600 text-base leading-relaxed mb-6'>
                At Ken's Tree Service, our team is committed to providing excellent customer service, and we are always here to answer any questions you may have. We take pride in our work and your satisfaction is our top priority. We understand that every situation is unique and requires individual attention to detail. We will take the time to understand your needs and create a plan of action that is both cost-effective and provides you with a safe, attractive result.
              </p>
              <p className='text-gray-600 text-base leading-relaxed'>
                Our experienced staff of Arborists brings expertise and professionalism to our services that are unmatched in the industry. From your initial call to the completion of your job, we strive for customer satisfaction every step of the way. At Ken's Tree Service, we take great pride in our work and look forward to serving you soon.
              </p>
            </div>

            {/* CTA Button */}
            <div className='flex justify-center'>
              <button className="bg-lime-600 hover:bg-lime-700 hover:rounded text-white font-bold py-3 px-8 rounded-full transition duration-300 tracking-wide">
                DISCOVER MORE
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;