import { useEffect } from "react";
import Image from "next/image"; // for optimized images
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import angular from "@/app/assets/angularLogo.png";
import react from "@/app/assets/reactLogo.png";
import aws from "@/app/assets/awsLogo.png";
import node from "@/app/assets/nodeLogo.png";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Page6 = () => {
  useEffect(() => {
    const moveDownLittleLeftDiv = document.querySelectorAll(
      ".dynamic-margin-down-right"
    );
    const moveDownRightDiv = document.querySelectorAll(
      ".dynamic-margin-down-left"
    );
    const moveDownDiv = document.querySelectorAll(".dynamic-margin-down");
    const moveRightDiv = document.querySelectorAll(".dynamic-margin-left");
    const moveLeftDiv = document.querySelectorAll(".dynamic-margin-right");
    const moveRightUpDiv = document.querySelectorAll(".dynamic-margin-up-left");
    const moveUpDiv = document.querySelectorAll(".dynamic-margin-up");
    const moveLeftUpDiv = document.querySelectorAll(".dynamic-margin-up-right");
    gsap.fromTo(
      moveLeftUpDiv,
      { top: "2.5rem", left: "3rem" },
      {
        top: 0,
        left: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: moveDownDiv,
          start: () => `bottom ${window.innerHeight * 0.45}px`, // Start blur at bottom 10vh
          end: () => `bottom ${window.innerHeight}px`,
          scrub: 4,
        },
      }
    );
    gsap.fromTo(
      moveUpDiv,
      { top: "3rem" },
      {
        top: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: moveDownDiv,
          start: () => `bottom ${window.innerHeight * 0.45}px`, // Start blur at bottom 10vh
          end: () => `bottom ${window.innerHeight}px`,
          scrub: 4,
        },
      }
    );
    gsap.fromTo(
      moveRightUpDiv,
      { top: "2.5rem", right: "3rem" },
      {
        top: 0,
        right: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: moveDownDiv,
          start: () => `bottom ${window.innerHeight * 0.45}px`, // Start blur at bottom 10vh
          end: () => `bottom ${window.innerHeight}px`,
          scrub: 4,
        },
      }
    );
    gsap.fromTo(
      moveLeftDiv,
      { bottom: "3.5rem", left: "3rem" },
      {
        bottom: 0,
        left: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: moveDownDiv,
          start: () => `bottom ${window.innerHeight * 0.45}px`, // Start blur at bottom 10vh
          end: () => `bottom ${window.innerHeight}px`,
          scrub: 4,
        },
      }
    );
    gsap.fromTo(
      moveRightDiv,
      { bottom: "3.5rem", right: "3rem" },
      {
        bottom: 0,
        right: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: moveDownDiv,
          start: () => `bottom ${window.innerHeight * 0.45}px`, // Start blur at bottom 10vh
          end: () => `bottom ${window.innerHeight}px`,
          scrub: 4,
        },
      }
    );
    gsap.fromTo(
      moveDownLittleLeftDiv,
      { bottom: "3.5rem", left: "3rem" },
      {
        bottom: 0,
        left: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: moveDownDiv,
          start: () => `bottom ${window.innerHeight * 0.8}px`, // Start blur at bottom 10vh
          end: () => `bottom ${window.innerHeight}px`,
          scrub: 4,
        },
      }
    );
    gsap.fromTo(
      moveDownRightDiv,
      // { marginRight: "5rem", marginBottom: "5rem" },
      { bottom: "3.5rem", right: "3.5rem" },
      {
        bottom: 0,
        right: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: moveDownDiv,
          start: () => `bottom ${window.innerHeight * 0.8}px`, // Start blur at bottom 10vh
          end: () => `bottom ${window.innerHeight}px`,
          scrub: 4,
        },
      }
    );
    gsap.fromTo(
      moveDownDiv,
      { bottom: "3.5rem" },
      {
        bottom: "0",
        padding: "0.25rem",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: moveDownDiv,
          start: () => `bottom ${window.innerHeight * 0.8}px`, // Start blur at bottom 10vh
          end: () => `bottom ${window.innerHeight}px`,
          scrub: 4,
        },
      }
    );
  }, []);
  useEffect(() => {
    const images = document.querySelectorAll(".image-box");
    images.forEach((img) => {
      gsap.fromTo(
        img,
        { y: "0rem" },
        {
          y: "0rem",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: img,
            start: () => `bottom ${window.innerHeight * 0.8}px`, // Start blur at bottom 10vh
            end: () => `bottom ${window.innerHeight}px`,
            scrub: true,
          },
        }
      );
    });
    const blackBoxes = document.querySelectorAll(".black-box");
    blackBoxes.forEach((box) => {
      gsap.fromTo(
        box,
        {
          filter: "blur(3px)",
        },
        {
          filter: "blur(0px)",
          scrollTrigger: {
            trigger: box,
            start: () => `bottom ${window.innerHeight * 0.9}px`, // Start blur at bottom 10vh
            end: () => `bottom ${window.innerHeight}px`,
            scrub: true,
            markers: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative bg-black text-white h-screen flex items-center justify-center overflow-hidden">
      {/* Bottom Blur Overlay */}
      <div className="blur-overlay"></div>
      {/* Tech Stack Grid Layout */}
      <div className="flex flex-col justify-center items-center gap-y-4">
        <div className="flex items-center justify-center gap-x-4">
          <div className=" black-box bg-black rounded-xl image-box w-20 h-20">
            <div className="absolute dynamic-margin-down-left flex items-center justify-center bg-white rounded-xl w-20 h-20">
              <Image className="" src={aws} height={70} width={70} alt="aws" />
            </div>
          </div>
          <div className="black-box bg-gray-400 p-[2.5rem] rounded-xl"></div>
          <div className="black-box bg-gray-400 p-[2.5rem] rounded-xl"></div>
          <div className="black-box bg-gray-400 p-[2.5rem] rounded-xl"></div>
          <div className="black-box bg-gray-400 p-[2.5rem] rounded-xl"></div>
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <div className="black-box bg-gray-400 p-[2.5rem] rounded-xl"></div>
          <div className="black-box bg-gray-400 p-[2.5rem] rounded-xl"></div>
          <div className="black-box bg-gray-400 p-[2.5rem] rounded-xl"></div>
          <div className=" black-box bg-black rounded-xl image-box w-20 h-20">
            <div className="absolute dynamic-margin-down flex items-center justify-center bg-white rounded-xl w-20 h-20">
              <Image className="" src={aws} height={70} width={70} alt="aws" />
            </div>
          </div>
          <div className="black-box bg-gray-400 p-[2.5rem] rounded-xl"></div>
          <div className=" black-box bg-black rounded-xl image-box w-20 h-20">
            <div className="absolute dynamic-margin-down-right flex items-center justify-center bg-white rounded-xl w-20 h-20">
              <Image
                className=""
                src={node}
                height={70}
                width={70}
                alt="node"
              />
            </div>
          </div>
          <div className="black-box bg-gray-400 p-[2.5rem] rounded-xl"></div>
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <div className="black-box bg-gray-400 p-[2.5rem] rounded-xl"></div>
          <div className=" black-box bg-black rounded-xl image-box w-20 h-20">
            <div className="absolute dynamic-margin-left flex items-center justify-center bg-white rounded-xl w-20 h-20">
              <Image
                className=""
                src={react}
                height={70}
                width={70}
                alt="react"
              />
            </div>
          </div>
          <div className="black-box bg-black p-[2.5rem] rounded-xl"></div>
          {/* <div className="black-box bg-black p-[2.5rem] rounded-xl"></div> */}
          <div className="black-box bg-black p-[2.5rem] rounded-xl"></div>
          <div className="absolute z-20 flex flex-col items-center justify-center">
            <h2 className="w-4/12 px-20 text-center text-3xl font-semibold mb-4 mx-[2.5rem] text-white mt-28">
              Amazing tech stack in our pocket
            </h2>
            <p className="text-xs text-center w-5/12  px-20 mt-2">
              Utilize our team's specialized full-stack expertise in software
              development to turn your product vision into reality. We are
              committed to providing solutions that adhere to the highest coding
              standards, ensuring reliability, scalability, and security.
            </p>
          </div>
          <div className="black-box bg-black p-[2.5rem] rounded-xl"></div>

          <div className="black-box bg-black p-[2.5rem] rounded-xl"></div>
          <div className="black-box bg-black p-[2.5rem] rounded-xl"></div>
          <div className=" black-box bg-black rounded-xl image-box w-20 h-20">
            <div className="absolute dynamic-margin-right flex items-center justify-center bg-white rounded-xl w-20 h-20 z-20">
              <Image
                className=""
                src={react}
                height={70}
                width={70}
                alt="react"
              />
            </div>
          </div>
          <div className="black-box bg-gray-400 p-[2.5rem] rounded-xl"></div>
        </div>

        <div className="flex items-center justify-center gap-x-4">
          <div className=" black-box bg-black rounded-xl image-box w-20 h-20">
            <div className="absolute dynamic-margin-left flex items-center justify-center bg-white rounded-xl w-20 h-20">
              <Image
                className=""
                src={angular}
                height={70}
                width={70}
                alt="angular"
              />
            </div>
          </div>
          <div className="black-box bg-gray-400 p-[2.5rem] rounded-xl"></div>
          {/* <div className="black-box bg-black p-[2.5rem] rounded-xl"></div> */}
          <div className="black-box bg-black p-[2.5rem] rounded-xl"></div>
          <div className="black-box bg-black p-[2.5rem] rounded-xl"></div>
          <div className="black-box bg-black p-[2.5rem] rounded-xl"></div>
          <div className="black-box bg-black p-[2.5rem] rounded-xl"></div>
          <div className="black-box bg-black p-[2.5rem] rounded-xl"></div>
          <div className="black-box bg-gray-400 p-[2.5rem] rounded-xl"></div>
          <div className=" black-box bg-black rounded-xl image-box w-20 h-20">
            <div className="absolute dynamic-margin-right flex items-center justify-center bg-white rounded-xl w-20 h-20 z-20">
              <Image
                className=""
                src={node}
                height={70}
                width={70}
                alt="node"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <div className=" black-box bg-black rounded-xl image-box w-20 h-20">
            <div className="absolute dynamic-margin-up-left flex items-center justify-center bg-white rounded-xl w-20 h-20">
              <Image
                className=""
                src={angular}
                height={70}
                width={70}
                alt="angular"
              />
            </div>
          </div>
          <div className="black-box bg-gray-400 p-[2.5rem] rounded-xl"></div>
          <div className="black-box bg-gray-400 p-[2.5rem] rounded-xl"></div>
          <div className="black-box bg-gray-400 p-[2.5rem] rounded-xl"></div>
          <div className=" black-box bg-black rounded-xl image-box w-20 h-20">
            <div className="absolute dynamic-margin-up flex items-center justify-center bg-white rounded-xl w-20 h-20 z-20">
              <Image
                className=""
                src={react}
                height={70}
                width={70}
                alt="react"
              />
            </div>
          </div>
          <div className="black-box bg-gray-400 p-[2.5rem] rounded-xl"></div>
          <div className="black-box bg-gray-400 p-[2.5rem] rounded-xl"></div>
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <div className="black-box bg-gray-400 p-[2.5rem] rounded-xl"></div>
          <div className=" black-box bg-black rounded-xl image-box w-20 h-20">
            <div className="absolute dynamic-margin-up flex items-center justify-center bg-white rounded-xl w-20 h-20 z-20">
              <Image
                className=""
                src={react}
                height={70}
                width={70}
                alt="react"
              />
            </div>
          </div>
          <div className="black-box bg-gray-400 p-[2.5rem] rounded-xl"></div>
          <div className="black-box bg-gray-400 p-[2.5rem] rounded-xl"></div>
          <div className=" black-box bg-black rounded-xl image-box w-20 h-20">
            <div className="absolute dynamic-margin-up-right flex items-center justify-center bg-white rounded-xl w-20 h-20 z-20">
              <Image
                className=""
                src={angular}
                height={70}
                width={70}
                alt="angular"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;
