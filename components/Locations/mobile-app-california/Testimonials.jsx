import React from 'react'
const test = [
    {
    name:"Los Angeles",
    desgination:"– SaaS Founder",
    review:"“Dignite Studios helped us launch 3 months faster than expected. Their communication easily makes them the top mobile app developers California has to offer.” "
},
    {
    name:"San Diego",
    desgination:"– E-Commerce CEO",
    review:"“Our ROI jumped significantly within the first quarter. The team understood our goals instantly.” "
},
    {
    name:"San Francisco",
    desgination:"– Healthcare Startup",
    review:"“Professional and incredibly efficient. Their ability to deliver a smooth user experience was impressive.” "
},
    {
    name:"Silicon Valley",
    desgination:"– Fintech Product Lead",
    review:"“ If you need the best mobile app developers in California, this is where you go.” "
},
]
const Testimonials = () => {
  return (
     <div className="w-full grid grid-cols-1  justify-start items-start md:py-40 ">
         <div className="flex relative z-20  w-[90%] md:w-[75%] flex-col text-center mx-auto items-center">
           <h1 className="text-5xl leading-10 tracking-tighter md:text-7xl font-bold ">
             About{" "}
             <span className="text-[#F15C20]"> Dignite Studios</span>{" "}
           </h1>
           <p className="text-lg my-6 dark:text-white text-[#0C0C0C]">
             Looking for a top mobile app company in California? That's us. Dignite Studios is a team of 200+ expert mobile app developers who work with startups and growing businesses and help them turn their ideas into scalable, high-performing mobile apps. Including strategy, UI/UX design with agile development and deployment, we make sure to build apps that are reliable, engaging, and built to grow with your business. With 5+ years of experience and an expert team of designers, project managers, and app developers California, we build apps exactly the way you envisioned. 
           </p>
         </div>
     
         <div className='flex gap-8 py-12 justify-center items-center'>
{test.map((item, index) => (
  <div
    key={index}
    className="relative w-[258px] h-[295px] group mb-4 rounded-[30px] shadow-2xl shadow-[#F15C2026]  dark:bg-gray-800"
  >
    {/* Orange rotating background */}
    <div className="absolute top-0 left-0 w-full h-full bg-[#F15C20] rounded-[30px] transition-all ease-linear duration-300 group-hover:rotate-12 z-0" />
    <div className="absolute top-0 left-0  w-[258px] h-[295px] group mb-4 rounded-[30px] bg-white shadow-md z-10" />

    {/* Content wrapper */}
    <div className="relative z-10 flex flex-col items-center justify-start h-full p-6">
      {/* Quote Image */}
      <img
        src="/location/mobile-california/quote.png"
        alt="quote"
        className="absolute -top-8 left-1/2 -translate-x-1/2 z-20"
      />
      

      {/* Text content */}
      <div className="my-10  text-center">
        <img
        src="/location/mobile-california/rev.png"
        alt="quote"
        className="mx-auto "
      />
        <h3 className=" text-base font-bold">{item.name}</h3>
        <p className=" text-xs">{item.desgination}</p>
      </div>

      <p className="text-xs  mt-2 text-center">
        "{item.review}"
      </p>
    </div>
  </div>
))}


       </div>
       </div>
  )
}

export default Testimonials