"use client";
import { useEffect, useState } from "react";
import "./globals.css";
import Header from "./_components/Header";
import Page1 from "./_pages/Page1";
import Page2 from "./_pages/Page2";
import Page3 from "./_pages/Page3";
import Page4 from "./_pages/Page4";
import Page5 from "./_pages/Page5";
import Page6 from "./_pages/Page6";
import Lenis from "lenis";
import ReactLenis from "lenis/react";
import Page7 from "./_pages/Page7";
import Page8 from "./_pages/Page8";
import Page9 from "./_pages/Page9"; // Ensure this is imported correctly
import Page10 from "./_pages/Page10";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
      <Page9 /> {/* Particle background will only be on this page */}
      <Page10 />
    </div>
  );
}
