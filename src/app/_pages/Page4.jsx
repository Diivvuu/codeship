"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BigCard from "../_components/BigCard";
import { cardData } from "../constants/page4Card";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Page4 = () => {
  const containerRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);

  useEffect(() => {
    let sections = gsap.utils.toArray(".panel");

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 0.1,
        end: () =>
          `+=${
            containerRef.current.offsetWidth -
            window.innerWidth -
            window.innerWidth * 0.5
          }`,
      },
    });

    // Individual animations
    gsap.to(box1Ref.current, {
      // y: -130,
      duration: 2,
      ease: "elastic",
      scrollTrigger: {
        trigger: box1Ref.current,
        containerAnimation: scrollTween,
        start: "top top",
        toggleActions: "play none none reset",
      },
    });

    gsap.to(box2Ref.current, {
      // y: -120,
      // backgroundColor: "#1e90ff",
      ease: "none",
      scrollTrigger: {
        trigger: box2Ref.current,
        containerAnimation: scrollTween,
        start: "center 80%",
        end: "center 20%",
        scrub: true,
      },
    });

    gsap.to(box3Ref.current, {
      // y: -100,
      duration: 1.5,
      ease: "power2",
      scrollTrigger: {
        trigger: box3Ref.current,
        containerAnimation: scrollTween,
        start: "center 75%",
        scrub: true,
      },
    });

    gsap.to(box4Ref.current, {
      // opacity: 0.8,
      // scale: 1.1,
      ease: "power1",
      scrollTrigger: {
        trigger: box4Ref.current,
        containerAnimation: scrollTween,
        start: "center 70%",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative flex-col h-[525vh] w-[400vw] overflow-y-hidden">
      <div ref={containerRef} className="flex h-screen w-full">
        <section className="panel h-full w-[100vw]" ref={box1Ref}>
          <div className="flex w-full h-full items-center justify-center px-28">
            <div className="w-1/2 h-full flex flex-col justify-center items-start gap-y-2">
              <p className="text-xs">How can we help you</p>
              <h2 className="text-5xl font-semibold text-wrap w-5/12">
                Services We Offer
              </h2>
              <p className="w-8/12">
                We offer a comprehensive range of software development services
                tailored to meet the unique needs of your business. A
                full-service creative agency designing and building inventive
                digital experiences across all platforms and brand touchpoints
              </p>
              <div className="flex  items-center  gap-x-1.5 bg-custom-gradient px-5 py-1.5 rounded-full text-white text-sm font-semibold">
                All Services
                <span className="mt-0.5">
                  <ArrowRight className="size-4" />
                </span>
              </div>
            </div>
            <div className="w-1/2">
              <BigCard
                icon={cardData[0].imageUrl}
                heading={cardData[0].heading}
                content={cardData[0].content}
              />
            </div>
          </div>
        </section>

        <section className="panel  w-[100vw]" ref={box2Ref}>
          <div className="flex w-full h-full items-center justify-center">
            <div className="w-1/2">
              <BigCard
                icon={cardData[1].imageUrl}
                heading={cardData[1].heading}
                content={cardData[1].content}
              />
            </div>
            <div className="w-1/2">
              <BigCard
                icon={cardData[2].imageUrl}
                heading={cardData[2].heading}
                content={cardData[2].content}
              />
            </div>
          </div>
        </section>

        <section className="panel  w-[100vw]" ref={box3Ref}>
          <div className="flex w-full h-full items-center justify-center">
            <div className="w-1/2">
              <BigCard
                icon={cardData[3].imageUrl}
                heading={cardData[3].heading}
                content={cardData[3].content}
              />
            </div>
            <div className="w-1/2">
              <BigCard
                icon={cardData[4].imageUrl}
                heading={cardData[4].heading}
                content={cardData[4].content}
              />
            </div>
          </div>
        </section>

        <section className="panel w-[100vw]" ref={box4Ref}>
          <div className="flex w-full h-full items-center justify-start">
            <div className="w-1/2">
              <BigCard
                icon={cardData[5].imageUrl}
                heading={cardData[5].heading}
                content={cardData[5].content}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page4;
