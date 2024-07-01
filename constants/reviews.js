const reviews = [
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "reviewBody":
      "Dignite Studios Hailey was very helpful getting my startup going, and especially patient with any difficulties I’ve presented in the process. The process was also clearly stated to me, and any questions I’ve had were answered. She even gave me some ideas for my app that were creative and showed she cared for the idea to be at its best.",
    "itemReviewed": {
      "@type": "Organization",
      "name": "Dignite Studios",
      "image": "https://www.dignitestudios.com/",
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4",
    },
    "author": {
      "@type": "Person",
      "name": "Chase Lassiter",
      "jobtitle":"CEO, @Vayda"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dignite Studios",
    },
  },
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "reviewBody":
      "Dignite Studios were quick to respond to my inquiry regarding development of my app. Shane the Senior Business Consultant was amazing. He explained things in a language I could understand. They are super friendly and professional.",
    "itemReviewed": {
      "@type": "Organization",
      "name": "Dignite Studios",
      "image": "https://www.dignitestudios.com/",
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4",
    },
    "author": {
      "@type": "Person",
      "name": "Shantwan Humphrey",
      "jobtitle":"CEO, @Fareshare"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dignite Studios",
    },
  },
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "reviewBody":
      "Shane is an absolute pleasure to work with. Communication is on point. Him and his team always exceed my expectations!",
    "itemReviewed": {
      "@type": "Organization",
      "name": "Dignite Studios",
      "image": "https://www.dignitestudios.com/",
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4",
    },
    "author": {
      "@type": "Person",
      "name": "Joshua Abely",
      "jobtitle":"CEO, @Maidsimpl"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dignite Studios",
    },
  },
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "reviewBody":
      "The experience has been straightforward and seamless. I thank everyone for their knowledge and expertise in getting this project done. I will be forever grateful for the work that has been put in, and I thank everyone for everything and all of their hard work!",
    "itemReviewed": {
      "@type": "Organization",
      "name": "Dignite Studios",
      "image": "https://www.dignitestudios.com/",
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4",
    },
    "author": {
      "@type": "Person",
      "name": "Laurent Carter",
      "jobtitle":"CEO, @Carterboating"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dignite Studios",
    },
  },
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "reviewBody":
      "Dignite Studios have gone above and beyond my expectations. Marvin has clearly done his research into our special niche and thought of great value to add that we didn’t even think of. This is a dream come true experience and I am so thankful. I am looking forward to a very long term relationship with Dignite Studios.",
    "itemReviewed": {
      "@type": "Organization",
      "name": "Dignite Studios",
      "image": "https://www.dignitestudios.com/",
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4",
    },
    "author": {
      "@type": "Person",
      "name": "Nicole Adcock",
      "jobtitle":"CEO, @Divespace"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dignite Studios",
    },
  },
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "reviewBody":
      "I had a wonderful experience working with Liam and Maya. They were thought provoking and professional. They thought through my project in a depth no other company has. Their outstanding collaborative efforts were refreshing. I appreciate all the hard work they brought.",
    "itemReviewed": {
      "@type": "Organization",
      "name": "Dignite Studios",
      "image": "https://www.dignitestudios.com/",
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4",
    },
    "author": {
      "@type": "Person",
      "name": "Mathew",
      "jobtitle":"CEO, @Rentalproperties"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dignite Studios",
    },
  },
  {
    "@context": "https://schema.org/",
    "@type": "Review",
    "reviewBody":
      "The team has been great. I feel confident in each step that I make, including, I appreciate honest feedback and the research that my project manager Marvin does. I also love how often they gave me updates on their progress. Thank you to the whole team for making this app come to life.",
    "itemReviewed": {
      "@type": "Organization",
      "name": "Dignite Studios",
      "image": "https://www.dignitestudios.com/",
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4",
    },
    "author": {
      "@type": "Person",
      "name": "Petula Bedeau",
      "jobtitle":"CEO, @Loadclear"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dignite Studios",
    },
  },

  
  // {
  //   review:
  //     "Dignite Studios were quick to respond to my inquiry regarding development of my app. Shane the Senior Business Consultant was amazing. He explained things in a language I could understand. They are super friendly and professional.",
  //   image: "/testimonial-8.webp",
  //   author: "Shantwan Humphrey",
  //   designation: "CEO, @Fareshare",
  // },
  // {
  //   review:
  //     "Shane is an absolute pleasure to work with. Communication is on point. Him and his team always exceed my expectations!",
  //   image: "/testimonial-1.webp",
  //   author: "Joshua Abely",
  //   designation: "CEO, @Maidsimpl",
  // },
  // {
  //   review:
  //     "The experience has been straightforward and seamless. I thank everyone for their knowledge and expertise in getting this project done. I will be forever grateful for the work that has been put in, and I thank everyone for everything and all of their hard work!",
  //   image: "/testimonial-6.webp",
  //   author: "Laurent Carter",
  //   designation: "CEO, @Carterboating",
  // },
  // {
  //   review:
  //     "Dignite Studios have gone above and beyond my expectations. Marvin has clearly done his research into our special niche and thought of great value to add that we didn’t even think of. This is a dream come true experience and I am so thankful. I am looking forward to a very long term relationship with Dignite Studios.",
  //   image: "/testimonial-4.webp",
  //   author: "Nicole Adcock",
  //   designation: "Founder, @Divespace",
  // },
  // {
  //   review:
  //     "I had a wonderful experience working with Liam and Maya. They were thought provoking and professional. They thought through my project in a depth no other company has. Their outstanding collaborative efforts were refreshing. I appreciate all the hard work they brought.",
  //   image: "/testimonial-5.webp",
  //   author: "Mathew",
  //   designation: "CEO, @Rentalproperties",
  // },
  // {
  //   review:
  //     "The team has been great. I feel confident in each step that I make, including, I appreciate honest feedback and the research that my project manager Marvin does. I also love how often they gave me updates on their progress. Thank you to the whole team for making this app come to life.",
  //   image: "/testimonial-9.webp",
  //   author: "Petula Bedeau",
  //   designation: "CEO, @Loadclear",
  // },
  // {
  //   review:
  //     "Dignite Studios Hailey was very helpful getting my startup going, and especially patient with any difficulties I’ve presented in the process. The process was also clearly stated to me, and any questions I’ve had were answered. She even gave me some ideas for my app that were creative and showed she cared for the idea to be at its best. ",
  //   image: "/testimonial-7.webp",
  //   author: "Chase Lassiter",
  //   designation: "CEO, @Vayda",
  // },
];

export const val = reviews // JSON.parse(reviews)