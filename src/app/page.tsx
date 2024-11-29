import Image from "next/image";
import Header from "./_components/Header";
import Page1 from "./_pages/Page1";
import Page2 from "./_pages/Page2";
import Page3 from "./_pages/Page3";

export default function Home() {
  return (
    <div>
      <Header />
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  );
}
