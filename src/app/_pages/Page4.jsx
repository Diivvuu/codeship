"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BigCard from "../_components/BigCard";
import { cardData } from "../constants/page4Card";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Page4 = () => {
  const [cardViewStates, setCardViewStates] = useState(
    Array(cardData.length).fill(false)
  );

  const containerRef = useRef(null);
  const boxRefs = useRef([]); // Dynamic refs for each panel

  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");

    // Horizontal Scroll
    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 0.1,
        end: () =>
          `+=${containerRef.current.scrollWidth - window.innerWidth * 6}`,
      },
    });

    // Animations for each section
    boxRefs.current.forEach((box, index) => {
      if (box) {
        gsap.to(box, {
          opacity: 1, // Example animation
          scale: 1,
          ease: "power1",
          scrollTrigger: {
            trigger: box,
            containerAnimation: scrollTween,
            start: "center 75%",
            scrub: true,
            onEnter: () => {
              setCardViewStates((prev) =>
                prev.map((view, i) => (i === index ? true : view))
              );
            },
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative flex-col justify-start h-[450vh] w-[800vw] overflow-y-hidden">
      <div ref={containerRef} className="flex h-screen w-full">
        <section className="panel h-full w-[50vw]">
          <div className="flex w-full h-full items-center justify-center px-28">
            <div className="h-full flex flex-col justify-center items-start gap-y-2">
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
          </div>
        </section>
        {cardData.map((card, index) => (
          <section
            key={index}
            className="panel w-[50vw]"
            ref={(el) => (boxRefs.current[index] = el)}
          >
            <div className="flex w-full h-full items-center justify-center">
              <BigCard
                icon={card.imageUrl}
                heading={card.heading}
                content={card.content}
                cardView={cardViewStates[index]}
              />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Page4;
