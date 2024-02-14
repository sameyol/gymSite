import React from "react";
import "./Plans.css";
import { TiTick } from "react-icons/ti";
import { GiSelfLove } from "react-icons/gi";
import { FaCrown } from "react-icons/fa";
import { CgGym } from "react-icons/cg";

const Plans = () => {
  return (
    <div className="plans-container my-4">
      <div className="blur w-[32rem] h-[23rem] top-24 left-0"></div>
      <div className="blur w-[32rem] h-[23rem] top-40 right-0"></div>
      <div className="programs-header flex gap-8 font-medium text-[3rem] justify-center text-white uppercase italic flex-col md:flex-row">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>
      {/* plans cards */}
      <div className="plans flex-col md:flex-row gap-4 lg:gap-12">
        <div className="plan">
          <GiSelfLove className="text-orange-500 text-4xl" />
          <span>BASIC PLANS</span>
          <span>$25</span>
          <div className="features flex flex-col gap-4">
            <div className="feature flex items-center gap-1">
              <TiTick className="text-white border-2 border-white rounded-full" />
              <span>2 hours of exercises</span>
            </div>
            <div className="feature flex items-center gap-1">
              <TiTick className="text-white border-2 border-white rounded-full" />
              <span>Free consultation to coaches</span>
            </div>
            <div className="feature flex items-center gap-1">
              <TiTick className="text-white border-2 border-white rounded-full" />
              <span>Access to the community</span>
            </div>
          </div>
          <div>
            <span>See more benefit</span>
          </div>
          <button className="btn">Join Now</button>
        </div>
        <div className="plan">
          <FaCrown className="text-white text-4xl" />
          <span>PREMIUM PLANS</span>
          <span>$30</span>
          <div className="features flex flex-col gap-4">
            <div className="feature flex items-center gap-1">
              <TiTick className="text-white border-2 border-white rounded-full" />
              <span>5 hour of exercises</span>
            </div>
            <div className="feature flex items-center gap-1">
              <TiTick className="text-white border-2 border-white rounded-full" />
              <span>Free concultation of coaches</span>
            </div>
            <div className="feature flex items-center gap-1">
              <TiTick className="text-white border-2 border-white rounded-full" />
              <span>Access to minibar</span>
            </div>
          </div>
          <div>
            <span>See more benefit</span>
          </div>
          <button className="btn text-orange-500">Join Now</button>
        </div>
        <div className="plan">
          <CgGym className="text-orange-500 text-4xl" />
          <span>PRO PLANS</span>
          <span>$45</span>
          <div className="features flex flex-col gap-4">
            <div className="feature flex items-center gap-1">
              <TiTick className="text-white border-2 border-white rounded-full" />
              <span>8 hours of exercises</span>
            </div>
            <div className="feature flex items-center gap-1">
              <TiTick className="text-white border-2 border-white rounded-full" />
              <span>Consultation of private coaches</span>
            </div>
            <div className="feature flex items-center gap-1">
              <TiTick className="text-white border-2 border-white rounded-full" />
              <span>Free Fitness Merchandises</span>
            </div>
          </div>
          <div>
            <span>See more benefit</span>
          </div>
          <button className="btn">Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
