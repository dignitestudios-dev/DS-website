"use client"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import {
  FaWordpress,
  FaMagento,
  FaShoppingCart,
  FaStore,
  FaGlobe,
} from "react-icons/fa"
import { MdArrowForward, MdArrowOutward } from "react-icons/md"

const cards = [
  {
    title: "WooCommerce to Shopify",
    icon: "/ecommerce/shopify-migrate/1.webp",
    text: "We move your WooCommerce store to Shopify while keeping products, customers and orders safe. Our Shopify Store Migration Services also ensure the smooth transfer without any downtime.  ",
  },
  {
    title: "Magento to Shopify",
    icon:"/ecommerce/shopify-migrate/2.webp",
    text: "We migrate Magento stores through the full data protection. Our shopify store migration app  also handles complex data and custom features quite carefully.",
  },
  {
    title: "BigCommerce to Shopify",
    icon: "/ecommerce/shopify-migrate/3.webp",
    text: "We transfer the BigCommerce stores to Shopify securely. Our migration company ensures the product data and order history remain accurate. ",
  },
  {
    title: "Wix to Shopify",
    icon: "/ecommerce/shopify-migrate/4.webp",
    text: "We upgrade Wix stores to shopify for better scalability. Our shopify migration agency ensures the correct product and the content transfer. ",
  },
  {
    title: "Squarespace to Shopify",
    icon: "/ecommerce/shopify-migrate/5.webp",
    text: "We migration squarespace stores while maintaining design, SEO structure and content. This keeps your store stable and also functional. ",
  },
  {
    title: "Custom Platform to Shopify",
    icon: "/ecommerce/shopify-migrate/6.webp",
    text: "We handle the custom platform migrations with care. Our shopify migration experts ensure all the integrations and features are transferred quite safely. ",
  },
]

const MigrationServices = () => {
  return (
    <section className="w-full flex justify-center px-4 md:px-8 lg:px-16 py-16 bg-[#fff]">
      <div className="w-full max-w-[1200px] flex flex-col items-center gap-12">
        
        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="font-bold text-4xl md:text-7xl  leading-tight tracking-tight">
            Our Shopify Migration <span className="text-[#F15C20]" >Services</span>
          </h2>
          <p className="text-[#0C0C0C] font-light text-base md:text-lg leading-relaxed max-w-[846px]">
          Our Shopify Migration Services provide secure and accurate store transfers from any platform. As the trusted Shopify migration agency we handle the products. Orders, SEO and apps carefully. We ensure that every detail is also tested so the store works quite perfectly after migration. 
          </p>
        </div>

        {/* Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <article
              key={idx}
              className="relative group hover:border-orange-600  ease-linear bg-white border border-transparent rounded-[45px] shadow-[0_4px_30px_rgba(241,92,32,0.15)] p-6 flex flex-col items-center text-center gap-4 hover:shadow-[0_8px_40px_rgba(241,92,32,0.5)] transition-shadow duration-300"
            >
              <div className="flex ">
              <div className="w-20 h-20 rounded-full bg-[#F6F6F6] flex items-center justify-center">
                <Image src={card.icon} alt={card.title} width={50} height={50} />
              </div>
              <div className="w-20 h-20 -ml-2 rounded-full bg-[#F6F6F6] flex items-center justify-center">
                <Image src={"/ecommerce/shopify-migrate/shop.webp"} alt={card.title} width={40} height={40} />
              </div>
</div>
              <h3 className="font-semibold text-lg text-[#0C0C0C]">
                {card.title}
              </h3>

              <p className="text-sm text-[#0C0C0C] leading-6">
                {card.text}
              </p>
            </article>
          ))}
        </div>

        {/* Button */}
              <Link
          href="/contact-us"
          className="flex items-center group justify-center "
        >
          <button className="bg-[#F15C20] border border-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
           Explore Our Shopify Migration Services
          </button>
          <button className="bg-[#F15C20] border border-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </Link>

      </div>
    </section>
  )
}

export default MigrationServices