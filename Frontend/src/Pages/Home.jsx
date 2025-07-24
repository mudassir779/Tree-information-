import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <img 
            src="/truck.jpeg" 
            alt="Truck background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 max-w-2xl">
            <p className="text-lg font-semibold mb-2">LICENSED. TRAINED. INSURED.</p>
            <p className="text-xl mb-4">★★★★★</p>
            <p className="text-xl mb-6">
              Making the cut since 1997, we offer 5-star tree services for residential
              and commercial properties of any size.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
              REQUEST A FREE ESTIMATE
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Emergency Service */}
          <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-green-600 mb-4">24</div>
            <h3 className="text-xl font-semibold mb-4">24/7 Emergency Tree Service</h3>
            <p className="text-gray-600">
              We understand that tree emergencies don't always occur during regular business hours. 
              That is why we offer 24/7 emergency tree services to help protect your property 
              and ensure the safety of your family.
            </p>
          </div>

          {/* Licensed and Insured */}
          <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-green-600 mb-4">✓</div>
            <h3 className="text-xl font-semibold mb-4">Licensed and Insured</h3>
            <p className="text-gray-600">
              Our arborists are licensed and insured to provide the highest quality of service for your tree care needs.
            </p>
          </div>

          {/* Superior Service */}
          <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-green-600 mb-4">★</div>
            <h3 className="text-xl font-semibold mb-4">Superior Service</h3>
            <p className="text-gray-600">
              We strive to offer superior service and satisfaction for all our customers.
            </p>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR SERVICES</h2>
          <p className="text-xl text-gray-600 mb-8">
            We Offer Fast, Professional, and Reliable<br />
            Tree Services in Tarpon Springs, Florida
          </p>
        </div>
      </div>

      {/* Boxes Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-4 sm:px-6 lg:px-8">
        {/* First Row with 3 Boxes */}
        <div className="p-6 rounded-lg shadow-lg bg-white">
          <img src="/public/tree-trimming-and-pruning.jpg" alt="Tree Trimming & Pruning" className="w-full h-48 object-cover rounded-t-lg" />
          <h1 className="text-xl font-bold mt-4">Tree Trimming & Pruning</h1>
          <p>Our certified arborists offer professional tree trimming and pruning services to improve the health, safety, and aesthetic appeal of your trees.</p>
          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md">DISCOVER MORE</button>
        </div>

        <div className="p-6 rounded-lg shadow-lg bg-white">
          <img src="/public/tree-removal.jpg" alt="Structural Pruning" className="w-full h-48 object-cover rounded-t-lg" />
          <h1 className="text-xl font-bold mt-4">Structural Pruning</h1>
          <p>Structural pruning involves cutting back branches to improve the overall structure of a tree and help it maintain its balance.</p>
          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md">DISCOVER MORE</button>
        </div>

        <div className="p-6 rounded-lg shadow-lg bg-white">
          <img src="/public/structural-pruning.jpg" alt="Tree Removal" className="w-full h-48 object-cover rounded-t-lg" />
          <h1 className="text-xl font-bold mt-4">Tree Removal</h1>
          <p>Tree removal is a dangerous task that should be left to professionals. Our experienced arborists use the latest safety equipment.</p>
          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md">DISCOVER MORE</button>
        </div>

        {/* Second Row with 4 Boxes */}
        <div className="p-6 rounded-lg shadow-lg bg-white">
          <img src="/public/tree-trimming-and-pruning.jpg" alt="Tree Trimming & Pruning" className="w-full h-48 object-cover rounded-t-lg" />
          <h1 className="text-xl font-bold mt-4">Tree Trimming & Pruning</h1>
          <p>Our certified arborists offer professional tree trimming and pruning services to improve the health, safety, and aesthetic appeal of your trees.</p>
          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md">DISCOVER MORE</button>
        </div>

        <div className="p-6 rounded-lg shadow-lg bg-white">
          <img src="/public/tree-removal.jpg" alt="Structural Pruning" className="w-full h-48 object-cover rounded-t-lg" />
          <h1 className="text-xl font-bold mt-4">Structural Pruning</h1>
          <p>Structural pruning involves cutting back branches to improve the overall structure of a tree and help it maintain its balance.</p>
          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md">DISCOVER MORE</button>
        </div>

        <div className="p-6 rounded-lg shadow-lg bg-white">
          <img src="/public/structural-pruning.jpg" alt="Tree Removal" className="w-full h-48 object-cover rounded-t-lg" />
          <h1 className="text-xl font-bold mt-4">Tree Removal</h1>
          <p>Tree removal is a dangerous task that should be left to professionals. Our experienced arborists use the latest safety equipment.</p>
          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md">DISCOVER MORE</button>
        </div>
      </div>
       {/* Testimonial Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-8 h-8 text-yellow-300 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl italic mb-8">
            "Goode Tree Service saved our home after the hurricane. They responded immediately to our emergency call and safely removed the tree that had fallen on our roof. Professional, courteous, and extremely skilled."
          </blockquote>
          <div className="font-bold">— Sarah J., Tarpon Springs</div>
          <div className="mt-12">
            <button className="bg-white text-emerald-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition duration-300">
              VIEW MORE TESTIMONIALS
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Property?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation estimate from our certified arborists.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-md transition duration-300">
              REQUEST FREE ESTIMATE
            </button>
            <button className="bg-transparent hover:bg-gray-800 border-2 border-white text-white font-bold py-3 px-8 rounded-md transition duration-300">
              CALL NOW: (555) 123-4567
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;