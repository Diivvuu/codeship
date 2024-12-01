import "./globals.css";
import Header from "./_components/Header";
import Page1 from "./_pages/Page1";
import Page2 from "./_pages/Page2";
import Page3 from "./_pages/Page3";
import Page4 from "./_pages/Page4";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page3 />
    </div>
  );
}
