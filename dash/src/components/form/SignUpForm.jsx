import React, { useState } from "react";
import "./form.css";

export const SignUpForm = () => {
  const [isEyeOpen, setEyeOpen] = useState(false);
  return (
    <form className="mx-2 sm:w-5/6 sm:mx-0 bg-white flex justify-center items-center flex-col my-5 rounded-lg py-8 px-5 ">
      <div className="flex justify-between items-center w-full ">
        <div className="flex flex-col ">
          <label htmlFor="firstName" className="self-start">
            first name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="py-1 px-2 w-4/5 rounded-md  bg-slate-200"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName" className="self-start">
            last name
          </label>
          <input
            type="text"
            name="lastName"
            id=""
            className="py-1 px-2 rounded-md w-4/5  bg-slate-100 mx-2"
          />
        </div>
      </div>
      {/* <div className="flex flex-col "> */}
      <label htmlFor="email" className="self-start">
        email address
      </label>
      <input
        type="text"
        name="email"
        id=""
        className="bg-slate-100 w-full py-1 px-2"
      />
      {/* </div> */}
      {/*  */}
      {/* <div className="   self-start "> */}
      <label htmlFor="password " className="self-start">
        password{" "}
      </label>
      <div className="relative w-full ">
        <input
          type={isEyeOpen ? "text" : "password"}
          name="password"
          id=""
          className="bg-slate-100 py-1 px-2   w-full   "
        />
        {/* </div> */}

        <i
          className={isEyeOpen ? "fa fa-eye" : "fa fa-eye-slash"}
          onClick={() => setEyeOpen((prev) => !prev)}
        ></i>
      </div>
      <div className="w-full  ">
        <label htmlFor="password " className="self-start">
          Confirm Password{" "}
        </label>
        <div className="relative">
          <input
            type={isEyeOpen ? "text" : "password"}
            name="password"
            id=""
            className="self-start bg-slate-100 py-1 px-2   w-full"
          />
          <i
            className={isEyeOpen ? "fa fa-eye" : "fa fa-eye-slash"}
            onClick={() => setEyeOpen((prev) => !prev)}
          ></i>
        </div>
      </div>
      {/*  */}
      <div className="flex items-center my-1 justify-between ">
        <input type="checkbox" name="checkbox" id="" className="mr-4" />
        <label htmlFor="terms-and-condition">
          I agree to the <span className="text-dash-blue">terms and condition </span>
        </label>
      </div>
      <button className="bg-dash-blue py-1 my-2 w-full rounded-md text-white ">
        Sign Up
      </button>
    </form>
  );
};
