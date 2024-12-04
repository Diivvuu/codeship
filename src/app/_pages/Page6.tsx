// page6.tsx or page6.js
import Image from "next/image"; // for optimized images

const Page6 = () => {
  return (
    <div className="bg-black text-white h-screen flex items-center justify-center">
      {/* Tech Stack Grid Layout */}
      {/* <div className="h-[100vh] bg-black"></div> */}
      <div className="grid grid-cols-6 grid-rows-6 gap-4 w-full max-w-5xl">
        {/* Empty boxes */}
        <div className="bg-white p-12"></div>
        <div className="bg-white p-12"></div>
        <div className="bg-white p-12"></div>
        <div className="bg-white p-12"></div>
        <div className="bg-white p-12"></div>
        <div className="bg-white p-12"></div>

        <div className="bg-white p-12"></div>
        <div className="bg-white p-12">
          <Image src="/path/to/aws-logo.png" alt="AWS" width={50} height={50} />
        </div>
        <div className="bg-white p-12"></div>

        <div className="bg-white p-12">
          <Image
            src="/path/to/react-logo.png"
            alt="React"
            width={50}
            height={50}
          />
        </div>
        <div className="bg-white p-12">
          <Image src="/path/to/aws-logo.png" alt="AWS" width={50} height={50} />
        </div>
        <div className="bg-white p-12">
          <Image
            src="/path/to/node-logo.png"
            alt="Node"
            width={50}
            height={50}
          />
        </div>

        <div className="bg-white p-12"></div>
        <div className="bg-white p-12"></div>
        <div className="bg-white p-12"></div>
        <div className="bg-white p-12">
          <Image
            src="/path/to/angular-logo.png"
            alt="Angular"
            width={50}
            height={50}
          />
        </div>
        <div className="bg-white p-12"></div>
        <div className="bg-white p-12"></div>

        {/* Central Text */}
        <div className="col-span-6 row-span-6 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold mb-4">
            Amazing tech stack in our pocket
          </h2>
          <p className="text-lg">
            Utilize our team's specialized full-stack expertise in software
            development to turn your product vision into reality. We are
            committed to providing solutions that adhere to the highest coding
            standards, ensuring reliability, scalability, and security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page6;
