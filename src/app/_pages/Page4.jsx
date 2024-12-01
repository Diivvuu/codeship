"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page4 = () => {
  const containerRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  console.log();
  useEffect(() => {
    let sections = gsap.utils.toArray(".panel");

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 0.1,
        end: "+=3000",
      },
    });

    // Individual animations
    gsap.to(box1Ref.current, {
      y: -130,
      duration: 2,
      ease: "elastic",
      scrollTrigger: {
        trigger: box1Ref.current,
        containerAnimation: scrollTween,
        start: "top top",
        marks: true,
        toggleActions: "play none none reset",
      },
    });

    gsap.to(box2Ref.current, {
      y: -120,
      backgroundColor: "#1e90ff",
      ease: "none",
      scrollTrigger: {
        trigger: box2Ref.current,
        containerAnimation: scrollTween,
        start: "center 80%",
        end: "center 20%",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="flex-col w-[400vw]">
      <div ref={containerRef} className="flex w-full">
        <div className="panel blue bg-blue-800 w-full">
          Scroll down to animate horizontally &gt;
        </div>

        <section className="panel bg-red-800 w-full">
          <div ref={box1Ref} className="box-1 box">
            box-1
          </div>
        </section>

        <section className="panel bg-gray-800  w-full">
          <div ref={box2Ref} className="box-2 box">
            box-2
          </div>
        </section>

        <section className="panel bg-purple-400 w-full">
          <div className="box-3 box">box-3</div>
        </section>

        <section className="panel bg-green-500 w-full">
          <div className="green">Final Section</div>
        </section>
      </div>
    </div>
  );
};

export default Page4;
