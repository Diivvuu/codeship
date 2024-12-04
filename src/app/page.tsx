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

export default function Home() {
  return (
    // <ReactLenis root options={{ lerp: 0.5, duration: 1, smoothWheel: true }}>
    <div className="overflow-hidden">
      <Header />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
    </div>
    // </ReactLenis>
  );
}
