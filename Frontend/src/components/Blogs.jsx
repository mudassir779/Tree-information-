import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import { useSelector } from "react-redux";

const Blogs = () => {
  const backendLink = useSelector((state) => state.prod.link);
  const [blogPosts, setBlogPosts] = useState([]);

  // const blogPosts = [
  //   {
  //     id: 1,
  //     title: "Hurricane Season Safety: Protecting Your Property Beyond Trees",
  //     date: "Aug 8, 2024",
  //     categories: ["Tree Care Services", "Uncategorized"],
  //     excerpt: "As the July heat sizzles in Tarpon Springs, we're reminded that hurricane season is in full swing. At Ken's Tree Service, Inc., we've already discussed tree care for storm preparedness. Still, there's more to consider when safeguarding your...",
  //     image: "/blog-main.jpg"
  //   },
  //   {
  //     id: 2,
  //     title: "Benefits of Live Oak Trees in Tarpon Springs, FL",
  //     date: "May 3, 2024",
  //     categories: ["Tree Care Services"],
  //     excerpt: "The Unmatched Beauty and Benefits of Live Oak Trees in Your Florida Landscape Spring has sprung in Tarpon Springs, and the magnificent live oak trees are stealing the show! In this blog we dive into the benefits of live oak trees in your Florida landscape. At...",
  //     image: "/Benefits-of-Live-Oak-Trees.jpg"
  //   },
  //   {
  //     id: 3,
  //     title: "The Benefits of Professional Tree Care: Why DIY Tree Maintenance Can Be Risky",
  //     date: "Mar 26, 2024",
  //     categories: ["Tree Care Services", "Uncategorized"],
  //     excerpt: "As a property owner in Tarpon Springs, you take pride in the beautiful trees that grace your landscape. While it might be tempting to tackle tree maintenance tasks on your own, there are several compelling reasons to entrust your tree care to the professionals at...",
  //     image: "/Tree-Trimming-Matt-2-980x735.jpg"
  //   },
  //   {
  //     id: 4,
  //     title: "Spring Is Just Around the Corner! Are Your Trees Ready?",
  //     date: "Feb 29, 2024",
  //     categories: ["Tree Care Services", "Uncategorized"],
  //     excerpt: "With March just around the corner, it's time to ask: Are your trees ready for Spring? At Ken's Tree Service, we're preparing for the season ahead. As temperatures rise, your property's beautiful trees are poised to spring back to life. But are...",
  //     image: "/shutterstock_1093891613-980x735.jpg"
  //   },
  //   {
  //     id: 5,
  //     title: "How Do You Know When It's Time to Remove a Tree?",
  //     date: "Jan 26, 2024",
  //     categories: ["Tree Care Services", "Uncategorized"],
  //     excerpt: "Trees are majestic giants that grace our landscapes and provide countless benefits. They offer shade, beauty, privacy, and even improve air quality. But sometimes, even the most beloved trees need to come down. How do you know when it's time to remove a tree?...",
  //     image: "/ken.jpg"
  //   },
  //   {
  //     id: 6,
  //     title: "What to Know When Watering a Newly Planted Tree",
  //     date: "Dec 17, 2023",
  //     categories: ["General Tree-Related Tips", "Uncategorized"],
  //     excerpt: "What should you know when you're watering a newly planted tree? In this post, Ken's Tree Service, your trusted tree service company in Dunedin, FL, explains more about this topic. How Long Will It Take for a New Tree to Establish Itself? If you have...",
  //     image: "/watering-a-newly-planted-tree-1080x600.jpg"
  //   },
  //   {
  //     id: 7,
  //     title: "Understanding the Environmental Importance of Trees",
  //     date: "Dec 1, 2023",
  //     categories: ["General Tree-Related Tips", "Uncategorized"],
  //     excerpt: "It's no secret the positive impact trees can have on your property. However, what you might not know is that trees also benefit the wider environment. Their role does more than just boost curb appeal and increase property value. In this article, we will take a closer...",
  //     image: "/importance-of-trees-1080x600.jpg"
  //   }
  // ];
  const posts = [
    {
      name: "Hurricane Season Safety: Protecting Your Property Beyond Trees",
      path: "/",
    },
    { name: "Benefits of Live Oak Trees in Evansville, IN", path: "/" },
    {
      name: "The Benefits of Professional Tree Care: Why DIY Tree Maintenance Can Be Risky",
      path: "/",
    },
    {
      name: "Spring Is Just Around the Corner! Are Your Trees Ready?",
      path: "/",
    },
    { name: "How Do You Know When It's Time to Remove a Tree?", path: "/" },
  ];

  const getBlogPosts = async () => {
    try {
      const response = await axios.get(`${backendLink}/api/blog/get-blogs`);
      setBlogPosts(response.data.blog);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      setBlogPosts([]);
    }
  };

  useEffect(() => {
    getBlogPosts();
  }, []);

  const categories = [
    { name: "General Tree-Related Tips", path: "/" },
    { name: "Tree Care Services", path: "/" },
    { name: "Tree Removal Guide", path: "/" },
    { name: "Uncategorized", path: "/" },
  ];

  return (
    // <div className="max-w-4xl mx-auto px-4 py-8">
    <div className="w-full mb-20">
      {/* Main Content Container with side margins */}
      <div className="w-10/12 mx-auto pt-10 px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="lg:w-2/3">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Latest Blog Posts
            </h1>

            <div className="space-y-12">
              {blogPosts &&
                blogPosts.map((post) => (
                  <article
                    key={post._id}
                    className="border-b border-gray-200 pb-8 last:border-0 last:pb-0"
                  >
                    <div className="mb-6 overflow-hidden">
                      <img
                        src={backendLink + "/" + post.image}
                        alt={post.title}
                        className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-2 hover:text-green-600 transition-colors">
                      {post.title}
                    </h2>

                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span>{post.dated}</span>
                      <span className="mx-2">|</span>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-gray-100 rounded-md text-gray-600 hover:bg-green-100 hover:text-green-700 transition-colors">
                          {post.category.title}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.description}
                    </p>
                  </article>
                ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="pt-10 ml-10 lg:w-1/4 lg-h-full space-y-6">
            <div className="bg-white shadow-md shadow-[#0000004d] overflow-hidden transform hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-60 w-full">
                <div className="absolute inset-0 bg-[url('/map-bg.jpg')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-[#1e4d32e6]"></div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h1 className="text-md md:text-lg font-bold text-white text-center px-4">
                    Contact Us Today for More Info!
                  </h1>
                  <a href="tel:812-457-3433" className="text-white text-xl md:text-3xl font-bold mb-4">
                    812-457-3433
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md  hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-md font-bold bg-[#1e4d32] w-full text-white mb-4 px-5 py-2">
                Recent Posts
              </h3>
              <ul className="space-y-2">
                {posts.map((post, index) => (
                  <li key={index}>
                    <a
                      href={post.path}
                      className={`block px-3 font-semibold rounded transition ${
                        location.pathname === post.path
                          ? "bg-green-100 text-green-700 font-medium"
                          : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                      }`}
                    >
                      {post.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md  hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-md font-bold bg-[#1e4d32] w-full text-white mb-4 px-5 py-2">
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a
                      href={category.path}
                      className={`block px-3 font-semibold rounded transition ${
                        location.pathname === category.path
                          ? "bg-green-100 text-green-700 font-medium"
                          : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                      }`}
                    >
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
