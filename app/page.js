import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="h-full ">
        <Hero />
      </div>
      <Projects />
      <Footer />
    </div>
  );
}
