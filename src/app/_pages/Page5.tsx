"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import icon1 from "@/app/assets/page5icon1.png";
import icon2 from "@/app/assets/page5icon2.png";
import icon3 from "@/app/assets/page5icon3.png";
import img from "@/app/assets/page5image1.png";

const Page5: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Trigger sections based on scroll position
    const sections = document.querySelectorAll(".section");

    // Create a ScrollTrigger for each section with adjusted scroll ranges for 300vh
    sections.forEach((section, index) => {
      const startScroll = `${index * 600}vh`; // Adjust for total screen height (100vh per section)
      const endScroll = `${index * 1000}vh`; // Adjust for total screen height (100vh per section)

      ScrollTrigger.create({
        trigger: section,
        start: startScroll, // Starting point of scroll for each section
        end: endScroll, // Ending point of scroll for each section
        scrub: 2,
        // markers: true,
        onEnter: () => setActiveIndex(index), // Activate the heading when the section enters
        onLeave: () => setActiveIndex(index), // Deactivate when leaving the section
        onEnterBack: () => setActiveIndex(index), // Re-activate when scrolling back
        onLeaveBack: () => setActiveIndex(index), // Deactivate when scrolling back
      });
    });

    // Pin the content and stop the user from seeing other areas
    ScrollTrigger.create({
      trigger: ".pinned-content",
      pin: true,
      // markers: true,
      start: "top top",
      end: "+=2500vh", // Adjust to match the total height of the page
    });
  }, []);

  const timelineItems = [
    {
      title: "ERP Software",
      icon: icon1,
    },
    {
      title: "CRM Software",
      icon: icon2,
    },
    {
      title: "HRMS Software",
      icon: icon3,
    },
  ];
  const contentItems = [
    { desc: "Custom Made ERP Softwares for your Needs", img: img },
    { desc: "Custom Made CRM Softwares for your Needs", img: img },
    { desc: "Custom Made HRMS Softwares for your Needs", img: img },
  ];
  return (
    <div className="w-full h-[500vh] bg-black hide-scrollbar z-20">
      {/* Content to Pin */}
      <div className="pinned-content h-screen w-full flex items-start justify-center py-16 px-20">
        <div className="w-3/12 relative flex flex-col items-start justify-start space-y-3">
          <div className="absolute left-[0.625rem] top-6 h-full w-[0.4rem] rounded-md bg-custom-gradient"></div>
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center section relative transition-transform duration-300`}
            >
              <div className="relative bg-custom-gradient rounded-full p-1.5">
                <Image
                  src={item.icon}
                  alt={`${item.title} Icon`}
                  width={15}
                  height={15}
                />
              </div>
              <div className="ml-6">
                <h1
                  className={`text-white  text-left text-[0.65rem] ${
                    activeIndex === index
                      ? "px-[1.15rem] py-1 gradient-border"
                      : "text-gray-400 px-[1.1rem]"
                  }`}
                >
                  {item.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div className="w-6/12 text-white">
          {/* <div className=""> */}
          {contentItems.map(
            (item, index) =>
              index === activeIndex && (
                <div
                  key={index}
                  className="flex flex-col justify-center gap-y-4 items-center mt-16 rounded-2xl w-full h-full"
                >
                  <Image src={item.img} alt="nice image" />
                  <div className="font-bold text-white">{item.desc}</div>
                  <div className="flex items-center justify-center gap-x-6">
                    <div className="font-semibold text-sm bg-custom-gradient rounded-3xl py-1.5 px-3.5 text-center">
                      View Live Demo
                    </div>
                    <div className="font-semibold text-sm border-[1.5px] border-white rounded-3xl py-[0.175rem] px-3 text-center">
                      Purchase Product
                    </div>
                  </div>
                </div>
              )
          )}
          {/* </div> */}
        </div>
        <div className="w-3/12"></div>
      </div>
    </div>
  );
};

export default Page5;
