import React from "react";
import { CgGym } from "react-icons/cg";
import { FaRunning, FaArrowRight } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import { GiLoveHowl } from "react-icons/gi";

import "./Programs.css";

const Programs = () => {
  return (
    <div className="programs flex flex-col gap-8 py-0 px-8" id="programs">
      {/* header */}
      <div className="programs-header flex gap-20 font-medium text-[3rem] justify-center text-white uppercase italic flex-col md:flex-row">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      {/*  */}
      <div className="category grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <div className="flex flex-col bg-gray-500 p-8 gap-4 text-white justify-between grid-cols-1 md:grid">
          <CgGym className="w-8 h-8 text-white" />
          <span className="text-4 font-bold">Strength Training</span>
          <span className="text-[0.9rem] lh">
            In this program, you are trained to improve your strength through
            many exercises.
          </span>
          <div className="join-now flex items-center gap-4">
            <span>Join Now</span>
            <FaArrowRight />
          </div>
        </div>
        <div className="flex flex-col bg-gray-500 p-8 gap-4 text-white justify-between grid-cols-1 md:grid">
          <FaRunning className="w-8 h-8 text-white" />
          <span className="text-4 font-bold">Cardio Training</span>
          <span className="text-[0.9rem] lh">
            In this program, you are trained to do sequential moves in range of
            20 until 30 minutes.
          </span>
          <div className="join-now flex items-center gap-4">
            <span>Join Now</span>
            <FaArrowRight />
          </div>
        </div>
        <div className="flex flex-col bg-gray-500 p-8 gap-4 text-white justify-between grid-cols-1 md:grid">
          <AiFillFire className="w-8 h-8 text-white" />
          <span className="text-4 font-bold">Fat Burning</span>
          <span className="text-[0.9rem] lh">
            This program is suitable for you who wants to get rid of your fat
            and lose their weight.
          </span>
          <div className="join-now flex items-center gap-4">
            <span>Join Now</span>
            <FaArrowRight />
          </div>
        </div>
        <div className="flex flex-col bg-gray-500 p-8 gap-4 text-white justify-between grid-cols-1 md:grid">
          <GiLoveHowl className="w-8 h-8 text-white" />
          <span className="text-4 font-bold">Health Fitness</span>
          <span className="text-[0.9rem] lh">
            This programs is designed for those who exercise only for their body
            fitness not body building.
          </span>
          <div className="join-now flex items-center gap-4">
            <span>Join Now</span>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
