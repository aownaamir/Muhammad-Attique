import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-between overflow-y-hidden">
      <div className="h-full overflow-y-scroll">
        <Hero />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
