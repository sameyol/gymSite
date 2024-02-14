import "./Footer.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container relative">
      <hr className=" border-2 border-gray-300 border-solid" />
      <div className="footer px-8 py-4 flex flex-col gap-16 items-center justify-center h-80">
        <div className="social-links flex gap-16">
          <FaGithub className="w-8 h-8 cursor-pointer text-white" />
          <FaInstagram className="w-8 h-8 cursor-pointer text-white" />
          <FaLinkedin className="w-8 h-8 cursor-pointer text-white" />
        </div>
        <div className="logo-f">
          <img className="w-40" src={logo} alt="" />
        </div>
      </div>
      <div className="blur bottom-0 right-[15%] w-[26rem] h-[12rem] bg-red-500 blur-f"></div>
      <div className="blur blur-f bottom-0 left-[15%] w-[26rem] h-[12rem] bg-orange-400"></div>
    </div>
  );
};

export default Footer;
