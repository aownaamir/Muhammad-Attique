import Image from "next/image";
import profilePic from "@/public/images/profile-pic.png";
import nameCircle from "@/public/images/name-circle.png";
import { Rufina } from "next/font/google";

const rufina = Rufina({ subsets: ["latin"], weight: ["400", "700"] });

function Hero() {
  return (
    <div className="pt-20 lg:pt-10 flex flex-col justify-center items-center bg-theme-bg gap-3 xs:gap-16 lg:gap-12">
      {/* <div className="xs:h-[91vh] md:h-[92vh] lg:h-[93vh] flex flex-col justify-center items-center bg-theme-bg gap-3 xs:gap-16 lg:gap-12"> */}

      <div className="flex flex-col items-center">
        <p
          className={`flex justify-center items-center text-theme-red font-bold text-[20px] md:text-[32px] lg:text-[24px] text-center ${rufina.className}`}
        >
          I&apos;m Muhammad Attique, a UI/UX designer
        </p>
        <p
          className={`w-[350px] xs:w-[368px] my-1 md:w-[650px] lg:w-[554px]  leading-tight flex justify-center items-center text-theme-gray font-bold text-[26px] md:text-[40px] lg:text-[40px] text-center ${rufina.className}`}
        >
          A passionate designer eager to design your thoughts into pixel perfect
          reality.
        </p>
        <p
          className={`w-[335px]  lg:w-[398px]  flex justify-center items-center text-theme-red font-bold text-[20px] md:text-[32px] lg:text-[24px] text-center ${rufina.className}`}
        >
          You desire, I design
        </p>
      </div>
      <div className="hidden md:flex lg:hidden items-center justify-center">
        <div
          className={`w-[290px] h-[290px]   bg-center bg-cover flex items-center justify-center relative`}
        >
          <div
            className={`w-[290px] h-[290px]  absolute  bg-center bg-cover flex items-center justify-center rotate-custom`}
            style={{ backgroundImage: `url(${nameCircle.src})` }}
          />
          <Image
            src={profilePic}
            alt="Attique"
            className="w-[250px] h-[250px] absolute rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 xs:gap-16 lg:gap-[280px] justify-center items-center">
        <div className="w-[150px] h-[150px] xs:w-[240px] xs:h-[240px] lg:w-[180px] lg:h-[180px] md:hidden lg:flex items-center justify-center">
          <div
            className={`w-[150px] h-[150px] xs:w-[240px] xs:h-[240px] lg:w-[180px] lg:h-[180px]  bg-center bg-cover flex items-center justify-center relative`}
          >
            <div
              className={`w-[150px] h-[150px] xs:w-[240px] xs:h-[240px] lg:w-[180px] lg:h-[180px] absolute  bg-center bg-cover flex items-center justify-center rotate-custom`}
              style={{ backgroundImage: `url(${nameCircle.src})` }}
            />
            <Image
              src={profilePic}
              alt="Attique"
              className="w-[120px] h-[120px] xs:w-[200px] xs:h-[200px] lg:w-[150px] lg:h-[150px] absolute rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h2
            className={`w-auto text-[22px] xs:text-[32px] md:text-[40px] lg:text-[32px] text-center font-bold text-theme-red pb-1 border-b-2 border-theme-red ${rufina.className}`}
          >
            Recent Work
          </h2>
          <ul
            className={`flex flex-col text-center gap-1 xs:gap-3 lg:gap-1 pt-4 lg:pt-2 text-[20px] xs:text-[24px] md:text-[35px] lg:text-[24px] font-bold text-theme-gray ${rufina.className}`}
          >
            <a href="#Food App Tutorial" className="cursor-pointer">
              <li>Food App Tutorial</li>
            </a>
            <a href="#Hilal Food Service" className="cursor-pointer">
              <li>Hilal Food Service</li>
            </a>
            <a href="#ETHNC Clothing" className="cursor-pointer">
              <li>ETHNC Clothing</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;
