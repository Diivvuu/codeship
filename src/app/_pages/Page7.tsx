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
    <div className="max-h-screen h-screen w-full bg-black pt-4">
      <h2 className="text-center text-4xl text-white my-6 font-semibold">
        Our Latest Projects
      </h2>
      <div>
        <Swiper
          slidesPerView={1.8} // Show one full-width slide and partial sides
          spaceBetween={80} // Space between slides
          centeredSlides={true} // Center the active slide
          initialSlide={1} // Start with Slide 2 as the center
          // pagination={{ clickable: true }}
          // modules={[Pagination]}
          className="mySwiper"
          loop={true}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="h-[28rem]">
                <div className="relative h-[90%] bg-[#504CA0] flex flex-col items-center justify-center rounded-2xl shadow-lg scale-[1] transition-transform duration-300">
                  <div>Slide {index + 1}</div>
                </div>
                <div className="absolute bottom-5 -left-5">
                  <div className="text-3xl font-semibold text-white text-left text-wrap w-60 pr-4">
                    {project.title}
                  </div>
                  <div className="flex justify-center text-center space-x-4 mt-2 text-gray-600">
                    {project.categories.map((category, catIndex) => (
                      <span
                        key={catIndex}
                        className="px-2 py-1 bg-white rounded-full"
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
      <div className="flex justify-center w-full mt-4 text-center">
        <button className="px-6 py-1 flex items-center gap-x-3 bg-custom-gradient rounded-3xl text-white">
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
