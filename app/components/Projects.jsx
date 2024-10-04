import fa1 from "@/public/images/FoodApp1.jpeg";
import fa2 from "@/public/images/FoodApp2.jpeg";
import fa3 from "@/public/images/FoodApp3.jpeg";
import fa4 from "@/public/images/FoodApp4.jpeg";
import Image from "next/image";
import projects from "./../data/data";

function Projects() {
  return (
    <div className="pt-[170px] px-4 bg-theme-bg flex justify-center items-center flex-col">
      {projects.map((item) => (
        <div
          key={item.id}
          className="flex mt-24 mb-2 justify-center items-center flex-col"
        >
          <h1 className="text-[30px] font-bold flex justify-center items-center text-theme-gray">
            {item.title}
          </h1>
          <h3 className="lg:w-[414px] text-[20px] flex justify-center items-center text-theme-red text-center">
            {item.description}
          </h3>
          <div className="w-[290px] lg:w-[870px]  flex whitespace-nowrap mt-9 justify-center items-center gap-5 lg:gap-10 overflow-x-scroll overflow-y-hidden custom-scrollbar">
            {item.images.map((item) => (
              <div
                key={Math.random()}
                className="w-[275px] h-[609px] lg:w-[185px] lg:h-[391px] border-4 border-black rounded-3xl flex flex-none justify-center items-center overflow-hidden translate-x-[442.8px] lg:translate-x-0"
              >
                <Image src={item} alt={`${item}`} className="w-full h-full" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
