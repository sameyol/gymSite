import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/data";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

import { motion } from "framer-motion";

const Testimonials = () => {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className="testimonials my-4 flex gap-4 px-8 py-0">
      <div className="left-t flex flex-[1 1] gap-8 flex-col uppercase text-white">
        <span className="text-orange-500 font-bold">Testimonial</span>
        <span className="stroke-text font-bold text-5xl">What They</span>
        <span className=" font-bold text-5xl">Say About Us</span>
        <span className="text-justify">
          {testimonialsData[selected].review}
        </span>
        <span>
          <span className="text-orange-500">
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="absolute w-[17rem] h-[20rem] border-[2px] border-orange-500 bg-transparent right-[9rem] top-[0.9rem]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ transition }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute w-[17rem] h-[17rem] object-cover right-32 top-8"
          src={testimonialsData[selected].image}
          alt=""
        />
        <div className="arrows text-white">
          <FaLongArrowAltLeft
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1);
            }}
          />
          <FaLongArrowAltRight
            onClick={() => {
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
