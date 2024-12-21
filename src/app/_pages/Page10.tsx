import React from "react";

function Page10() {
  return (
    <div className="min-h-[50vh] w-full bg-white text-[#282828] flex items-center justify-between px-28 pt-20">
      <div className="flex flex-col items-start py-8 justify-between h-[65vh] w-6/12">
        <div>
          <h1 className="font-bold text-5xl">Let's Talk</h1>
          <a className="text-xl underline">support@codeship.in</a>
        </div>
        <div className="w-7/12 text-lg">
          <p>
            No 1, 1st Floor, Narasimhan St, Jothi Nagar, West Mambalam, Chennai,
            Tamil Nadu 600033
          </p>
          <div className="flex items-center my-6 gap-x-6 justify-start pl-6">
            <p className="text-base relative">
              Privacy
              <span className="absolute -left-[0.05rem] right-0 bottom-[-2px] h-[1px] bg-black"></span>
            </p>
            <p className="text-base relative">
              Terms
              <span className="absolute -left-[0.05rem] right-0 bottom-[-2px] h-[1px] bg-black"></span>
            </p>
            <p className="text-base relative">
              Sitemap
              <span className="absolute -left-[0.05rem] right-0 bottom-[-2px] h-[1px] bg-black"></span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end h-[65vh] items-center gap-y-8 pb-12 w-6/12">
        <div className="flex items-center justify-between w-full px-36">
          <div className="text-lg relative">
            Home
            <span className="absolute -left-[0.05rem] right-0 bottom-[-2px] h-[1px] bg-black"></span>
          </div>
          <div className="text-lg relative">
            Solutions
            <span className="absolute -left-[0.05rem] right-0 bottom-[-2px] h-[1px] bg-black"></span>
          </div>
        </div>
        <div className="flex items-center justify-between w-full px-36">
          <div className="text-lg relative">
            About
            <span className="absolute -left-[0.05rem] right-0 bottom-[-2px] h-[1.5px] bg-black"></span>
          </div>
          <div className="text-lg relative">
            Our Works
            <span className="absolute -left-[0.05rem] right-0 bottom-[-2px] h-[1.5px] bg-black"></span>
          </div>
        </div>
        <div className="flex items-center justify-between w-full px-36">
          <div className="text-lg relative">
            Capabilities
            <span className="absolute -left-[0.05rem] right-0 bottom-[-2px] h-[1px] bg-black"></span>
          </div>
          <div className="text-lg relative">
            Contact
            <span className="absolute -left-[0.05rem] right-0 bottom-[-2px] h-[1.1px] bg-black"></span>
          </div>
        </div>
        <div className="text-xl mt-12">@ 2021 - 2024 Codeship pvt Ltd.</div>
      </div>
    </div>
  );
}

export default Page10;
