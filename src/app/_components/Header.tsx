import logo1 from "@/app/assets/logo 1.svg";
import Image from "next/image";

function Header() {
  return (
    <div className="flex justify-between items-center py-6 px-16">
      <div>
        <Image src={logo1} alt="logo" />
      </div>
      <div>
        <div className="flex justify-center items-center gap-x-10 text-[#282828]">
          <a className="text-transparent bg-clip-text bg-custom-gradient">
            Home
          </a>
          <a>About</a>
          <a>Services</a>
          <a>Solutions</a>
          <a>Our Works</a>
          <a>Contact</a>
          <a>
            <div className="flex items-center justify-center gap-x-2 bg-custom-gradient py-2 px-4 rounded-full text-white text-base">
              <div className="bg-green-600 h-2 w-2 rounded"></div>
              Let's Talk!
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
