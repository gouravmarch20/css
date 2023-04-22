import React from "react";
import {
  Aside,
  LoginForm,
  Oauth,
  Header,
  Profile,
  Account,
} from "../components";

export const Setting = () => {
  return (
    <div className="flex ">
      <Aside />
      <div className="w-full mt-8">
        <Header title="Settings" />
        <div className="flex justify-around flex-col sm:flex-row">
          <Profile />
          <Account />
        </div>
      </div>
    </div>
  );
};
