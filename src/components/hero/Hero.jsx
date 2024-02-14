import React from "react";
import Header from "../heading/Header";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

import "./Hero.css";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="hero">
      <Header />
      <div className="the-best-ad mt-16 bg-[#363d42] rounded-[4rem] w-fit py-[20px] px-[13px] uppercase text-white relative flex items-center justify-start">
        <motion.div
          className="absolute bg-orange-500 w-[5.4rem] h-[80%] left-[8px] rounded-[3rem] z-[1]"
          initial={{ left: "238px" }}
          whileInView={{ left: "8px" }}
          transition={{ ...transition, type: "tween" }}
        ></motion.div>
        <span className="z-[2]">the best fitness Oasis in town</span>
      </div>
      {/* hero heading */}
      <div className="hero-text flex flex-col gap-4 text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white justify-center items-center mt-16 px-8 ">
        <div className="uppercase text-center">
          <span className="stroke-text">Transform your body </span>
          <span>
            , energize your spirit, and achieve your fitness goals at Fitness
            Oasis, where wellness meets luxury
          </span>
        </div>
        {/* <div className="mt-0">
          <span>IDEAL BODY</span>
        </div> */}
        <div className="text-xs md:text-base lg:text-lg xl:text-2xl lg:mt-12 font-[200] transform-none uppercase text-center">
          <span>
            Step into our state-of-the-art facility designed to inspire and
            motivate. With cutting-edge equipment, dynamic group classes, and
            personalized training programs, we cater to every fitness level and
            aspiration. Whether you're a seasoned athlete or just starting your
            fitness journey, our expert trainers and staff are here to guide you
            every step of the way.
          </span>
        </div>
      </div>
      {/* figures */}
      <div className="figures flex gap-8 justify-center items-center mt-8">
        <div className="flex flex-col">
          <span className="text-white text-[2rem] text-center">
            <NumberCounter end={140} start={100} delay="4" preFix="+" />
          </span>
          <span className="text-gray-400 uppercase">expert coaches</span>
        </div>
        <div className="flex flex-col">
          <span className="text-white text-[2rem] text-center">
            <NumberCounter end={978} start={800} delay="4" preFix="+" />
          </span>
          <span className="text-gray-400 uppercase">members joined</span>
        </div>
        <div className="flex flex-col">
          <span className="text-white text-[2rem] text-center">
            <NumberCounter end={50} start={20} delay="4" preFix="+" />
          </span>
          <span className="text-gray-400 uppercase">fitness program</span>
        </div>
      </div>
      {/* hero button */}
      <div className="hero-buttons flex justify-center items-center gap-4 font-normal my-16">
        <button className="btn text-white bg-orange-500 w-[8rem]">
          Get Started
        </button>
        <button className="btn w-[8rem] bg-transparent border-[2px] border-solid border-orange-500 text-white">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
