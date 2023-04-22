import React from "react";
import { Dashbg, LoginForm, Oauth, SignUpForm } from "../components";

export const Signup = () => {
  return (
    <div className="flex justify-center items-center h-4/6">
      <Dashbg />
      <div className="   flex-col  justify-center items-center  sm:flex sm:w-4/6">
        <div className=" flex flex-col items-center mx-auto justify-between mt-4 sm:w-4/6  ">
          <div className="flex flex-col items-center mx-auto justify-between mt-4 sm:items-start ">

          <h1 className="text-3xl font-bold ">Create an account</h1>
          <div className="">Create an acc to use dashbord</div>

          <Oauth />
          <SignUpForm />
          <div className=" my-2 mx-10">
            Dont have an account ? <span>
              Register here
            </span>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};
