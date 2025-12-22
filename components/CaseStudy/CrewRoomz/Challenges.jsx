"use client"
import React from "react"
import { motion } from "framer-motion"

const float = (delay = 0) => ({
  animate: { y: [0, -10, 0] },
  transition: {
    duration: 4,
    delay,
    repeat: Infinity,
    ease: "easeInOut",
  },
})

const Challenges = () => {
  return (
    <section className="relative w-full py-28 overflow-hidden">
   {/* <img src="/crew/el.png" alt="ellipse" className="absolute top-10 left-0 w-screen h-[100%]" /> */}
      {/* Heading */}
      <div className="relative z-10 max-w-7xl mx-auto text-center mb-24 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Challenges & <span className="text-[#36C0EF]">Solutions</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-gray-600 max-w-5xl mx-auto"
        >
          There were multiple challenges when the developers started building
          CrewRoomz. These included trust, verification, usability, and content
          moderation across a professional marketplace ecosystem.
        </motion.p>
      </div>

      {/* Main Layout */}
      <div className="relative z-10 w-full min-h-[160vh] md:flex hidden items-center">
        {/* Problems Panel (LEFT SIDE) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative ml-8 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-[#6EBFF439] border-t-2 border-r-[#83cbf2] border-r-2 w-[420px] border-t-[#83cbf2] md:ml-20 h-[480px] bg-white rounded-[60px]  py-16 px-8 z-20"
        >
          <h3 className="text-3xl font-semibold justify-between pb-8 flex items-center gap-2">
            Problems
            <svg width="32" height="48" viewBox="0 0 32 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.85127 42.5723C6.59979 42.5723 6.39403 42.364 6.39403 42.1095V40.7212H21.0257V42.1095C21.0257 42.364 20.8199 42.5723 20.5684 42.5723H6.85127ZM6.39403 39.7958V37.9448H21.0257V39.7958H6.39403ZM6.39403 37.0193V35.631C6.39403 35.3765 6.59979 35.1683 6.85127 35.1683H20.5687C20.8202 35.1683 21.026 35.3765 21.026 35.631V37.0193H6.39403ZM20.0863 43.498C19.86 45.5804 18.1156 47.2 15.9963 47.2H11.4239C9.30462 47.2 7.56023 45.5804 7.33391 43.498H20.0863ZM0 18.5095C0.242335 11.0618 6.29161 5.09005 13.7104 5.09005V10.643H14.6249C14.9884 10.643 15.3382 10.7888 15.5942 11.0502C15.8526 11.3093 15.9966 11.6634 15.9966 12.0312V13.8822C15.9966 14.2501 15.8526 14.6041 15.5942 14.8632C15.3382 15.1246 14.9884 15.2704 14.6249 15.2704H13.7104V18.5096H9.59532V17.5841C9.59532 17.2163 9.45129 16.8622 9.19295 16.6031C8.93689 16.3417 8.58708 16.1959 8.22363 16.1959H6.39467C6.03117 16.1959 5.68135 16.3417 5.42536 16.6031C5.16701 16.8623 5.02299 17.2163 5.02299 17.5841V18.5096L0 18.5095ZM14.6246 19.435H18.2825C18.534 19.435 18.7398 19.6432 18.7398 19.8977V21.286C18.7398 21.4086 18.7878 21.5266 18.8747 21.6122C18.9592 21.7002 19.0758 21.7488 19.197 21.7488H21.026C21.1471 21.7488 21.2637 21.7002 21.3483 21.6122C21.4352 21.5266 21.4832 21.4086 21.4832 21.286V19.8977C21.4832 19.6432 21.689 19.435 21.9404 19.435H27.4205V19.4512C27.2627 24.1642 24.7776 28.285 21.0926 30.6726L21.088 30.6749C20.9714 30.7489 20.8937 30.8739 20.8777 31.0127V31.015C20.7771 31.9081 20.5645 33.8308 20.5645 33.8308C20.5393 34.0645 20.3427 34.2426 20.1095 34.2426H14.6226V27.3013C14.6226 27.0468 14.4169 26.8386 14.1654 26.8386H12.7937C12.6725 26.8386 12.5559 26.79 12.4713 26.7021C12.3844 26.6165 12.3364 26.4985 12.3364 26.3758V24.5249C12.3364 24.4022 12.3844 24.2842 12.4713 24.1986C12.5559 24.1107 12.6725 24.0621 12.7937 24.0621H14.1654C14.4169 24.0621 14.6226 23.8539 14.6226 23.5994V19.4347L14.6246 19.435ZM13.7101 19.435V23.137H12.7957C12.4322 23.137 12.0823 23.2827 11.8264 23.5442C11.568 23.8033 11.424 24.1573 11.424 24.5252V26.3761C11.424 26.744 11.568 27.0981 11.8264 27.3571C12.0824 27.6186 12.4322 27.7643 12.7957 27.7643H13.7101V34.2431H7.30851C7.07531 34.2431 6.8787 34.0649 6.85356 33.8312L6.54492 31.0131C6.52892 30.872 6.45119 30.747 6.3346 30.673L6.33231 30.6707C2.64695 28.2853 0.161851 24.1647 0.00441471 19.4517V19.4355H5.48444C5.73592 19.4355 5.94167 19.2272 5.94167 18.9727V17.5845C5.94167 17.4618 5.98968 17.3438 6.07656 17.2582C6.16115 17.1703 6.27774 17.1217 6.39891 17.1217H8.22787C8.34904 17.1217 8.46563 17.1703 8.55022 17.2582C8.6371 17.3438 8.68511 17.4618 8.68511 17.5845V18.9727C8.68511 19.2272 8.89086 19.4355 9.14235 19.4355H13.7147L13.7101 19.435ZM18.2825 0C25.8524 0 32 6.22166 32 13.8826C32 14.0423 31.9977 14.2019 31.9909 14.3616C31.9817 14.6115 31.7805 14.8081 31.5336 14.8081H26.9681V15.7336C26.9681 16.1015 26.824 16.4555 26.5657 16.7146C26.3096 16.9761 25.9598 17.1218 25.5964 17.1218H23.7674C23.4039 17.1218 23.0541 16.9761 22.7981 16.7146C22.5398 16.4555 22.3957 16.1015 22.3957 15.7336V14.8081H18.2806C18.0291 14.8081 17.8234 14.5999 17.8234 14.3454V9.71794C17.8234 9.46343 18.0291 9.2552 18.2806 9.2552H19.6524C19.7735 9.2552 19.8901 9.20661 19.9747 9.11869C20.0616 9.03308 20.1096 8.91508 20.1096 8.79245V6.94147C20.1096 6.81885 20.0616 6.70085 19.9747 6.61524C19.8901 6.52732 19.7735 6.47873 19.6524 6.47873H18.2806C18.0291 6.47873 17.8234 6.27049 17.8234 6.01598V0.463041C17.8234 0.20853 18.0291 0.000295994 18.2806 0.000295994L18.2825 0Z" fill="#FB3747"/>
</svg>

          </h3>
          <div className="w-full h-px font-medium bg-[#83cbf2]" />

       <ul className="space-y-4 py-8 text-sm">
  <li className="flex items-center gap-2">
    <span className="mt-1">•</span>
    <span className="leading-[14px]">Irregular and unpredictable operational schedules were encountered</span>
  </li>
  <li className="flex items-center gap-2">
    <span className="mt-1">•</span>
    <span className="leading-[14px]">Difficulty in locating dependable, last-minute accommodations was faced</span>
  </li>
  <li className="flex items-center gap-2">
    <span className="mt-1">•</span>
    <span className="leading-[14px]">Platforms designed exclusively for aviation professionals were found to be limited</span>
  </li>
  <li className="flex items-center gap-2">
    <span className="mt-1">•</span>
    <span className="leading-[14px]">Affordability and reliability in lodging options were demanded simultaneously</span>
  </li>
  <li className="flex items-center gap-2">
    <span className="mt-1">•</span>
    <span className="leading-[14px]">Ensuring global coverage while sustaining safety and quality was required</span>
  </li>
</ul>

        </motion.div>

        {/* Circle Outline - positioned to overlap with Problems card */}
        <div className="absolute z-20 -left-40 top-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border-4 border-sky-200" 
             />

        {/* Solutions Orbit */}
        <div className="absolute top-1/2 -translate-y-1/2 w-[900px] h-[1000px]" 
             style={{ left: '250px' }}>
          
          {/* Solution 1 - Top */}
          <motion.div 
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0 }}
            className="absolute -top-28 left-[30%] -translate-x-1/2 -translate-y-1/2"
          >
            <motion.div {...float(0)}>
              <Solution title="Solution 01" text="Instant booking functionalities with real-time availability were implemented." />
            </motion.div>
          </motion.div>

          {/* Solution 2 - Top Right */}
          <motion.div 
            initial={{ opacity: 0, scale: 0, x: -100, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0 }}
            className="absolute right-[25%] top-[10%]"
          >
            <motion.div {...float(0)}>
              <Solution title="Solution 02" text="A trusted network comprising verified listings and administrative oversight was established." />
            </motion.div>
          </motion.div>

          {/* Solution 3 - Bottom Right */}
          <motion.div 
            initial={{ opacity: 0, scale: 0, x: -100, y: -100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0 }}
            className="absolute right-[15%] bottom-[42%]"
          >
            <motion.div {...float(0)}>
              <Solution
                title="Solution 03"
                text="User experiences tailored to crew-specific workflows were designed."
              />
            </motion.div>
          </motion.div>

          {/* Solution 4 - Bottom */}
          <motion.div 
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0 }}
            className="absolute bottom-36 left-[55%] -translate-x-1/2 translate-y-1/2"
          >
            <motion.div {...float(0)}>
              <Solution title="Solution 04" text="Flexible pricing structures and bed-space options were provisioned for convenience." />
            </motion.div>
          </motion.div>

          {/* Solution 5 - Top Left */}
          <motion.div 
           initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0 }}
            className="absolute -bottom-20 left-[35%] -translate-x-1/2 translate-y-1/2"
          >
            <motion.div {...float(0)}>
              <Solution
                title="Solution 05"
                text="Scalable Web Application Development Services were deployed to enable worldwide access."
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

         <div className="md:hidden relative z-10 w-full flex flex-col items-center space-y-12 px-4">
        {/* Problems first */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-[#6EBFF439] border-t-2 border-r-[#83cbf2] border-r-2 w-full border-t-[#83cbf2]  h-[480px] bg-white rounded-[60px]  py-16 px-8 z-20"
        >
            <h3 className="text-3xl font-semibold justify-between pb-8 flex items-center gap-2">
            Problems
            <svg width="32" height="48" viewBox="0 0 32 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.85127 42.5723C6.59979 42.5723 6.39403 42.364 6.39403 42.1095V40.7212H21.0257V42.1095C21.0257 42.364 20.8199 42.5723 20.5684 42.5723H6.85127ZM6.39403 39.7958V37.9448H21.0257V39.7958H6.39403ZM6.39403 37.0193V35.631C6.39403 35.3765 6.59979 35.1683 6.85127 35.1683H20.5687C20.8202 35.1683 21.026 35.3765 21.026 35.631V37.0193H6.39403ZM20.0863 43.498C19.86 45.5804 18.1156 47.2 15.9963 47.2H11.4239C9.30462 47.2 7.56023 45.5804 7.33391 43.498H20.0863ZM0 18.5095C0.242335 11.0618 6.29161 5.09005 13.7104 5.09005V10.643H14.6249C14.9884 10.643 15.3382 10.7888 15.5942 11.0502C15.8526 11.3093 15.9966 11.6634 15.9966 12.0312V13.8822C15.9966 14.2501 15.8526 14.6041 15.5942 14.8632C15.3382 15.1246 14.9884 15.2704 14.6249 15.2704H13.7104V18.5096H9.59532V17.5841C9.59532 17.2163 9.45129 16.8622 9.19295 16.6031C8.93689 16.3417 8.58708 16.1959 8.22363 16.1959H6.39467C6.03117 16.1959 5.68135 16.3417 5.42536 16.6031C5.16701 16.8623 5.02299 17.2163 5.02299 17.5841V18.5096L0 18.5095ZM14.6246 19.435H18.2825C18.534 19.435 18.7398 19.6432 18.7398 19.8977V21.286C18.7398 21.4086 18.7878 21.5266 18.8747 21.6122C18.9592 21.7002 19.0758 21.7488 19.197 21.7488H21.026C21.1471 21.7488 21.2637 21.7002 21.3483 21.6122C21.4352 21.5266 21.4832 21.4086 21.4832 21.286V19.8977C21.4832 19.6432 21.689 19.435 21.9404 19.435H27.4205V19.4512C27.2627 24.1642 24.7776 28.285 21.0926 30.6726L21.088 30.6749C20.9714 30.7489 20.8937 30.8739 20.8777 31.0127V31.015C20.7771 31.9081 20.5645 33.8308 20.5645 33.8308C20.5393 34.0645 20.3427 34.2426 20.1095 34.2426H14.6226V27.3013C14.6226 27.0468 14.4169 26.8386 14.1654 26.8386H12.7937C12.6725 26.8386 12.5559 26.79 12.4713 26.7021C12.3844 26.6165 12.3364 26.4985 12.3364 26.3758V24.5249C12.3364 24.4022 12.3844 24.2842 12.4713 24.1986C12.5559 24.1107 12.6725 24.0621 12.7937 24.0621H14.1654C14.4169 24.0621 14.6226 23.8539 14.6226 23.5994V19.4347L14.6246 19.435ZM13.7101 19.435V23.137H12.7957C12.4322 23.137 12.0823 23.2827 11.8264 23.5442C11.568 23.8033 11.424 24.1573 11.424 24.5252V26.3761C11.424 26.744 11.568 27.0981 11.8264 27.3571C12.0824 27.6186 12.4322 27.7643 12.7957 27.7643H13.7101V34.2431H7.30851C7.07531 34.2431 6.8787 34.0649 6.85356 33.8312L6.54492 31.0131C6.52892 30.872 6.45119 30.747 6.3346 30.673L6.33231 30.6707C2.64695 28.2853 0.161851 24.1647 0.00441471 19.4517V19.4355H5.48444C5.73592 19.4355 5.94167 19.2272 5.94167 18.9727V17.5845C5.94167 17.4618 5.98968 17.3438 6.07656 17.2582C6.16115 17.1703 6.27774 17.1217 6.39891 17.1217H8.22787C8.34904 17.1217 8.46563 17.1703 8.55022 17.2582C8.6371 17.3438 8.68511 17.4618 8.68511 17.5845V18.9727C8.68511 19.2272 8.89086 19.4355 9.14235 19.4355H13.7147L13.7101 19.435ZM18.2825 0C25.8524 0 32 6.22166 32 13.8826C32 14.0423 31.9977 14.2019 31.9909 14.3616C31.9817 14.6115 31.7805 14.8081 31.5336 14.8081H26.9681V15.7336C26.9681 16.1015 26.824 16.4555 26.5657 16.7146C26.3096 16.9761 25.9598 17.1218 25.5964 17.1218H23.7674C23.4039 17.1218 23.0541 16.9761 22.7981 16.7146C22.5398 16.4555 22.3957 16.1015 22.3957 15.7336V14.8081H18.2806C18.0291 14.8081 17.8234 14.5999 17.8234 14.3454V9.71794C17.8234 9.46343 18.0291 9.2552 18.2806 9.2552H19.6524C19.7735 9.2552 19.8901 9.20661 19.9747 9.11869C20.0616 9.03308 20.1096 8.91508 20.1096 8.79245V6.94147C20.1096 6.81885 20.0616 6.70085 19.9747 6.61524C19.8901 6.52732 19.7735 6.47873 19.6524 6.47873H18.2806C18.0291 6.47873 17.8234 6.27049 17.8234 6.01598V0.463041C17.8234 0.20853 18.0291 0.000295994 18.2806 0.000295994L18.2825 0Z" fill="#FB3747"/>
</svg>

          </h3>
           <ul className="space-y-4 py-8 text-sm">
  <li className="flex items-center gap-2">
    <span className="mt-1">•</span>
    <span className="leading-[14px]">Irregular and unpredictable operational schedules were encountered</span>
  </li>
  <li className="flex items-center gap-2">
    <span className="mt-1">•</span>
    <span className="leading-[14px]">Difficulty in locating dependable, last-minute accommodations was faced</span>
  </li>
  <li className="flex items-center gap-2">
    <span className="mt-1">•</span>
    <span className="leading-[14px]">Platforms designed exclusively for aviation professionals were found to be limited</span>
  </li>
  <li className="flex items-center gap-2">
    <span className="mt-1">•</span>
    <span className="leading-[14px]">Affordability and reliability in lodging options were demanded simultaneously</span>
  </li>
  <li className="flex items-center gap-2">
    <span className="mt-1">•</span>
    <span className="leading-[14px]">Ensuring global coverage while sustaining safety and quality was required</span>
  </li>
</ul>
        </motion.div>

        {/* Solutions stacked below */}
        <div className="w-full flex flex-col items-center space-y-6">
          <Solution title="Solution 01" text="Instant booking functionalities with real-time availability were implemented." />
          <Solution title="Solution 02" text="A trusted network comprising verified listings and administrative oversight was established." />
          <Solution title="Solution 03" text="User experiences tailored to crew-specific workflows were designed." />
          <Solution title="Solution 04" text="Flexible pricing structures and bed-space options were provisioned for convenience." />
          <Solution title="Solution 05" text="Scalable Web Application Development Services were deployed to enable worldwide access." />
        </div>
      </div>
    </section>
  )
}

const Solution = ({ title, text }) => (
  <div className="w-[220px] border-t-2 z-[999999] border-white h-[220px] rounded-full bg-[#6dcdf2] from-[#4690D400] via-[#6EBFF439] relative to-[#6EBFF439] shadow-xl flex flex-col items-center justify-center text-center px-4">
    <div className="w-[260px] h-[260px] rounded-full z-20 absolute bg-[#6EBFF439]" />
    <div className="text-white text-2xl mb-1"><svg className=" relative z-50" width="30" height="47" viewBox="0 0 30 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.8324 14.2774C29.8327 14.7404 29.8092 15.2031 29.762 15.6636C29.7348 15.9293 29.6996 16.1935 29.6563 16.4563H25.0413C24.8481 16.4563 24.6094 18.3102 24.4727 18.449C24.336 18.5879 24.5341 18.1086 24.5341 18.3049C24.5341 18.7747 27.0232 17.6593 25.505 17.8907C25.1781 18.2228 24.9351 18.449 24.4727 18.449C24.0103 18.449 21.0947 18.7812 20.7677 18.449C20.4408 18.1169 20.2571 17.6664 20.2571 17.1966C20.2571 17.0003 20.1803 16.812 20.0436 16.6732C19.907 16.5343 19.7216 16.4563 19.5284 16.4563H15.3091V12.8214C16.0119 12.6544 16.6384 12.2509 17.0869 11.6764C17.5354 11.1019 17.7794 10.3902 17.7794 9.65695C17.7794 8.92371 17.5354 8.21203 17.0869 7.63753C16.6384 7.06303 16.0119 6.65948 15.3091 6.49246V0C19.0514 0.138711 22.6237 1.62249 25.3897 4.18703C26.7784 5.46402 27.8906 7.02051 28.6554 8.75761C29.4203 10.4947 29.8211 12.3744 29.8324 14.2774ZM6.1115 36.0454V38.8122C6.11406 39.5451 6.40176 40.2472 6.91186 40.7654C7.42196 41.2836 8.11307 41.5759 8.83446 41.5785H21.6696C22.3911 41.5761 23.0823 41.2839 23.5926 40.7656C24.1028 40.2474 24.3906 39.5452 24.3931 38.8122V36.0454H6.1115ZM10.4431 45.0296C10.4453 45.5521 10.6509 46.0525 11.015 46.4217C11.379 46.7908 11.872 46.9987 12.3863 47H18.1232C18.6364 46.9972 19.1279 46.7887 19.4906 46.4196C19.8533 46.0506 20.0578 45.551 20.0597 45.0296V43.0554H10.4431V45.0296ZM24.933 19.6532C24.5297 20.0626 24.0261 20.355 23.4742 20.5003C22.9223 20.6456 22.3423 20.6384 21.794 20.4795C21.2458 20.3206 20.7494 20.0157 20.356 19.5965C19.9627 19.1772 19.6868 18.6588 19.5569 18.0949H15.9789V22.3843C15.9789 22.5806 15.9021 22.7689 15.7655 22.9078C15.6288 23.0466 15.4435 23.1246 15.2502 23.1246C15.0185 23.1202 14.7884 23.1628 14.5731 23.2498C14.3578 23.3368 14.1618 23.4666 13.9964 23.6314C13.8311 23.7963 13.6997 23.993 13.61 24.21C13.5204 24.4271 13.4742 24.6601 13.4742 24.8955C13.4742 25.1308 13.5204 25.3639 13.61 25.5809C13.6997 25.7979 13.8311 25.9946 13.9964 26.1595C14.1618 26.3244 14.3578 26.4541 14.5731 26.5412C14.7884 26.6282 15.0185 26.6707 15.2502 26.6663C15.4435 26.6663 15.6288 26.7443 15.7655 26.8832C15.9021 27.022 15.9789 27.2103 15.9789 27.4066V34.5678H24.395C24.348 32.6105 24.5144 30.6538 24.8911 28.7336C25.4217 26.4644 26.4296 24.3388 27.8454 22.5027C28.4243 21.7114 28.9192 20.86 29.3217 19.9629C29.5928 19.3574 29.8195 18.7324 30 18.093H25.7868C25.6512 18.6839 25.3555 19.2243 24.933 19.6532ZM14.5245 28.0587C13.8217 27.8917 13.1952 27.4881 12.7467 26.9136C12.2983 26.3392 12.0542 25.6275 12.0542 24.8942C12.0542 24.161 12.2983 23.4493 12.7467 22.8748C13.1952 22.3003 13.8217 21.8968 14.5245 21.7297V18.0949H10.3016C10.2059 18.0949 10.1112 18.0757 10.0227 18.0385C9.93433 18.0013 9.854 17.9468 9.78633 17.878C9.71866 17.8093 9.66498 17.7277 9.62836 17.6379C9.59174 17.548 9.57289 17.4518 9.57289 17.3546C9.57289 16.8848 9.38921 16.4343 9.06225 16.1021C8.73529 15.77 8.29183 15.5834 7.82944 15.5834C7.36705 15.5834 6.9236 15.77 6.59664 16.1021C6.26967 16.4343 6.08599 16.8848 6.08599 17.3546C6.08599 17.5509 6.00921 17.7392 5.87255 17.878C5.73589 18.0169 5.55054 18.0949 5.35727 18.0949H0.499171C0.552611 18.2849 0.609896 18.473 0.671027 18.6593C1.12841 20.0393 1.79779 21.3371 2.65435 22.5046C4.07023 24.3406 5.07809 26.4663 5.60868 28.7355C5.98508 30.6557 6.15146 32.6123 6.10482 34.5697H14.5245V28.0587ZM5.56982 15.059C5.97316 14.6497 6.47684 14.3572 7.02875 14.212C7.58066 14.0667 8.16075 14.0739 8.709 14.2328C9.25725 14.3917 9.75375 14.6966 10.1471 15.1158C10.5405 15.535 10.8165 16.0534 10.9465 16.6173H14.5245V12.3279C14.5245 12.2307 14.5434 12.1344 14.58 12.0446C14.6166 11.9548 14.6703 11.8732 14.738 11.8044C14.8056 11.7357 14.886 11.6812 14.9744 11.6439C15.0628 11.6067 15.1575 11.5876 15.2532 11.5876C15.7156 11.5876 16.1591 11.401 16.486 11.0688C16.813 10.7367 16.9967 10.2862 16.9967 9.81642C16.9967 9.34667 16.813 8.89617 16.486 8.56401C16.1591 8.23185 15.7156 8.04524 15.2532 8.04524C15.06 8.04524 14.8746 7.96725 14.738 7.82841C14.6013 7.68958 14.5245 7.50128 14.5245 7.30494V0.160399C10.7822 0.299334 7.20988 1.78333 4.44395 4.34805C3.05496 5.62481 1.9426 7.18114 1.17755 8.91815C0.412494 10.6551 0.0114847 12.5348 2.2177e-06 14.4378C-0.000415145 15.1679 0.058078 15.8969 0.174894 16.6173H4.71479C4.85058 16.0268 5.14682 15.4869 5.56982 15.059Z" fill="white"/>
</svg>
</div>
    <h4 className="text-[18px] font-semibold relative z-50 text-white">{title}</h4>
    <p className="text-[14px] text-white mt-1 px-2  relative z-50 leading-tight">{text}</p>
  </div>
)

export default Challenges