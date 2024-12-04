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
          onEnter: () => console.log(`${heading} card entered`),
          onLeave: () => console.log(`${heading} card left`),
        },
        // onStart : ()=> iconRef.current?.style.willChange = "transform",
      });
    }
  }, [cardView, heading]);

  return (
    <div className="w-full min-h-80 max-w-[36rem] rounded-xl shadow-custom-shadow flex px-9 py-8 flex-col items-start justify-center gap-y-3">
      <div ref={iconRef} className="relative w-full">
        <Image width={50} height={60} src={icon} alt="icon" />
      </div>
      <div className="text-2xl font-semibold">{heading}</div>
      <div className="text-wrap text-[#737373]">{content}</div>
      <p className="flex items-center font-semibold text-[#504CA0]">
        Read More
        <span className="mt-0.5">
          <ChevronRight className="size-3.5" style={{ strokeWidth: "3" }} />
        </span>
      </p>
    </div>
  );
};

export default BigCard;
