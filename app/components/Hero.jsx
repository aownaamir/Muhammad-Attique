import Image from "next/image";
import profilePic from "@/public/images/profile-pic.png";
import nameCircle from "@/public/images/name-circle.png";

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center bg-theme-bg">
      <div className="mt-10 lg:mt-8 flex flex-col  items-center">
        <p className=" w-[283px] h-[45px] lg:w-[335px] lg:h-[50px] flex justify-center items-center text-theme-red font-bold text-[20px] lg:text-[24px]">
          Lorem ipsum dolor sit amet
        </p>
        <p className=" w-[368px] h-[116px] lg:w-[554px] lg:h-[167px] leading-tight flex justify-center items-center text-theme-gray font-bold text-[26px] lg:text-[40px] text-center">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Cras interdum
        </p>
        <p className=" w-[335px] h-[45px] lg:w-[398px] lg:h-[50px] flex justify-center items-center text-theme-red font-bold text-[20px] lg:text-[24px]">
          I&apos;m Attique Jutt, a UI/UX designer
        </p>
      </div>
      <div className="flex flex-col lg:flex-row mt-16 lg:mt-9 gap-16 lg:gap-[280px]">
        <div className="flex items-center justify-center">
          <div
            className={`w-[240px] h-[240px] lg:w-[180px] lg:h-[180px]  bg-center bg-cover flex items-center justify-center`}
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
          <h2 className="text-[32px] text-center font-bold text-theme-red pb-1 border-b-2 border-theme-red">
            Recent Work
          </h2>
          <ul className="flex flex-col text-center gap-3 lg:gap-1 pt-4 lg:pt-2 text-[24px] font-bold text-theme-gray">
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
