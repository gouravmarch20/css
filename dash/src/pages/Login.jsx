import React from "react";
import { Dashbg, LoginForm, Oauth } from "../components";

export const Login = () => {
  return (
    <div className="flex justify-center items-center h-5/6 ">
      <Dashbg />
      <div className="justify-center item-center mx-auto flex-col sm:flex sm:w-4/6">
        <div className="flex flex-col items-center mx-auto justify-between mt-4 sm:items-start  ">
          <h1 className="text-3xl font-bold"> Sign In</h1>
          <div>Sign in to your account</div>
         <Oauth auth='in'/>
        <LoginForm/>

          <div className="px-6">
          Dont have an account ? <span className="text-dash-blue "> Register here </span>
        </div>
        </div>
      </div>
    </div>
  );
};
