import React from "react";
import { GoClock } from "react-icons/go";

const insights = [
  {
    id: 1,
    title: "Boost Your Brand With Effective Social Media Campaigns",
    description:
      "In today's digital landscape, a strong social media presence is crucial for brand growth. This blog explores strategies for creating impactful campaigns, increasing engagement, and turning followers into loyal customers.",
    date: "July 29, 2025",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "How AI Is Revolutionizing Web Design Strategies",
    date: "July 29, 2025",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Essential SEO Techniques Every Agency Should Implement",
    date: "July 29, 2025",
    image:
      "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Top Trends Shaping Digital Marketing in 2026 Latest",
    date: "July 29, 2025",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Creating Engaging Content That Converts Visitors Into Customers",
    date: "July 29, 2025",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
  },
];

const ProductDesign = () => {
  return (
    <section

      className="py-36 w-full bg-[#0A0A0A] px-6 md:px-12 lg:px-24  [clip-path:ellipse(350%_100%_at_50%_100%)]
    sm:[clip-path:ellipse(350%_100%_at_50%_100%)]
    md:[clip-path:ellipse(200%_100%_at_50%_100%)]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Insights And Startup <br />
            <span className="text-[#F15C20]">Stories</span>
          </h2>
          <p className="font-extralight max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
            Our mobile application design and development reaches startups
            worldwide. So, we’re providing all the necessary information and
            insights about apps to create measurable impact across every market
            we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
  
          <div className="lg:col-span-5 h-full">
            <BlogCard post={insights[0]} isFeatured />
          </div>

          <div className="lg:col-span-7 md:grid hidden grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {insights.slice(1).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BlogCard = ({ post, isFeatured }) => {
  return (
    <div
      className={`flex flex-col group cursor-pointer ${isFeatured ? "h-full" : ""}`}
    >
      <div
        className={`relative overflow-hidden rounded-3xl ${isFeatured ? "h-[350px] lg:h-[450px]" : "aspect-[4/3]"}`}
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {isFeatured && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
        )}
      </div>

      <div
        className={`flex flex-col flex-grow ${isFeatured ? "mt-8" : "mt-5"}`}
      >
        <h3
          className={`${isFeatured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"} font-bold text-white line-clamp-2 leading-snug group-hover:text-[#F15C20] transition-colors duration-300`}
        >
          {post.title}
        </h3>

        {isFeatured && post.description && (
          <p className="text-gray-400 mt-4 line-clamp-3 font-light text-base leading-relaxed">
            {post.description}
          </p>
        )}

        <div
          className={`flex items-center gap-2 text-gray-500 mt-auto ${isFeatured ? "pt-8" : "pt-4"}`}
        >
          <GoClock className="text-[#F15C20]" />
          <span className="text-sm font-medium">{post.date}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDesign;
