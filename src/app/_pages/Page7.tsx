import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { MoveRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  categories: string[];
  imageSrc: string;
}

const Page7: React.FC = () => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false); // Ensure Swiper runs only on the client
  }, []);

  if (isSSR) return null;

  // Data for the slides
  const projects: Project[] = [
    {
      title: "Soyvita Landing Page",
      description: "A responsive and modern landing page design.",
      categories: ["UI/UX", "Website", "E-commerce"],
      imageSrc: "path-to-image1.jpg", // Replace with actual image path
    },
    {
      title: "Project 2",
      description: "Another project description.",
      categories: ["UI/UX", "Website", "E-commerce"],
      imageSrc: "path-to-image2.jpg", // Replace with actual image path
    },
    {
      title: "Project 3",
      description: "Yet another project with different features.",
      categories: ["UI/UX", "Website", "E-commerce"],
      imageSrc: "path-to-image3.jpg", // Replace with actual image path
    },
    {
      title: "Soyvita Landing Page",
      description: "A responsive and modern landing page design.",
      categories: ["UI/UX", "Website", "E-commerce"],
      imageSrc: "path-to-image1.jpg", // Replace with actual image path
    },
    {
      title: "Project 2",
      description: "Another project description.",
      categories: ["UI/UX", "Website", "E-commerce"],
      imageSrc: "path-to-image2.jpg", // Replace with actual image path
    },
    {
      title: "Project 3",
      description: "Yet another project with different features.",
      categories: ["UI/UX", "Website", "E-commerce"],
      imageSrc: "path-to-image3.jpg", // Replace with actual image path
    },
    {
      title: "Soyvita Landing Page",
      description: "A responsive and modern landing page design.",
      categories: ["UI/UX", "Website", "E-commerce"],
      imageSrc: "path-to-image1.jpg", // Replace with actual image path
    },
    {
      title: "Project 2",
      description: "Another project description.",
      categories: ["UI/UX", "Website", "E-commerce"],
      imageSrc: "path-to-image2.jpg", // Replace with actual image path
    },
    {
      title: "Project 3",
      description: "Yet another project with different features.",
      categories: ["UI/UX", "Website", "E-commerce"],
      imageSrc: "path-to-image3.jpg", // Replace with actual image path
    },
    // Add more projects as needed
  ];

  return (
    <div className="max-h-screen h-full w-full bg-black pt-4">
      <h2 className="text-center text-6xl text-white mt-8 mb-16 font-semibold">
        Our Latest Projects
      </h2>
      <div>
        <Swiper
          slidesPerView={1.8} // Show one full-width slide and partial sides
          spaceBetween={90} // Space between slides
          centeredSlides={true} // Center the active slide
          initialSlide={1} // Start with Slide 2 as the center
          // pagination={{ clickable: true }}
          // modules={[Pagination]}
          className="mySwiper"
          loop={true}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="min-h-[70vh]">
              <div className="h-[70vh]">
                <div className="relative h-[90%] bg-[#504CA0] flex flex-col items-center justify-center rounded-3xl shadow-lg scale-[1] transition-transform duration-300">
                  <div>Slide {index + 1}</div>
                </div>
                <div className="absolute bottom-11 -left-5">
                  <div className="text-6xl font-semibold text-white text-left text-wrap w-60 pr-4">
                    {project.title}
                  </div>
                  <div className="flex justify-center text-center space-x-4 mt-4 text-gray-600">
                    {project.categories.map((category, catIndex) => (
                      <span
                        key={catIndex}
                        className="min-w-32 px-2 py-2 bg-white rounded-full text-base font-normal"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center w-full pb-12 text-center">
        <button className="px-12 py-3 flex items-center gap-x-3 bg-custom-gradient rounded-3xl text-white font-medium text-xl tracking-wider">
          View All
          <span>
            <MoveRight className="w-6 h-6" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Page7;
