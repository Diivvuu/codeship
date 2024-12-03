"use client";
import "./globals.css";
import Header from "./_components/Header";
import Page1 from "./_pages/Page1";
import Page2 from "./_pages/Page2";
import Page3 from "./_pages/Page3";
import Page4 from "./_pages/Page4";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <div
        style={{ zIndex: "9999" }}
        className="h-screen w-full bg-black z-20"
      ></div>
    </div>
  );
}
