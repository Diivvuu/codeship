import React from "react";

function Page10() {
  return (
    <div className="min-h-[80vh] w-full bg-[#FAFAFA] text-[#282828] flex items-center justify-between px-36 pt-20">
      <div className="flex flex-col items-start py-8 justify-between h-[65vh] w-6/12">
        <div>
          <h1 className="font-semibold text-[4rem]">Let's Talk</h1>
          <a className="text-3xl font-normal tracking-tighter underline">
            support@codeship.in
          </a>
        </div>
        <div className="w-7/12 text-[1.5rem] tracking-tight">
          <p>
            No 1, 1st Floor, Narasimhan St, Jothi Nagar, West Mambalam, Chennai,
            Tamil Nadu 600033
          </p>
          <div className="flex items-center my-4 gap-x-6 justify-start pl-6 text-xl">
            <p className="relative">
              Privacy
              <span className="absolute -left-[0.05rem] right-0 bottom-[-2px] h-[1px] bg-black"></span>
            </p>
            <p className="relative">
              Terms
              <span className="absolute -left-[0.05rem] right-0 bottom-[-2px] h-[1px] bg-black"></span>
            </p>
            <p className="relative">
              Sitemap
              <span className="absolute -left-[0.05rem] right-0 bottom-[-2px] h-[1px] bg-black"></span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end h-[65vh] items-center gap-y-8 pb-12 w-6/12 text-2xl">
        <div className="flex items-center justify-between w-full px-36">
          <div className="relative">
            Home
            <span className="absolute -left-[0.05rem] right-0 bottom-[-2px] h-[1.5px] bg-black"></span>
          </div>
          <div className="relative">
            Solutions
            <span className="absolute -left-[0.05rem] right-0 bottom-[-2px] h-[1.5px] bg-black"></span>
          </div>
        </div>
        <div className="flex items-center justify-between w-full px-36">
          <div className="relative">
            About
            <span className="absolute -left-[0.05rem] right-0 bottom-[-2px] h-[1.5px] bg-black"></span>
          </div>
          <div className="relative">
            Our Works
            <span className="absolute -left-[0.05rem] right-0 bottom-[-2px] h-[1.5px] bg-black"></span>
          </div>
        </div>
        <div className="flex items-center justify-between w-full px-36">
          <div className="relative">
            Capabilities
            <span className="absolute -left-[0.05rem] right-0 bottom-[-2px] h-[1.5px] bg-black"></span>
          </div>
          <div className="relative">
            Contact
            <span className="absolute -left-[0.05rem] right-0 bottom-[-2px] h-[1.5px] bg-black"></span>
          </div>
        </div>
        <div className="text-3xl font-normal mt-12">
          @ 2021 - 2024 Codeship pvt Ltd.
        </div>
      </div>
    </div>
  );
}

export default Page10;
