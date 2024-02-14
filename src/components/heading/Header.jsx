import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-scroll";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleNavbar = () => {
    setMenuOpened(!menuOpened);
  };

  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition text-white">
        <ul className="text-center text-xl p-20">
          <li className="my-4 py-4 cursor-pointer hover:text-orange-500">
            <Link to="header" spy={true} smooth={true}>
              Home
            </Link>
          </li>
          <li className="my-4 py-4 cursor-pointer hover:text-orange-500">
            <Link to="Programs" spy={true} smooth={true}>
              Programs
            </Link>
          </li>
          <li className="my-4 py-4 cursor-pointer hover:text-orange-500">
            <Link to="reasons" spy={true} smooth={true}>
              Why Us
            </Link>
          </li>
          <li className="my-4 py-4 cursor-pointer hover:text-orange-500">
            <Link to="plans" spy={true} smooth={true}>
              Plans
            </Link>
          </li>
          <li className="my-4 py-4 cursor-pointer hover:text-orange-500">
            <Link to="testimonials" spy={true} smooth={true}>
              Testimonials
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div className="bg-white sticky top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between px-8">
        <div className="flex items-center flex-1">
          <img
            src={logo}
            alt="logo"
            className="bg-white rounded-full w-[15%]"
          />
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-[10]">
            <ul className="flex gap-8 lg:text-xl">
              <li className="cursor-pointer hover:text-orange-500 transition hover:border-b-2 hover:border-orange-500">
                <Link to="header" spy={true} smooth={true}>
                  Home
                </Link>
              </li>
              <li className="cursor-pointer hover:text-orange-500 transition hover:border-b-2 hover:border-orange-500">
                <Link to="Programs" spy={true} smooth={true}>
                  Programs
                </Link>
              </li>
              <li className="cursor-pointer hover:text-orange-500 transition hover:border-b-2 hover:border-orange-500">
                <Link to="reasons" spy={true} smooth={true}>
                  Why Us
                </Link>
              </li>
              <li className="cursor-pointer hover:text-orange-500 transition hover:border-b-2 hover:border-orange-500">
                <Link to="plans" spy={true} smooth={true}>
                  Plans
                </Link>
              </li>
              <li className="cursor-pointer hover:text-orange-500 transition hover:border-b-2 hover:border-orange-500">
                <Link to="testimonials" spy={true} smooth={true}>
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>{menuOpened && content}</div>
        <button
          className="block my-auto sm:hidden transition text-[30px]"
          onClick={toggleNavbar}
        >
          {menuOpened ? <MdClose /> : <MdMenu className="" />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
