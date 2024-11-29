import Image from "next/image";
import heroImage from "@/app/assets/hero-right.png";
import Hero1Logos from "@/app/assets/hero1-logos.png";

function Page1() {
  return (
    <>
      <div className="flex items-center justify-center gap-x-12 h-[80vh] w-full">
        <div className="flex flex-col items-start gap-y-4 w-5/12">
          <div className="text-4xl">
            A global development company providing comprehensive <br />{" "}
            solutions for innovative brands.
          </div>
          <div>
            <button className="bg-custom-gradient text-white px-8 py-2 rounded-2xl">
              Let's Talk
            </button>
          </div>
        </div>
        <div className="w-5/12">
          <Image src={heroImage} alt="heroImg" />
        </div>
      </div>
      <div>
        <Image src={Hero1Logos} alt="logos" />
      </div>
    </>
  );
}

export default Page1;
