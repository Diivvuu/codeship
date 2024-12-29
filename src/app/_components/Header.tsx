import logo1 from "@/app/assets/logo 1.svg";
import Image from "next/image";

function Header() {
  return (
    <div className="flex w-full bg-[#fafafa] fixed top-0 z-50 justify-between items-center h-[15vh] py-12 px-12 pr-20">
      <div>
        <Image src={logo1} alt="logo" width={300} />
      </div>
      <div>
        <div className="flex justify-center text-2xl font-light items-center gap-x-12 text-[#282828]">
          <div className="text-transparent font-semibold bg-clip-text bg-custom-gradient">
            Home
          </div>
          <div className="">About</div>
          <div className="">Services</div>
          <div className="">Solutions</div>
          <div className="">Our Works</div>
          <div className="">Contact</div>
          <a>
            <div className="flex items-center justify-center gap-x-2 bg-custom-gradient text-xl py-4 px-9 mx-4 rounded-full text-white">
              <div className="bg-green-600 h-2 w-2 rounded font-light" />
              Let's Talk!
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
