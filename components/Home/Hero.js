"use client"
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

const Hero = () => {
  const { palette, theme } = useContext(GlobalContext);
  useEffect(() => {
    var TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = "";
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function () {
        that.tick();
      }, delta);
    };

    window.onload = function () {
      var elements = document.getElementsByClassName("typewrite");
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-type");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
    };
  });
  return (
    <div className="w-full  flex flex-col pt-10  gap-4 justify-start items-center">
      <span
        className="capitalize text-[18px] font-medium "
        style={{
          color: palette?.light_contrast_color,
        }}
      >
        mobile & Web app development agency
      </span>
      <h1
        style={{
          color: palette?.color,
        }}
        className="text-3xl font-extrabold lg:text-7xl lg:font-bold text-center capitalize"
      >
        Elevate your brand in the <br />
        <span
          style={{
            color: palette?.brandOrange
          }}


          data-period="1000"
          data-type='[ "Digital Cosmos", "Techno Galaxy", "Digital World", "App Universe" ]'
          className={`typewrite text-[50px]  font-extrabold text-center lg:text-left lg:text-[74px] lg:font-bold leading-tight `}
        >
          <span className={`wrap `}></span>
        </span>
      </h1>
      <span
        style={{
          color: palette?.dark_contrast_color,
        }}
        className=" text-center my-2 lg:my-6 text-[16px] lg:text-[19px] font-normal"
      >
        Whether it's crafting a visually stunning brand identity, designing
        immersive <br /> digital experiences, or developing strategic marketing
      </span>
      <div className="w-auto flex gap-4 justify-center items-center">
        <Link href={"/contact-us"}
          name="schedule-a-meeting"
          style={{
            background: palette?.brandOrange,
            color: "white",
          }}
          className="w-[150px] lg:w-[206px] h-14 lg:h-16 rounded-full transition-all duration-150 hover:opacity-90  shadow-xl text-sm lg:text-md font-medium shadow-[#F15C20]/[0.3] flex items-center justify-center"
        >
          Schedule a meeting
        </Link>
        <Link
          href={"tel:+18777141770"}
          name="call-us"
          style={{
            border: `2px solid ${palette?.brandOrange}`,
            color: palette?.brandOrange,
          }}
          className="w-[150px] lg:w-[206px] h-14 lg:h-16 rounded-full  transition-all duration-100 hover:scale-105 text-sm lg:text-md font-medium  flex items-center justify-center gap-2"
        >
          <BsFillTelephoneFill />
          <span>+1 877 714 1770</span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
