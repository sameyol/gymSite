import "./Reasons.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/cover.jpg";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";

import { TiTick } from "react-icons/ti";

import { SiAdidas, SiNike, SiNewbalance } from "react-icons/si";

const Reasons = () => {
  return (
    <div className="reasons gap-4 my-16 flex-col md:flex-row" id="reasons">
      <div className="left-r">
        <img src={img1} alt="" />
        <img src={img4} alt="" />
        <img src={img3} alt="" />
        <img src={img2} alt="" />
      </div>
      <div className="right-r uppercase gap-4 flex flex-col">
        <span className="text-orange-500 font-normal">Some Reasons</span>
        <div>
          <span className="stroke-text why">why </span>
          <span className="why">choose us?</span>
        </div>

        <div className="details-r gap-4">
          <div className="flex gap-4 items-center mb-4">
            <TiTick className="text-orange-500 border-4 border-orange-500 rounded-full" />
            <span className="text-base">OVER 140+ EXPERT COACHES</span>
          </div>
          <div className="flex gap-4 items-center mb-4">
            <TiTick className="text-orange-500 border-4 border-orange-500 rounded-full" />
            <span className="text-base">
              TRAIN SMARTER AND FASTER THAN BEFORE
            </span>
          </div>
          <div className="flex gap-4 items-center mb-4">
            <TiTick className="text-orange-500 border-4 border-orange-500 rounded-full" />
            <span className="text-base">1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div className="flex gap-4 items-center mb-4">
            <TiTick className="text-orange-500 border-4 border-orange-500 rounded-full" />
            <span className="text-base">RELIABLE PARTNERS</span>
          </div>
        </div>
        <span className="text-gray-500 font-normal">OUR PARTNERS</span>

        <div className="partner flex gap-4">
          <SiNewbalance className="text-[2.5rem]" />
          <SiAdidas className="text-[2.5rem]" />
          <SiNike className="text-[2.5rem]" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
