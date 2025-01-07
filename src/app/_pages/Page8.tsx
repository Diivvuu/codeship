"use client";
import Image from "next/image";
import React from "react";
import customerImg1 from "@/app/assets/customerImg1.png";
import customerLogo1 from "@/app/assets/customerLogo1.png";
import Page8Right from "@/app/assets/Page8Right.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Page8() {
  return (
    <div className="bg-[#FAFAFA] flex items-center h-screen w-full px-36">
      <div className="w-7/12 flex flex-col justify-center h-full gap-y-12 items-start">
        <div className="text-[#282828] text-4xl font-semibold leading-tight">
          Hear What Our <br /> Customers Are Saying!
        </div>
        <div className="text-lg text-[#1C3433] font-normal w-full pr-28 leading-relaxed">
          "Working with Codeship Pvt Ltd to design and develop our eCommerce
          website has been an absolute game-changer for our business. The team
          was professional, responsive, and truly understood our vision. The
          website they delivered is not only visually stunning but also fast,
          secure, and easy to navigate. Sales have significantly increased
          thanks to the seamless user experience and mobile optimization. We
          couldn&apos;t be happier with the results, and we highly recommend
          Codeship for anyone looking for a high-quality, custom-built eCommerce
          solution."
        </div>
        <div className="flex justify-between w-11/12">
          <div className="flex items-center gap-x-4">
            <div>
              <Image src={customerImg1} alt="customerImg1" />
            </div>
            <div className="flex flex-col justify-center items-start text-xl font-semibold">
              <div>Suyash Sharma</div>
              <div>Founder, Factory Mode</div>
            </div>
          </div>
          <div>
            <Image src={customerLogo1} alt="customerLogo1" />
          </div>
        </div>
        <div className="flex items-center gap-x-8">
          <div className="bg-custom-gradient rounded-full text-white p-3.5">
            <ChevronLeft className="size-6 pr-0.5" />
          </div>
          <div className="bg-custom-gradient rounded-full text-white p-3.5">
            <ChevronRight className="size-6 pl-0.5" />
          </div>
        </div>
      </div>
      <div className="w-5/12 flex justify-center items-center">
        <Image src={Page8Right} alt="bg" />
      </div>
    </div>
  );
}

export default Page8;
