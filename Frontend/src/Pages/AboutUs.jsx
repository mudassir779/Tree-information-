import React from 'react';

const AboutUs = () => {
  return (
    <div className='w-full'>
      {/* Hero Section */}
      <section className="relative w-full mb-12">
        <div className="h-70 w-full">
          <div className="absolute inset-0 bg-[url('/hero-img.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000b3] to-[#0000008c]"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4 uppercase">
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row mt-10 justify-between">
          <div className="w-8/12 mb-6 md:mr-4 pr-5 text-justify">
            <h2 className="text-2xl font-semibold mb-4">A FAMILY BUSINESS OF ETHICAL VALUES & EXPERIENCE:</h2>
            <p className="mb-4">
              Ken’s Tree Service has been serving the Tampa Bay area for over 22 years.
              We are a family-owned and operated business that is passionate about providing
              our customers with superior tree care services including removal, pruning,
              fertilization, consulting, and more. Our team of certified arborists is committed
              to providing a high-quality experience that meets or exceeds all of your expectations.
            </p>

            <h2 className="text-2xl font-semibold mb-4">OUR MISSION</h2>
            <p className="mb-4">
              At Ken’s Tree Service, our mission is to cultivate a team of high-performing
              professionals and create an environment that focuses on positive attitudes
              and shares this positive energy with our clients. We are dedicated to servicing
              our clients and their trees to the highest standards.
            </p>

            <h2 className="text-2xl font-semibold mb-4">OUR VALUES</h2>
            <p>
              Safety, Honesty, and Professionalism are not just catchwords that we say—they’re
              values that we live by each day. From our office staff to our field crew, these
              values are embraced in everything we do. We strive to provide quality tree care
              services and to ensure customer satisfaction on every project.
            </p>
          </div>

          <div className="flex-1 m-5 order-1 lg:order-2">
            <div className="flex flex-col lg:flex-row gap-20">
              <div className="relative lg:w-full group shadow-lg shadow-black">
                <div className="absolute w-full h-full top-5 -left-5 bg-[#afb593] z-0"></div>
                <img
                  src="/301625125_483491857119721_5793800417287341050_n.jpg"
                  alt="Professional tree service"
                  title="Professional tree service"
                  className="relative w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 z-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="mt-10 mb-15">
          <h2 className="text-2xl font-semibold mb-4">WHY CHOOSE US</h2>
          <p className="mb-4">
            Our customers are at the heart of what we do. We have a team of arborists who are experienced in handling any and all types of tree care jobs, big or small. We take great pride in providing 5-star customer service and guarantee that you’ll be satisfied with your decision of working with us. Additionally, all of our services are licensed, bonded, and insured for your peace of mind.
          </p>

          <h2 className="text-2xl font-semibold mb-4">COMMITMENT TO QUALITY</h2>
          <p className="mb-4">
            At Ken’s Tree Service, we’re committed to quality and excellence in everything we do. We use the most innovative tools and techniques to ensure that your trees are healthy, vibrant, and safe. We guarantee a job well done on every project, so you can rest assured that your trees will be taken care of by professionals who know what they’re doing. Adhering to the ANSI A300 standard, Ken’s Tree Service is dedicated to providing industry-leading tree care services tailored to meet your individual needs. We are committed to creating a safe and healthy environment for you and your trees.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Get Professional Tree Care Services – Trust Ken’s Tree Service.</h2>
          <p>
            We understand that taking care of your trees can be a daunting task. That’s why we’re here. We can handle any job for you so you can focus on other things. From tree pruning to removal, our team is equipped to tackle any project with professionalism and ease. From our friendly office staff to our professionals who complete the job, we guarantee a 5-star service experience. Contact us at
            {" "}
            <a href="812-213-5997" className="text-[#245b3c] hover:cursor-pointer">
              812-213-5997
            </a>
            {" "}
            to learn more about how we can help you care for your trees.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;