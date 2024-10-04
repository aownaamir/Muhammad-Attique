import Image from "next/image";
import profilePic from "@/public/images/profile-pic.png";
import nameCircle from "@/public/images/name-circle.png";

function Hero() {
  return (
    <div className="h-screen lg:h-[93vh] flex flex-col justify-center items-center bg-theme-bg gap-16 lg:gap-12">
      <div className="flex flex-col  items-center">
        <p className="flex justify-center items-center text-theme-red font-bold text-[20px] md:text-[32px] lg:text-[24px] text-center">
          I&apos;m Attique Jutt, a UI/UX designer
        </p>
        <p className="w-[368px] my-1 md:w-[650px] lg:w-[554px]  leading-tight flex justify-center items-center text-theme-gray font-bold text-[26px] md:text-[40px] lg:text-[40px] text-center">
          An passionate designer eager to design your thoughts into pixel
          perfect reality.
        </p>
        <p className="w-[335px]  lg:w-[398px]  flex justify-center items-center text-theme-red font-bold text-[20px] md:text-[32px] lg:text-[24px] text-center">
          You desire, I design
        </p>
      </div>
      <div className="hidden md:flex lg:hidden items-center justify-center">
        <div
          className={`w-[290px] h-[290px]   bg-center bg-cover flex items-center justify-center rotate-custom`}
          style={{ backgroundImage: `url(${nameCircle.src})` }}
        >
          <Image
            src={profilePic}
            alt="Attique"
            className="w-[250px] h-[250px]  rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  gap-16 lg:gap-[280px]">
        <div className="md:hidden lg:flex items-center justify-center">
          <div
            className={`w-[240px] h-[240px] lg:w-[180px] lg:h-[180px]  bg-center bg-cover flex items-center justify-center rotate-custom`}
            style={{ backgroundImage: `url(${nameCircle.src})` }}
          >
            <Image
              src={profilePic}
              alt="Attique"
              className="w-[200px] h-[200px] lg:w-[150px] lg:h-[150px] rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-[32px] md:text-[40px] lg:text-[32px] text-center font-bold text-theme-red pb-1 border-b-2 border-theme-red">
            Recent Work
          </h2>
          <ul className="flex flex-col text-center gap-3 lg:gap-1 pt-4 lg:pt-2 text-[24px] md:text-[35px] lg:text-[24px] font-bold text-theme-gray">
            <li>Food App Tutorial</li>
            <li>Hilal Food Service</li>
            <li>ETHNC Clothing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;
