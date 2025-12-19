"use client";
import React from "react";
import { motion } from "framer-motion";
import DiscoveryIcon from "./icons/Discovery";

const insights = [
  {
    icon: (
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1166_443)">
          <rect
            x="30"
            y="30"
            width="60"
            height="60"
            rx="30"
            fill="white"
            fill-opacity="0.7"
            shape-rendering="crispEdges"
          />
          <rect
            x="30.5"
            y="30.5"
            width="59"
            height="59"
            rx="29.5"
            stroke="#5BAFEB"
            shape-rendering="crispEdges"
          />
          <path
            d="M71.9853 51.6954V54.2247H48.0156V51.6954C48.0156 50.975 48.3018 50.2841 48.8112 49.7748C49.3205 49.2654 50.0114 48.9792 50.7317 48.9792H52.3105V50.2694C52.3105 50.5395 52.4178 50.7986 52.6088 50.9896C52.7998 51.1806 53.0589 51.2879 53.329 51.2879C53.5992 51.2879 53.8582 51.1806 54.0492 50.9896C54.2403 50.7986 54.3476 50.5395 54.3476 50.2694V48.9792H65.6534V50.2694C65.6534 50.5395 65.7607 50.7986 65.9517 50.9896C66.1427 51.1806 66.4018 51.2879 66.6719 51.2879C66.9421 51.2879 67.2011 51.1806 67.3921 50.9896C67.5832 50.7986 67.6905 50.5395 67.6905 50.2694V48.9792H69.2692C69.9896 48.9792 70.6804 49.2654 71.1898 49.7748C71.6992 50.2841 71.9853 50.975 71.9853 51.6954Z"
            fill="#5BAFEB"
          />
          <path
            d="M48.0156 56.262V70.2839C48.0156 71.0043 48.3018 71.6951 48.8112 72.2045C49.3205 72.7138 50.0114 73 50.7317 73H69.2692C69.9896 73 70.6804 72.7138 71.1898 72.2045C71.6992 71.6951 71.9853 71.0043 71.9853 70.2839V56.262H48.0156ZM65.2663 69.503H54.7414C54.4713 69.503 54.2122 69.3957 54.0212 69.2047C53.8302 69.0137 53.7229 68.7546 53.7229 68.4845C53.7229 68.2143 53.8302 67.9553 54.0212 67.7643C54.2122 67.5732 54.4713 67.4659 54.7414 67.4659H65.2663C65.5365 67.4659 65.7955 67.5732 65.9866 67.7643C66.1776 67.9553 66.2849 68.2143 66.2849 68.4845C66.2849 68.7546 66.1776 69.0137 65.9866 69.2047C65.7955 69.3957 65.5365 69.503 65.2663 69.503ZM65.2663 65.3474H54.7414C54.4713 65.3474 54.2122 65.2401 54.0212 65.049C53.8302 64.858 53.7229 64.599 53.7229 64.3288C53.7229 64.0587 53.8302 63.7996 54.0212 63.6086C54.2122 63.4176 54.4713 63.3103 54.7414 63.3103H65.2663C65.5365 63.3103 65.7955 63.4176 65.9866 63.6086C66.1776 63.7996 66.2849 64.0587 66.2849 64.3288C66.2849 64.599 66.1776 64.858 65.9866 65.049C65.7955 65.2401 65.5365 65.3474 65.2663 65.3474ZM65.2663 61.1917H54.7414C54.4713 61.1917 54.2122 61.0844 54.0212 60.8934C53.8302 60.7024 53.7229 60.4433 53.7229 60.1732C53.7229 59.903 53.8302 59.644 54.0212 59.4529C54.2122 59.2619 54.4713 59.1546 54.7414 59.1546H65.2663C65.5365 59.1546 65.7955 59.2619 65.9866 59.4529C66.1776 59.644 66.2849 59.903 66.2849 60.1732C66.2849 60.4433 66.1776 60.7024 65.9866 60.8934C65.7955 61.0844 65.5365 61.1917 65.2663 61.1917Z"
            fill="#5BAFEB"
          />
          <path
            d="M54.3476 48.0185V48.9794H52.3105V48.0185C52.3105 47.7484 52.4179 47.4893 52.6089 47.2983C52.7999 47.1073 53.059 47 53.3291 47C53.5992 47 53.8583 47.1073 54.0493 47.2983C54.2403 47.4893 54.3476 47.7484 54.3476 48.0185Z"
            fill="#5BAFEB"
          />
          <path
            d="M67.6904 48.0185V48.9794H65.6533V48.0185C65.6533 47.7484 65.7606 47.4893 65.9516 47.2983C66.1427 47.1073 66.4017 47 66.6719 47C66.942 47 67.2011 47.1073 67.3921 47.2983C67.5831 47.4893 67.6904 47.7484 67.6904 48.0185Z"
            fill="#5BAFEB"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1166_443"
            x="0"
            y="0"
            width="120"
            height="120"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="15" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.211765 0 0 0 0 0.752941 0 0 0 0 0.937255 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1166_443"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1166_443"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ),
    title: "Cabin Crew Travel With Stressful, Unpredictable Schedules",
    position: "top-left",
  },
  {
    icon: (
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1166_505)">
          <path
            d="M30 60C30 43.4315 43.4315 30 60 30C76.5685 30 90 43.4315 90 60C90 76.5685 76.5685 90 60 90C43.4315 90 30 76.5685 30 60Z"
            fill="white"
            fill-opacity="0.7"
            shape-rendering="crispEdges"
          />
          <path
            d="M60 30.5C76.2924 30.5 89.5 43.7076 89.5 60C89.5 76.2924 76.2924 89.5 60 89.5C43.7076 89.5 30.5 76.2924 30.5 60C30.5 43.7076 43.7076 30.5 60 30.5Z"
            stroke="#5BAFEB"
            shape-rendering="crispEdges"
          />
          <path
            d="M62.8036 50.925C61.9065 50.6926 60.9673 50.5723 60.0001 50.5723C59.0329 50.5723 58.0937 50.6926 57.1966 50.925C52.3617 52.1749 48.7861 56.5613 48.7861 61.7861C48.7861 67.9783 53.8079 73.0001 60.0001 73.0001C66.1923 73.0001 71.214 67.9783 71.214 61.7861C71.214 56.561 67.6384 52.1747 62.8036 50.925ZM60.0001 61.7861V53.8407C64.3864 53.8407 67.9411 57.3998 67.9411 61.7861H60.0001Z"
            fill="#5BAFEB"
          />
          <path
            d="M58.8164 49.3679H61.1842V50.946H58.8164V49.3679Z"
            fill="#5BAFEB"
          />
          <path
            d="M57.7071 47H62.2967C62.5537 47 62.7617 47.257 62.7617 47.4649V48.9438C62.7617 49.2007 62.5537 49.4087 62.2967 49.4087H57.7071C57.4501 49.4087 57.2422 49.1517 57.2422 48.9438V47.4649C57.2422 47.2079 57.4501 47 57.7071 47Z"
            fill="#5BAFEB"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1166_505"
            x="0"
            y="0"
            width="120"
            height="120"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="15" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.211765 0 0 0 0 0.752941 0 0 0 0 0.937255 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1166_505"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1166_505"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ),
    title: "Last-Minute Bookings Are The Norm, Not The Exception",
    position: "top-right",
  },
  {
    icon: (
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1166_487)">
          <path
            d="M30 60C30 43.4315 43.4315 30 60 30C76.5685 30 90 43.4315 90 60C90 76.5685 76.5685 90 60 90C43.4315 90 30 76.5685 30 60Z"
            fill="white"
            fill-opacity="0.7"
            shape-rendering="crispEdges"
          />
          <path
            d="M60 30.5C76.2924 30.5 89.5 43.7076 89.5 60C89.5 76.2924 76.2924 89.5 60 89.5C43.7076 89.5 30.5 76.2924 30.5 60C30.5 43.7076 43.7076 30.5 60 30.5Z"
            stroke="#5BAFEB"
            shape-rendering="crispEdges"
          />
          <path
            d="M59.9999 47C59.4832 47 58.9713 47.106 58.4972 47.3096L51.1898 50.4404C50.227 50.8535 49.6006 51.8029 49.6006 52.8498V62.5995C49.6006 68.3361 54.2645 73 59.9999 73C65.7352 73 70.3991 68.3361 70.3991 62.5995V52.8498C70.3991 51.8029 69.7727 50.8535 68.8099 50.4404L61.5025 47.3096C61.0284 47.106 60.5166 47 59.9999 47ZM59.9999 53.5006C63.5816 53.5006 66.4993 56.4182 66.4993 60C66.4993 63.5818 63.5817 66.4994 59.9999 66.4994C56.4181 66.4994 53.5005 63.5818 53.5005 60C53.5005 56.4182 56.4181 53.5006 59.9999 53.5006Z"
            fill="#5BAFEB"
          />
          <path
            d="M61.4904 58.2401L59.3503 60.3814L58.5094 59.5405C58.2559 59.287 57.844 59.287 57.5905 59.5405C57.337 59.794 57.337 60.2059 57.5905 60.4594L58.8909 61.7598C59.1444 62.0133 59.5551 62.0133 59.8098 61.7598L62.4093 59.1603V59.1591C62.6628 58.9056 62.6628 58.4949 62.4093 58.2402C62.1558 57.9867 61.7439 57.9866 61.4904 58.2401Z"
            fill="#5BAFEB"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1166_487"
            x="0"
            y="0"
            width="120"
            height="120"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="15" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.211765 0 0 0 0 0.752941 0 0 0 0 0.937255 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1166_487"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1166_487"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ),
    title: "Trust And Safety Matter More Than Convenience",
    position: "bottom-left",
  },
  {
    icon: (
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1166_496)">
          <path
            d="M30 60C30 43.4315 43.4315 30 60 30C76.5685 30 90 43.4315 90 60C90 76.5685 76.5685 90 60 90C43.4315 90 30 76.5685 30 60Z"
            fill="white"
            fill-opacity="0.7"
            shape-rendering="crispEdges"
          />
          <path
            d="M60 30.5C76.2924 30.5 89.5 43.7076 89.5 60C89.5 76.2924 76.2924 89.5 60 89.5C43.7076 89.5 30.5 76.2924 30.5 60C30.5 43.7076 43.7076 30.5 60 30.5Z"
            stroke="#5BAFEB"
            shape-rendering="crispEdges"
          />
          <path
            d="M75.3432 59.1979L73.572 58.2956C72.6028 57.7943 71.5 57.527 70.3972 57.527H66.7211C66.4203 56.8252 66.0861 56.0566 65.6851 55.2879C65.9859 55.3213 66.2532 55.3882 66.554 55.3882C66.7545 55.3882 66.9216 55.2211 66.9216 55.0206V53.7841C66.9216 53.5835 66.7545 53.4165 66.554 53.4165C65.9859 53.4499 65.4512 53.5501 64.883 53.7172C64.5489 53.0823 64.1812 52.4473 63.8471 51.8458C64.081 51.8792 64.3149 51.9126 64.5823 51.946C64.7828 51.946 64.9499 51.7789 64.9499 51.5784V50.3419C64.9499 50.1414 64.7828 49.9743 64.5823 49.9743C64.0476 50.0077 63.4794 50.108 62.9447 50.2751C62.3766 49.3059 61.8419 48.4704 61.4743 47.8689C61.1401 47.3342 60.5386 47 59.9036 47H58.9679C58.7339 47 58.5669 47.2339 58.6337 47.4344C59.0681 48.9383 60.4383 53.8843 60.973 57.5604L54.2558 58.162C53.554 56.6581 52.4178 54.7866 51.9165 53.9846C51.7494 53.7172 51.4486 53.5501 51.1478 53.5501H49.9447C49.7108 53.5501 49.5437 53.7841 49.6106 54.018C49.9447 55.1877 50.8136 58.3959 50.8136 60C50.8136 61.6041 49.9447 64.7789 49.6106 65.982C49.5437 66.2159 49.7108 66.4499 49.9447 66.4499H51.1478C51.482 66.4499 51.7494 66.2828 51.9165 66.0154C52.4512 65.18 53.554 63.3419 54.2558 61.838L60.973 62.4396C60.4383 66.1157 59.0681 71.0617 58.6337 72.5656C58.5669 72.7995 58.7339 73 58.9679 73H59.9036C60.5386 73 61.1401 72.6658 61.4743 72.1311C61.8419 71.563 62.3432 70.6941 62.9447 69.7249C63.4794 69.892 64.0476 69.9923 64.5823 70.0257C64.7828 70.0257 64.9499 69.8586 64.9499 69.6581V68.4216C64.9499 68.2211 64.7828 68.054 64.5823 68.054C64.3483 68.054 64.081 68.1208 63.8471 68.1542C64.1812 67.5527 64.5489 66.9177 64.883 66.2828C65.4178 66.4499 65.9859 66.5501 66.554 66.5835C66.7545 66.5835 66.9216 66.4165 66.9216 66.2159V65.0797C66.9216 64.8792 66.7545 64.7121 66.554 64.7121C66.2532 64.7121 65.9859 64.7789 65.6851 64.8123C66.0861 64.0103 66.4537 63.2751 66.7211 62.5733H70.3972C71.5 62.5733 72.6028 62.3059 73.572 61.8046L75.3432 60.9023C76.045 60.5681 76.045 59.5656 75.3432 59.1979Z"
            fill="#5BAFEB"
          />
          <path
            d="M53.2536 52.0462H57.598C57.9991 52.0462 58.2998 51.7454 58.2998 51.3444C58.2998 50.9433 57.9991 50.6426 57.598 50.6426H53.2536C52.8525 50.6426 52.5518 50.9433 52.5518 51.3444C52.5518 51.7454 52.8859 52.0462 53.2536 52.0462Z"
            fill="#5BAFEB"
          />
          <path
            d="M54.9238 54.8534C54.9238 55.2544 55.2246 55.5552 55.6256 55.5552H58.5665C58.9675 55.5552 59.2683 55.2544 59.2683 54.8534C59.2683 54.4524 58.9675 54.1516 58.5665 54.1516H55.6256C55.258 54.1516 54.9238 54.4524 54.9238 54.8534Z"
            fill="#5BAFEB"
          />
          <path
            d="M57.598 68.0874H53.2536C52.8525 68.0874 52.5518 68.3882 52.5518 68.7892C52.5518 69.1902 52.8525 69.491 53.2536 69.491H57.598C57.9991 69.491 58.2998 69.1902 58.2998 68.7892C58.2998 68.4216 57.9991 68.0874 57.598 68.0874Z"
            fill="#5BAFEB"
          />
          <path
            d="M59.2683 65.2802C59.2683 64.8791 58.9675 64.5784 58.5665 64.5784H55.6256C55.2246 64.5784 54.9238 64.8791 54.9238 65.2802C54.9238 65.6812 55.2246 65.982 55.6256 65.982H58.5665C58.9675 65.982 59.2683 65.6812 59.2683 65.2802Z"
            fill="#5BAFEB"
          />
          <path
            d="M46.0016 57.3599H48.0736C48.4746 57.3599 48.7754 57.0591 48.7754 56.6581C48.7754 56.2571 48.4746 55.9563 48.0736 55.9563H46.0016C45.6006 55.9563 45.2998 56.2571 45.2998 56.6581C45.2998 57.0591 45.6006 57.3599 46.0016 57.3599Z"
            fill="#5BAFEB"
          />
          <path
            d="M48.7417 59.365H44.8317C44.4307 59.365 44.1299 59.6658 44.1299 60.0668C44.1299 60.4678 44.4307 60.7686 44.8317 60.7686H48.7417C49.1427 60.7686 49.4435 60.4678 49.4435 60.0668C49.4435 59.6658 49.1427 59.365 48.7417 59.365Z"
            fill="#5BAFEB"
          />
          <path
            d="M48.0736 62.7737H46.0016C45.6006 62.7737 45.2998 63.0745 45.2998 63.4755C45.2998 63.8765 45.6006 64.1773 46.0016 64.1773H48.0736C48.4746 64.1773 48.7754 63.8765 48.7754 63.4755C48.7754 63.0745 48.4412 62.7737 48.0736 62.7737Z"
            fill="#5BAFEB"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1166_496"
            x="0"
            y="0"
            width="120"
            height="120"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="15" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.211765 0 0 0 0 0.752941 0 0 0 0 0.937255 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1166_496"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1166_496"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ),
    title: "No Existing Platform Focuses Solely On Aviation Professionals",
    position: "bottom-right",
  },
];

const Discovery = () => {
  return (
    <section className="w-full py-16  relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Research & <span className="text-cyan-500">Discovery</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-700 text-sm md:text-base max-w-4xl mx-auto mb-20 leading-relaxed"
        >
          Before building CrowdRoots, we kicked off a deep Research & Discovery
          phase to understand how cabin-crew members actually live, travel, and
          make last-minute decisions on the go. We tracked user insights, met
          assumptions, life-uprooted the everyday challenges users face:
          unpredictable schedules, difficulty finding trustworthy stays quickly,
          and the lack of any one-stop solution built just for them. We explored
          what features mattered most, affordable last-space options, secure
          listings, fast search, and reliability across all devices through
          direct feedback and user research. We also considered how the app
          would work in low-bandwidth scenarios. At the end of the discovery
          phase, App Development decision that followed.
        </motion.p>

        <div className="grid grid-cols-2 w-[80%]  relative mx-auto ">
          <div className="absolute left-[50%] translate-x-[-50%] top-[26.5%] z-50" >
          <DiscoveryIcon/>
          </div>
          <div className=" rounded-full  absolute left-[50%] translate-x-[-50%] top-[24%] z-20" >
            <img src="/crew/circle.png" alt="circle" fill className="scale-[2]" /></div> 
          {insights.map((insight, index) => (
            <div key={index} className="px-5  transition-all ease-linear  h-[291px] py-7 relative z-40  hover:backdrop-blur-lg bg-transparent">
              {insight.icon}
              <span className="text-sm pr-24 text-start" >{insight.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discovery;
