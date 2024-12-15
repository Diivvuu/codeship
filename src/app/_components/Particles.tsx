import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (main: any) => {
    console.log("Particles Loaded!");
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { zIndex: -1 },
        particles: {
          number: {
            value: 50, // Number of balls
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: ["#FF5733", "#33FF57", "#3357FF", "#F3FF33"], // Ball colors
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 1,
            random: false,
            animation: {
              enable: false,
            },
          },
          size: {
            value: 8, // Ball size
            random: true,
          },
          move: {
            enable: true,
            speed: 3, // Ball speed
            direction: "top", // Move upward
            straight: true, // Ensure a straight path
            outModes: {
              default: "out", // Particles reappear on the other side
            },
          },
        },
        detectRetina: true, // For higher resolution screens
      }}
    />
  );
};

export default ParticleBackground;
