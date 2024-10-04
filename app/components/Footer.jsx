import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { BiLogoGmail } from "react-icons/bi";
function Footer() {
  return (
    <div className="h-[60px] w-full bg-theme-bg flex flex-col justify-center items-center">
      <div className="w-[94%] mb-2 border-2 border-theme-red"></div>
      <div className="w-full flex pl-16 lg:pl-20 gap-5 text-xl">
        <BiLogoGmail />
        <FaInstagram />
        <CiLinkedin />
      </div>
    </div>
  );
}

export default Footer;
