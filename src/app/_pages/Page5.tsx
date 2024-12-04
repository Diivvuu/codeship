"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import icon1 from "@/app/assets/page5icon1.png";
import icon2 from "@/app/assets/page5icon2.png";
import icon3 from "@/app/assets/page5icon3.png";

const Page5: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Trigger sections based on scroll position
    const sections = document.querySelectorAll(".section");

    // Create a ScrollTrigger for each section with adjusted scroll ranges for 300vh
    sections.forEach((section, index) => {
      const startScroll = `${index * 1000}vh`; // Adjust for total screen height (100vh per section)
      const endScroll = `${(index + 1) * 1000}vh`; // Adjust for total screen height (100vh per section)

      ScrollTrigger.create({
        trigger: section,
        start: startScroll, // Starting point of scroll for each section
        end: endScroll, // Ending point of scroll for each section
        scrub: 1,
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
      start: "top top",
      end: "+=3200vh", // Adjust to match the total height of the page
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

  return (
    <div className="w-full h-[600vh] bg-black hide-scrollbar">
      {/* Content to Pin */}
      <div className="pinned-content h-screen w-full flex items-center justify-center bg-gray-900">
        <div className="w-1/3 relative flex flex-col items-start justify-start space-y-6 ml-12">
          <div className="absolute left-0 top-0 h-[110%] w-2 rounded-md bg-custom-gradient"></div>
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center section relative z-10 transition-transform duration-300 ${
                activeIndex === index ? "animate-active" : ""
              }`}
            >
              <div className="relative">
                <Image
                  src={item.icon}
                  alt={`${item.title} Icon`}
                  width={15}
                  height={15}
                />
              </div>
              <div className="ml-6">
                <h1
                  className={`text-white text-sm font-bold ${
                    activeIndex === index
                      ? "text-blue-500  border-2 bg-custom-gradient rounded-xl"
                      : "text-gray-400"
                  }`}
                >
                  {item.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div className="w-2/3 text-white">nice</div>
      </div>
    </div>
  );
};

export default Page5;
