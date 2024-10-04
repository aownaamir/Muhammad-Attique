import Image from "next/image";
import { Rufina } from "next/font/google";
import projects from "./../data/data";

const rufina = Rufina({ subsets: ["latin"], weight: ["400", "700"] });

function Projects() {
  return (
    <div className=" pb-5 px-4 lg:pb-1 bg-theme-bg flex justify-center items-center flex-col">
      {projects.map((item) => (
        <div
          key={item.id}
          className="flex mt-24 mb-2 justify-center items-center flex-col"
          id={`${item.title}`}
        >
          <h1
            className={`text-[30px] md:text-[35px] lg:text-[30px] font-bold flex justify-center items-center text-theme-gray ${rufina.className}`}
          >
            {item.title}
          </h1>
          <h3
            className={`w-[330px] md:w-[480px]  lg:w-[414px] mt-2 font-bold text-[20px] md:text-[25px] lg:text-[20px]  flex justify-center items-center text-theme-red text-center ${rufina.className}`}
          >
            {item.description}
          </h3>
          {item.type === "phone" ? (
            <div className="w-[240px] xs:w-[310px] md:w-[293px] lg:w-[890px] py-5 mt-6 lg:mt-8 flex whitespace-nowrap justify-center items-center gap-5 lg:gap-10 overflow-x-scroll overflow-y-hidden custom-scrollbar">
              {item.images.map((item, i) => (
                <div
                  key={Math.random()}
                  className={`w-[220px] h-[490px] xs:w-[275px] xs:h-[609px] lg:w-[185px] lg:h-[391px] custom-shadow border-4 border-black rounded-3xl flex flex-none justify-center items-center overflow-hidden translate-x-[360px] xs:translate-x-[442px] md:translate-x-[442px] lg:translate-x-0 `}
                >
                  <Image src={item} alt={`${item}`} className="w-full h-full" />
                </div>
              ))}
            </div>
          ) : (
            <div>
              <Image src={item.images} alt="desktop" className="lg:w-[550px]" />
            </div>
          )}
          <a href={item.link} targer="_blank">
            <p
              className={`mt-10 text-md md:text-lg lg:text-md italic text-theme-red underline ${rufina.className}`}
            >
              View figma design &#8594;
            </p>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
