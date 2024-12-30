import Image from "next/image";
import React, { useState } from "react";

interface CardProps {
  key: number;
  CardIcon: string;
  CardIconHover: string; // Add hover state icon
  CardHeading: string;
  CardContent: string;
}

function Card({
  CardIcon,
  CardIconHover,
  CardHeading,
  CardContent,
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative flex flex-col justify-start items-start w-[90%] min-h-fit h-[80%] shadow-custom-shadow text-black bg-white py-3 p-8 rounded-3xl overflow-hidden transition-transform duration-500 ease-in-out group-hover:bg-custom-gradient group-hover:text-white transform-cpu hover:rotate-[-3deg]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-custom-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Card Content */}
      <div className="relative flex items-center justify-center gap-x-2 pt-2 pb-4 text-transparent bg-clip-text bg-custom-gradient font-semibold group-hover:text-white z-10">
        <div>
          <Image
            src={isHovered ? CardIconHover : CardIcon} // Dynamically switch icons
            alt="icon"
            className=""
          />
        </div>
        <div className="text-3xl font-poppins text-wrap font-medium">
          {CardHeading}
        </div>
      </div>
      <div className="text-lg group-hover:text-white z-10 font-normal">
        {CardContent}
      </div>
    </div>
  );
}

export default Card;
