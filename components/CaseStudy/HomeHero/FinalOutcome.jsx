"use client";
import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const FinalOutcome = () => {
  const labels = [
    {
      id: 1,
      text: "Group Info",
      labelPosition: "top-[11.5%] right-[22%]",
      bigDotPosition: "top-[12.3%] right-[29%]",
      lineStart: "top-[13%] right-[29.5%]",
      lineWidth: "12%",
      direction: "right",
    },
    {
      id: 2,
      text: "Group Join Status",
      labelPosition: "top-[28.5%] left-[18%]",
      bigDotPosition: "top-[29.5%] left-[28.7%]",
      lineStart: "top-[30%] left-[30%]",
      lineWidth: "13%",
      direction: "left",
    },
    {
      id: 3,
      text: "Write Something Input Field",
      labelPosition: "top-[32.5%] right-[13%]",
      bigDotPosition: "top-[33.5%] right-[29%]",
      lineStart: "top-[34%] right-[30%]",
      lineWidth: "11%",
      direction: "right",
    },
    {
      id: 4,
      text: "Category Tag",
      labelPosition: "bottom-[34%] left-[17%]",
      bigDotPosition: "bottom-[34.5%] left-[25%]",
      lineStart: "bottom-[35%] left-[26%]",
      lineWidth: "14%",
      direction: "left",
    },
    {
      id: 5,
      text: "Research Link",
      labelPosition: "bottom-[29%] right-[19%]",
      bigDotPosition: "bottom-[29.5%] right-[28.8%]",
      lineStart: "bottom-[30.2%] right-[30%]",
      lineWidth: "23%",
      direction: "right",
    },
  ];

  const final = [
    "/home-hero/t1.png",
    "/home-hero/t2.png",
    "/home-hero/t3.png",
    "/home-hero/t4.png",
    "/home-hero/t5.png",
    "/home-hero/t6.png",
    "/home-hero/t7.png",
    "/home-hero/t8.png",
    "/home-hero/t9.png",
    "/home-hero/t10.png",
    "/home-hero/t11.png",
    "/home-hero/t12.png",
    // "/home-hero/t13.png",
    // "/home-hero/t14.png",
    // "/wing/m13.png",
    // "/bioyap/f8.png",
  ];
  return (
    <section className="w-full py-24 pb-24  relative z-50">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-[40px] font-bold mb-4"
        >
          Final <span className="dark:text-[#D9BBF9] text-[#64486D]">Outcome</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className=" max-w-5xl mx-auto mb-12 px-4 md:px-0"
        >
   HomeHero was delivered as a smooth, two-sided mobile marketplace that helped homeowners hire trusted support for everyday and care jobs. Job posting became simple, which boosted engagement and repeated usage. Providers gained much greater visibility and more opportunities through transparent bidding and subscription features. 

The verification steps, review, and structured communication solved trust issues. The admin panel enabled the internal team to manage workflow moderation and disputes without technical support.

Home Hero grew into a modern alternative to high-cost platforms and opened new income opportunities for the service providers. 

        </motion.p>
      </div>
<div  >
  <div className="flex justify-start max-w-screen-2xl mx-auto w-[80%]  mb-24 mt-36">
          {" "}
          <h1 className="bg-[#64486D] relative px-8 py-3 rounded-r-full  text-white flex items-center">
            Service Provider Interface
         <svg className="absolute -left-8" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.00692" y="1.00692" width="48.9955" height="48.9955" rx="24.4977" fill="#64486D" stroke="white" stroke-width="2.01351"/>
<path d="M32.8855 21.8394L31.4166 21.6202C31.2412 21.1817 31.1754 21.0502 31 20.6117L31.8989 19.4278C32.1401 19.0989 32.0962 18.6604 31.8331 18.3754L30.6273 17.1695C30.3203 16.8845 29.8818 16.8626 29.553 17.1038L28.3691 18.0027C27.9306 17.8273 27.799 17.7615 27.3605 17.5861L27.1413 16.1172C27.0755 15.7225 26.7467 15.4375 26.352 15.4375H24.6419C24.2473 15.4375 23.8965 15.7225 23.8526 16.1172L23.6334 17.5861C23.1949 17.7615 23.0633 17.8053 22.6249 18.0027L21.4409 17.1038C21.1121 16.8626 20.6736 16.8845 20.3886 17.1695L19.1827 18.3754C18.8977 18.6604 18.8758 19.0989 19.1169 19.4278L20.0158 20.6117C19.8404 21.0721 19.7747 21.1817 19.5993 21.6202L18.1303 21.8394C17.7357 21.9052 17.4507 22.2341 17.4507 22.6287V24.3388C17.4507 24.7335 17.7357 25.0623 18.1303 25.1281L19.5993 25.3474C19.7747 25.7858 19.8404 25.9174 20.0158 26.3559L19.1169 27.5398C18.8758 27.8467 18.9196 28.3072 19.1827 28.5702L20.3886 29.7761C20.5201 29.9076 20.6736 29.9734 20.827 29.9953L23.0195 26.312C23.1291 26.1366 23.2387 25.9832 23.3922 25.8297C22.7345 25.2377 22.3179 24.4046 22.3179 23.4619C22.3179 21.7079 23.743 20.2828 25.497 20.2828C27.2509 20.2828 28.676 21.7079 28.676 23.4619C28.676 24.4046 28.2594 25.2597 27.6017 25.8297C27.7333 25.9832 27.8648 26.1366 27.9744 26.312L30.1669 29.9953C30.3203 29.9734 30.4738 29.9076 30.6054 29.7761L31.8112 28.5702C32.0962 28.2852 32.1181 27.8467 31.877 27.5398L30.9781 26.334C31.1535 25.8955 31.2192 25.7639 31.3946 25.3254L32.8636 25.1062C33.2582 25.0404 33.5432 24.7115 33.5432 24.3169V22.6068C33.5652 22.2341 33.2801 21.9052 32.8855 21.8394Z" fill="white"/>
<path d="M26.6374 27.145C26.3962 26.7285 25.9577 26.4873 25.4973 26.4873C25.0369 26.4873 24.5984 26.7285 24.3572 27.145L20.1258 34.2266C19.8846 34.6432 19.8627 35.1475 20.1039 35.564C20.3451 35.9806 20.7835 36.2437 21.2659 36.2437H29.7287C30.2111 36.2437 30.6495 35.9806 30.8907 35.564C31.1319 35.1475 31.1319 34.6432 30.8688 34.2266L26.6374 27.145ZM24.8396 29.2936C24.8396 28.9209 25.1465 28.6359 25.4973 28.6359C25.8481 28.6359 26.155 28.9209 26.155 29.2936V32.0342C26.155 32.385 25.8481 32.6919 25.4973 32.6919C25.1246 32.6919 24.8396 32.385 24.8396 32.0342V29.2936ZM25.4973 34.9721C25.0588 34.9721 24.6861 34.6213 24.6861 34.1609C24.6861 33.7224 25.0369 33.3497 25.4973 33.3497C25.9358 33.3497 26.3085 33.7004 26.3085 34.1609C26.3085 34.6213 25.9358 34.9721 25.4973 34.9721Z" fill="white"/>
</svg>


          </h1>
        </div>
    <Marquee pauseOnHover={true} className="flex gap-0">
  {final.slice(0, 6).map((frame, index) => (
    <img
      key={index}
      src={frame}
      alt="mob"
      className="w-40 md:w-64 object-contain block"
    />
  ))}
</Marquee>
</div>
<div className="mt-16">
   <div className="flex justify-end max-w-screen-2xl mx-auto w-[80%] mt-36 mb-16">
          {" "}
          <h1 className="bg-[#64486D] relative px-8 py-3 rounded-l-full  text-white flex items-center">
            User Interface
            <svg className="absolute -right-8" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.04571" y="1.04571" width="48.0912" height="48.0912" rx="24.0456" fill="#64486D" stroke="white" stroke-width="2.09121"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.0977 15.6155L27.4384 17.073C27.8342 17.1719 28.2254 17.2974 28.6037 17.4513L29.7369 16.4738C29.8505 16.3749 30.0136 16.3557 30.1473 16.4271C31.003 16.8797 31.7917 17.4531 32.487 18.1265C32.5961 18.2327 32.6281 18.393 32.5686 18.5323C32.5686 18.5323 31.9896 19.9119 31.9878 19.9119C32.2516 20.2234 32.4916 20.555 32.7096 20.9013L34.201 20.7777C34.3522 20.763 34.4933 20.8445 34.5601 20.981C34.9852 21.8513 35.2866 22.7766 35.4524 23.7312C35.4799 23.8797 35.4103 24.0281 35.282 24.1069L34.0004 24.881C34.0307 25.2895 34.0307 25.6999 34.0004 26.1085L35.282 26.8826C35.4103 26.9614 35.4799 27.1098 35.4524 27.2582C35.2866 28.2128 34.9852 29.1381 34.5601 30.0092C34.4933 30.1447 34.3522 30.2263 34.201 30.2116L32.7096 30.0879C32.4916 30.4342 32.2516 30.7658 31.9896 31.0773L32.5686 32.4579C32.6281 32.5962 32.5961 32.7565 32.487 32.8628C31.7917 33.5361 31.003 34.1096 30.1473 34.5622C30.0136 34.6336 29.8505 34.6144 29.7369 34.5154L28.6037 33.538C28.2254 33.6919 27.8342 33.8183 27.4384 33.9172L27.0977 35.3738C27.0629 35.5195 26.9419 35.6312 26.7908 35.6532C25.8335 35.7888 24.8587 35.7888 23.9015 35.6532C23.7513 35.6312 23.6294 35.5195 23.5946 35.3738L23.2538 33.9172C22.8581 33.8183 22.4669 33.6919 22.0885 33.538L20.9562 34.5154C20.8417 34.6144 20.6787 34.6336 20.5449 34.5622C19.6893 34.1096 18.9005 33.5361 18.2052 32.8628C18.0962 32.7565 18.0641 32.5962 18.1237 32.4579C18.1237 32.4579 18.7027 31.0773 18.7054 31.0773C18.4407 30.7659 18.2006 30.4342 17.9826 30.0879L16.4912 30.2116C16.3401 30.2263 16.199 30.1447 16.133 30.0092C15.707 29.138 15.4056 28.2127 15.2398 27.2582C15.2124 27.1098 15.282 26.9614 15.4102 26.8826L16.6918 26.1085C16.6616 25.6999 16.6616 25.2895 16.6918 24.881L15.4102 24.1069C15.282 24.0281 15.2124 23.8797 15.2398 23.7312C15.4056 22.7767 15.707 21.8514 16.133 20.981C16.199 20.8445 16.3401 20.763 16.4912 20.7777L17.9826 20.9013C18.2006 20.555 18.4407 20.2234 18.7027 19.9119L18.1237 18.5323C18.0641 18.3931 18.0962 18.2328 18.2052 18.1265C18.9005 17.4531 19.6893 16.8797 20.5449 16.4271C20.6787 16.3557 20.8417 16.3749 20.9562 16.4738L22.0885 17.4513C22.4669 17.2974 22.858 17.1719 23.2538 17.073L23.5946 15.6155C23.6294 15.4698 23.7512 15.358 23.9015 15.3361C24.8588 15.2005 25.8335 15.2005 26.7908 15.3361C26.9419 15.358 27.0629 15.4698 27.0977 15.6155ZM25.3461 19.6326C22.1104 19.6326 19.484 22.2589 19.484 25.4946C19.484 28.7303 22.1104 31.3567 25.3461 31.3567C28.5818 31.3567 31.2081 28.7303 31.2081 25.4946C31.2081 22.2589 28.5818 19.6326 25.3461 19.6326ZM23.8446 26.4318L28.3985 22.292C28.5323 22.1683 28.7393 22.1656 28.8786 22.2819C29.0196 22.4001 29.0517 22.6035 28.9546 22.7565L25.0768 28.9621C24.9055 29.2342 24.6261 29.4201 24.3073 29.4669C23.9903 29.5145 23.6669 29.4201 23.4242 29.2094L21.3218 27.3846C21.0873 27.1812 20.948 26.8871 20.9434 26.5784L20.9407 26.5729C20.9333 26.1652 21.1541 25.7842 21.5123 25.5863C21.8714 25.3912 22.3111 25.4086 22.6501 25.6358L23.8446 26.4318Z" fill="white"/>
</svg>

          </h1>
        </div>
<Marquee pauseOnHover={true} direction="right" className="flex gap-0">
  {final.slice(6).map((frame, index) => (
    <img
      key={index}
      src={frame}
      alt="mob"
      className="w-40 md:w-64 object-contain block"
    />
  ))}
</Marquee>
</div>

    </section>
  );
};

export default FinalOutcome;
