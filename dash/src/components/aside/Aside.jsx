import React from "react";
import "./aside.css";
export const Aside = () => {
  return (
    <div className="hidden bg-dash-blue fixed sm:block w-3/5 sm:static sm:w-1/5  sm:m-5 sm:rounded-3xl h-[92vh] text-white ">
      {/* Aside */}
      {/* <div className="flex flex-col px-12 justify-between  "> */}
      <div className="h-1/6  flex text-3xl font-bold justify-center flex-col ml-9">
        Dash{" "}
      </div>

      <ul className=" ml-9 h-3/6">
        {/*TODO: can use nav link */}
        <a
          href="#"
          className="flex items-center my-6 text-lg font-bold leading-5 cursor-pointer block "
        >
          <i className="far fa-regular fa-chart-pie mr-2"></i>
          <span>Dashboard</span>
        </a>
        <a
          href="#"
          className="flex items-center my-6 text-lg font-bold leading-5 cursor-pointer block "
        >
          <i className="far fa-regular fa-chart-pie mr-2"></i>
          <span>Transactions</span>
        </a>
        <a
          href="#"
          className="flex items-center my-6 text-lg font-bold leading-5 cursor-pointer block "
        >
          <i className="far fa-regular fa-chart-pie mr-2"></i>
          <span>Schedule</span>
        </a>
        <a
          href="#"
          className="flex items-center my-6 text-lg font-bold leading-5 cursor-pointer block "
        >
          <i className="far fa-regular fa-chart-pie mr-2"></i>
          <span>Users</span>
        </a>
        <a
          href="#"
          className="flex items-center my-6 text-lg font-bold leading-5 cursor-pointer block "
        >
          <i className="far fa-regular fa-chart-pie mr-2"></i>
          <span>Setting</span>
        </a>
      </ul>
      <div className="h-2/6 ml-9  ">
         <div className="h-1/3"></div>
         <ul >
            <li className="mb-2">Help</li>
            <li>Contact</li>
         </ul>

      </div>
      {/* </div> */}
    </div>
  );
};
