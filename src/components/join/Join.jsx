import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2gr94ss", "template_5he490k", form.current, {
        publicKey: "TpvlaKT84Cl8XwaWK",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="join flex justify-between py-0 px-8 gap-40">
      <div className="left-j text-white text-3xl font-bold uppercase relative ">
        <hr className="absolute w-40 border-[2px] rounded-[20%] border-orange-500 border-solid -my-3" />
        <div className="flex gap-4">
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div className="flex gap-4">
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j flex justify-center items-end">
        <form
          ref={form}
          className="email-container flex gap-12 bg-gray-300 py-4 px-8"
          onSubmit={sendEmail}
        >
          <input
            className="bg-transparent border-none outline-none text-gray-500 placeholder:text-gray-500"
            type="email"
            name="your_email"
            placeholder="Enter your Email"
          />
          <button className="btn btn-j bg-orange-500 text-white">
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
