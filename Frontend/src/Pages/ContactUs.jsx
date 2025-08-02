import { useState } from "react";


const ContactUs = () => {
  const [formData, setFormData] = useState({
    Contact_Details: {
      Fname : '',
      Lname : '',
      Company : '',
      Email : '',
      Phone : ''
    },
    Service_details: {
      PropertyType : '',
      Job_Details : ''
    },
    Images : []
    
  })
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full mb-12 h-[300px] md:h-[400px] lg:h-[500px]">
        <div className="absolute inset-0 bg-[url('/hero-img.jpg')] bg-cover bg-center bg-fixed">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4 uppercase">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {/* Contact Info */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-green-800 mb-6">American Tree Experts Land</h1>
            <ul className="space-y-4 text-gray-700 text-sm sm:text-base">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-600 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Evansville, IN
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-600 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:Thetreexperts@gmail.com">Thetreexperts@gmail.com</a>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-600 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:812-457-3433">812-457-3433</a>
              </li>
            </ul>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Our Service Hours</h2>
              <div className="bg-gray-100 p-4 rounded-lg text-sm sm:text-base">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 3:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Why Choose Us?</h2>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                {[
                  "Licensed and insured professionals",
                  "Free estimates and consultations",
                  "Emergency services available",
                  "Environmentally friendly practices",
                ].map((reason, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-green-800 mb-2">New Request</h1>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form className="space-y-6 text-sm sm:text-base">
              {/* Contact Details */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["First name", "Last name"].map((label, i) => (
                    <div key={i}>
                      <label htmlFor={label} className="block text-gray-700 mb-1">{label}</label>
                      <input type="text" id={label.toLowerCase()} placeholder={label}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-gray-700 mb-1">Company name (if applicable)</label>
                <input type="text" id="company" placeholder="Company name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-1">Phone number</label>
                  <input type="tel" id="phone" placeholder="Phone number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
                </div>
              </div>

              {/* Address */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
                <div className="space-y-4">
                  {["Street 1", "Street 2"].map((street, i) => (
                    <input key={i} type="text" placeholder={street}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
                  ))}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {["City", "State", "ZIP code"].map((field, i) => (
                      <input key={i} type="text" placeholder={field}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Service Details</h2>

                <label htmlFor="propertyType" className="block text-gray-700 mb-1">Property Type</label>
                <select id="propertyType" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600">
                  <option>Choose an option</option>
                  <option>Residential</option>
                  <option>Estate</option>
                  <option>HOA</option>
                  <option>Apartment</option>
                  <option>Mobile</option>
                  <option>Golf</option>
                  <option>Management</option>
                  <option>Municipal</option>
                  <option>Church</option>
                  <option>Other</option>
                </select>

                {/* Checkboxes */}
                <div className="mt-4 space-y-2">
                  <label htmlFor="serviceType" className="block text-gray-700 mb-1">Service Type</label>
                  {[
                    "Tree Removal",
                    "Tree Trimming",
                    "Palm Trimming",
                    "Hurricane Preparation",
                    "Root Health/Management",
                    "Commercial or Estate Tree Maintenance Planning",
                  ].map((service, i) => (
                    <div className="flex items-center gap-2 ml-1.5" key={i}>
                      <input type="checkbox" id={`service_${i}`} />
                      <label htmlFor={`service_${i}`}>{service}</label>
                    </div>
                  ))}
                </div>

                {/* Job Size */}
                <div className="mt-4">
                  <label htmlFor="jobSize" className="block text-gray-700 mb-1">Approximate Job Size (optional)</label>
                  <select id="jobSize" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600">
                    <option>Choose an option</option>
                    <option>Small - Less than 10 palm trees or 2 small trees</option>
                    <option>Medium - 3-5 medium/large trims or 1 removal</option>
                    <option>Large - 6+ trims or 2+ large removals</option>
                  </select>
                </div>

                {/* Details */}
                <div className="mt-4">
                  <label htmlFor="details" className="block text-gray-700 mb-1">Additional Details (optional)</label>
                  <textarea id="details" rows="3"
                    className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-600"></textarea>
                </div>
              </div>

              {/* Availability */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Availability</h2>
                <label className="block text-gray-700 mb-1">Best day for assessment (optional)</label>
                <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />

                <label className="block text-gray-700 mb-1 mt-4">Alternate day (optional)</label>
                <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />

                <label className="block text-gray-700 mb-1 mt-4">Preferred arrival times (optional)</label>
                <div className="space-y-2 mt-2">
                  {["Any time", "Morning", "Afternoon"].map((time, i) => (
                    <div className="flex items-center gap-2 ml-1.5" key={i}>
                      <input type="checkbox" id={`arrival_${i}`} />
                      <label htmlFor={`arrival_${i}`}>{time}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upload Section */}
              <div>
                <h3 className="font-medium text-gray-700 mb-1">Upload images</h3>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 max-w-full md:max-w-[500px] mx-auto border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600 justify-center">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="flex justify-self-end">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ContactUs;
