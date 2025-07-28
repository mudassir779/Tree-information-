import React from 'react';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Hurricane Season Safety: Protecting Your Property Beyond Trees",
      date: "Aug 8, 2024",
      categories: ["Tree Care Services", "Uncategorized"],
      excerpt: "As the July heat sizzles in Tarpon Springs, we're reminded that hurricane season is in full swing. At Ken's Tree Service, Inc., we've already discussed tree care for storm preparedness. Still, there's more to consider when safeguarding your...",
      image: "/blog-main.jpg"
    },
    {
      id: 2,
      title: "Benefits of Live Oak Trees in Tarpon Springs, FL",
      date: "May 3, 2024",
      categories: ["Tree Care Services"],
      excerpt: "The Unmatched Beauty and Benefits of Live Oak Trees in Your Florida Landscape Spring has sprung in Tarpon Springs, and the magnificent live oak trees are stealing the show! In this blog we dive into the benefits of live oak trees in your Florida landscape. At...",
      image: "/Benefits-of-Live-Oak-Trees.jpg"
    },
    {
      id: 3,
      title: "The Benefits of Professional Tree Care: Why DIY Tree Maintenance Can Be Risky",
      date: "Mar 26, 2024",
      categories: ["Tree Care Services", "Uncategorized"],
      excerpt: "As a property owner in Tarpon Springs, you take pride in the beautiful trees that grace your landscape. While it might be tempting to tackle tree maintenance tasks on your own, there are several compelling reasons to entrust your tree care to the professionals at...",
      image: "/Tree-Trimming-Matt-2-980x735.jpg"
    },
    {
      id: 4,
      title: "Spring Is Just Around the Corner! Are Your Trees Ready?",
      date: "Feb 29, 2024",
      categories: ["Tree Care Services", "Uncategorized"],
      excerpt: "With March just around the corner, it's time to ask: Are your trees ready for Spring? At Ken's Tree Service, we're preparing for the season ahead. As temperatures rise, your property's beautiful trees are poised to spring back to life. But are...",
      image: "/shutterstock_1093891613-980x735.jpg"
    },
    {
      id: 5,
      title: "How Do You Know When It's Time to Remove a Tree?",
      date: "Jan 26, 2024",
      categories: ["Tree Care Services", "Uncategorized"],
      excerpt: "Trees are majestic giants that grace our landscapes and provide countless benefits. They offer shade, beauty, privacy, and even improve air quality. But sometimes, even the most beloved trees need to come down. How do you know when it's time to remove a tree?...",
      image: "/ken.jpg"
    },
    {
      id: 6,
      title: "What to Know When Watering a Newly Planted Tree",
      date: "Dec 17, 2023",
      categories: ["General Tree-Related Tips", "Uncategorized"],
      excerpt: "What should you know when you're watering a newly planted tree? In this post, Ken's Tree Service, your trusted tree service company in Dunedin, FL, explains more about this topic. How Long Will It Take for a New Tree to Establish Itself? If you have...",
      image: "/watering-a-newly-planted-tree-1080x600.jpg"
    },
    {
      id: 7,
      title: "Understanding the Environmental Importance of Trees",
      date: "Dec 1, 2023",
      categories: ["General Tree-Related Tips", "Uncategorized"],
      excerpt: "It's no secret the positive impact trees can have on your property. However, what you might not know is that trees also benefit the wider environment. Their role does more than just boost curb appeal and increase property value. In this article, we will take a closer...",
      image: "/importance-of-trees-1080x600.jpg"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Latest Blog Posts</h1>
      
      <div className="space-y-12">
        {blogPosts.map((post) => (
          <article key={post.id} className="border-b border-gray-200 pb-8 last:border-0 last:pb-0">
            <div className="mb-6 overflow-hidden rounded-lg">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 hover:text-green-600 transition-colors">
              {post.title}
            </h2>
            
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span>{post.date}</span>
              <span className="mx-2">|</span>
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 bg-gray-100 rounded-md text-gray-600 hover:bg-green-100 hover:text-green-700 transition-colors"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              {post.excerpt}
            </p>
            
            <button className="text-green-600 font-medium hover:text-green-800 transition-colors">
              Read More →
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blogs;