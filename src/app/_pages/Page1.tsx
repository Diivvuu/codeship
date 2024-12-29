import Image from "next/image";
import heroImage from "@/app/assets/hero-right.png";
import Hero1Logos from "@/app/assets/hero1-logos.png";

function Page1() {
  return (
    <>
      <div className="flex items-center bg-[#fafafa] justify-between mt-[15vh] pt-[10vh] h-[80vh] w-full pl-36 pr-12">
        <div className="flex flex-col items-start gap-y-12 w-7/12">
          <div className="text-[3.4rem] font-medium leading-tight">
            A global development company providing comprehensive <br />{" "}
            solutions for innovative brands.
          </div>
          <div>
            <button className="bg-custom-gradient text-white text-2xl px-[3.5rem] py-5 rounded-3xl">
              Let's Talk
            </button>
          </div>
        </div>
        {/* <div className="w-1/12" /> */}
        <div className="w-6/12">
          <Image className="h-full w-full" src={heroImage} alt="heroImg" />
        </div>
      </div>
      <div>
        <Image src={Hero1Logos} alt="logos" />
      </div>
    </>
  );
}

export default Page1;
