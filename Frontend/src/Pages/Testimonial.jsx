import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "David King",
      date: "June 11, 2024",
      rating: 5,
      content: "Ken's tree service did a fantastic job. They were punctual and efficient.",
      initials: "D"
    },
    // ... rest of your testimonials data
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Customer Testimonials</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear what our customers have to say about their experience with our services
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i}
                      className={`text-xl ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <div className="relative mb-6 flex-grow">
                  <FaQuoteLeft className="text-gray-200 text-3xl absolute -top-2 -left-1" />
                  <p className="text-gray-700 relative z-10 pl-6">{testimonial.content}</p>
                </div>

                {/* Customer Info */}
                <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                  <div className="flex-shrink-0">
                    <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      {testimonial.initials}
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Removed FaPhone icon usage */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to experience our service?</h2>
          <a
            href="tel:812-457-3433"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
          >
            Call Us: 812-457-3433
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;