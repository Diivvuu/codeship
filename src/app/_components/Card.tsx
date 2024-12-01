import Image from "next/image";
import React from "react";

interface CardProps {
  key: number;
  CardIcon: string;
  CardHeading: string;
  CardContent: string;
}

function Card({ CardIcon, CardHeading, CardContent }: CardProps) {
  return (
    <div className="group relative flex flex-col justify-start items-start w-60 min-h-fit py-2 pb-6 shadow-sm text-black bg-white px-5 rounded-3xl overflow-hidden transition-transform duration-500 ease-in-out group-hover:bg-custom-gradient group-hover:text-white transform-cpu hover:rotate-[-3deg]">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-custom-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Card Content */}
      <div className="relative flex items-center justify-center gap-x-2 pt-2 pb-4 text-transparent bg-clip-text bg-custom-gradient font-semibold group-hover:text-white z-10">
        <div>
          <Image height={22} width={22} src={CardIcon} alt="icon" />
        </div>
        <div className="text-xl text-wrap">{CardHeading}</div>
      </div>
      <div className="text-xs group-hover:text-white z-10">{CardContent}</div>
    </div>
  );
}

export default Card;
