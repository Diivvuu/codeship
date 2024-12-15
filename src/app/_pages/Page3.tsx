import React from "react";
import { cardData } from "../constants/page3Card";
import Card from "../_components/Card";

function Page3() {
  return (
    <div className="h-screen w-full flex justify-between items-start px-28 pt-20">
      <div className="w-full">
        <h2 className="font-semibold leading-19 text-5xl mb-4 w-6/12">
          Some of the things we can do for you
        </h2>
        <p className="w-5/12 leading-5">
          We offer a comprehensive range of software development services
          tailored to meet the unique needs of your business.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-x-0 gap-y-8 w-10/12 ">
        {cardData.map((card, index) => (
          <Card
            key={index}
            CardIcon={card.imageUrl}
            CardHeading={card.heading}
            CardContent={card.content}
          />
        ))}
      </div>
    </div>
  );
}

export default Page3;
