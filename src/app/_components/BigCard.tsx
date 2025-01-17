import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface BigCardProps {
  icon: string;
  heading: string;
  content: string;
  cardView: boolean;
}

const BigCard: React.FC<BigCardProps> = ({
  icon,
  heading,
  content,
  cardView,
}) => {
  const iconRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh(); // Refreshes ScrollTrigger to recalculate positions
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const forceRedraw = () => {
      if (iconRef.current) {
        iconRef.current.style.opacity = "0"; // Temporarily hide
        iconRef.current.offsetHeight; // Trigger a reflow
        iconRef.current.style.opacity = "1"; // Make visible again
      }
    };

    window.addEventListener("resize", forceRedraw);

    return () => {
      window.removeEventListener("resize", forceRedraw);
    };
  }, []);

  useEffect(() => {
    if (cardView && iconRef.current) {
      // Animate icon from left to right
      gsap.to(iconRef.current, {
        x: "90%", // Move to the extreme right of the card
        duration: 1, // Adjust duration as needed
        ease: "linear",
        scrollTrigger: {
          trigger: iconRef.current, // Attach animation to this icon
          start: "top bottom", // Start animation as soon as the card is in view
          end: "top 20%", // End animation at this scroll position
          scrub: 1, // No syncing with scroll; runs immediately
          invalidateOnRefresh: true,
          onEnter: () => console.log(`${heading} card entered`),
          onLeave: () => console.log(`${heading} card left`),
        },
        // onStart : ()=> iconRef.current?.style.willChange = "transform",
      });
    }
  }, [cardView, heading]);

  return (
    <div className="min-h-60 md:min-h-80 min-w-[36rem] w-[90%] h-[60%] bg-white rounded-3xl shadow-custom-shadow flex px-12 py-8 flex-col items-start justify-center gap-y-10">
      <div ref={iconRef} className="relative w-full">
        <Image src={icon} alt="icon" />
      </div>
      <div className="text-5xl font-medium">{heading}</div>
      <div
        style={{ wordSpacing: "0.1rem" }}
        className="text-wrap text-xl font-normal text-[#737373]"
      >
        {content}
      </div>
      <p className="flex items-center font-medium text-xl text-[#504CA0]">
        Read More
        <span className="mt-0.5">
          <ChevronRight className="size-3.5" style={{ strokeWidth: "3" }} />
        </span>
      </p>
    </div>
  );
};

export default BigCard;
