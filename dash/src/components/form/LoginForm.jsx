import React from "react";

export const LoginForm = () => {
  return (
    <form className=" mx-2  sm:w-full   bg-white flex flex-col  justify-center items-center my-5 rounded-lg py-8 px-5 ">
      <label htmlFor="email" className="self-start ">
        Email Address
      </label>
      <input
        type="email"
        id="email"
        className="bg-slate-100 px-2 py-1  w-full "
      />
      <label htmlFor="password" className="self-start ">
        Password
      </label>
      <input
        type="password"
        id="password"
        className="bg-slate-100 px-2 py-1  w-full "
      />

      <button className="text-dash-blue my-1  self-start ">
        Forgot password ?
      </button>

      <button className="w-full bg-dash-blue text-white rounded-md 	py-1 ">
        Dummy Login
      </button>
        <button className="w-full bg-dash-blue text-white rounded-md 	py-1 my-2 ">
          Sign in
        </button>
    </form>
  );
};
