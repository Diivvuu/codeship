import React from "react";
import { cardData } from "../constants/page3Card";
import Card from "../_components/Card";

function Page3() {
  return (
    <div className="bg-[#FAFAFA] h-screen w-full flex justify-between items-start px-36 pt-16">
      <div className="w-full">
        <h2 className="font-semibold text-6xl mb-4 w-8/12">
          Some of the things we can do for you
        </h2>
        <p className=" text-2xl w-7/12">
          We offer a comprehensive range of software development services
          tailored to meet the unique needs of your business.
        </p>
      </div>
      <div className="grid grid-cols-2 w-full h-full">
        {cardData.map((card, index) => (
          <Card
            key={index}
            CardIcon={card.imageUrl}
            CardIconHover={card.imageUrl1}
            CardHeading={card.heading}
            CardContent={card.content}
          />
        ))}
      </div>
    </div>
  );
}

export default Page3;
