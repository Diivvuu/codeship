import React, { useEffect } from "react";
import ParticleBackground from "@/app/_components/Particles"; // Import the particle background component
import dribble from "@/app/assets/dribbleicon.png";
import instagram from "@/app/assets/instagramicon.png";
import linkedin from "@/app/assets/linkedinicon.png";
import twitter from "@/app/assets/twittericon.png";
import Image from "next/image";

const Fields = [
  "Web Development",
  "App Development",
  "CRM & Tools",
  "Digital Marketing",
  "UI/UX Design",
  "AMC",
  "Servers & Hosting",
  "Other Services",
];

const iconsList = [
  { el: dribble, name: "dribble" },
  { el: instagram, name: "instagram" },
  { el: linkedin, name: "linkedin" },
  { el: twitter, name: "twitter" },
];

const Page9 = () => {
  // Add and remove particle background only for this page using useEffect
  useEffect(() => {
    // The body is the element where the particles will be applied
    document.body.style.overflow = "hidden"; // Disable body scroll to ensure the particles are not affected by scrolling

    // Cleanup effect to remove background when leaving this page
    return () => {
      document.body.style.overflow = "auto"; // Re-enable scrolling when leaving this page
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-white pt-12 px-28 relative">
      {/* <ParticleBackground /> */}
      <div className="text-5xl font-[550]">Have an innovative thought?</div>
      <div className="w-full flex justify-center items-start my-8">
        <div className="w-5/12 text-3xl font-normal">Tell us about it.</div>
        <div className="w-7/12 flex flex-col justify-center items-start gap-y-4 h-full">
          <div className="flex justify-center items-center w-full gap-x-20">
            <div className="flex flex-col items-start justify-center w-full gap-y-6">
              <p className="text-base">Name & Company</p>
              <input className="border-b-[1.5px] border-black w-full" />
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-y-6">
              <p className="text-base">E-mail id</p>
              <input className="border-b-[1.5px] border-black w-full" />
            </div>
          </div>
          <div className="flex justify-center items-center w-full gap-x-20">
            <div className="flex flex-col items-start justify-center w-full gap-y-6">
              <p className="text-base">Mobile Number</p>
              <input className="border-b-[1.5px] border-black w-full" />
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-y-6">
              <p className="text-base">Subject</p>
              <input className="border-b-[1.5px] border-black w-full" />
            </div>
          </div>
          <div className="w-full">
            <p className="my-2 text-base">I'm interested in</p>
            <div className="w-full flex flex-wrap gap-x-4 gap-y-3 mt-6">
              {Fields.map((item, index) => (
                <div
                  className="border-[1.5px] text-xs border-black rounded-3xl min-w-[9.9rem] text-center py-1"
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full mt-2">
            <p className="text-base">Tell us more about your project</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-5/12">
          <div className="font-[500] text-lg">Follow us on :</div>
          <div className="flex items-center gap-x-2 mt-4">
            {iconsList.map((item, index) => {
              return (
                <Image src={item.el} alt={item.name} height={35} width={35} />
              );
            })}
          </div>
        </div>
        <div className="w-7/12">
          <input className="border-b-[1.5px] border-black w-full mt-4" />
          <div className="bg-custom-gradient mt-6 text-white rounded-3xl px-8 py-1 text-sm w-fit">
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page9;
