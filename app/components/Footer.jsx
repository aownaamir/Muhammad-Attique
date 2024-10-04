import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { BiLogoGmail } from "react-icons/bi";
function Footer() {
  return (
    <div className="h-[60px] w-full bg-theme-bg flex flex-col justify-center items-center">
      <div className="w-[94%] mb-2 border-2 border-theme-red"></div>
      <ul className="w-full flex pl-16 lg:pl-20 gap-5 text-xl">
        <li>
          <a target="_black" href="attique.officialwork@gmail.com">
            <BiLogoGmail />
          </a>
        </li>
        <li>
          <a
            target="_black"
            href="https://www.instagram.com/whois.attique?igsh=MWtyaGZyaHg4aTZz"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            target="_black"
            href="https://www.linkedin.com/in/muhammad-attique-43a67b285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            <CiLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
