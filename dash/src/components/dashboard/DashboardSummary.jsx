import React from "react";

export const DashboardSummary = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between">
      <div className="flex flex-col my-2 sm:my-0 bg-green-100 rounded-2xl p-4 sm:w-1/4 mx-2 ">

        <div className=" self-end  ">
          <i className="far fa-lg fa-money-bill "></i>
        </div>
        <div className="mt-4 mb-1">Total Revenues</div>
        <div className="text-2xl font-bold">$ 2,12</div>
      </div>
      <div className="flex flex-col my-2 sm:my-0 bg-green-100 rounded-2xl p-4 sm:w-1/4 mx-2 ">

        <div className=" self-end  ">
          <i className="far fa-lg fa-money-bill "></i>
        </div>
        <div className="mt-4 mb-1">Total Revenues</div>
        <div className="text-2xl font-bold">$ 2,12</div>
      </div>
      <div className="flex flex-col my-2 sm:my-0 bg-purple-500 rounded-2xl p-4 sm:w-1/4 mx-2 ">

        <div className=" self-end  ">
          <i className="far fa-lg fa-money-bill "></i>
        </div>
        <div className="mt-4 mb-1">Total Revenues</div>
        <div className="text-2xl font-bold">$ 2,12</div>
      </div>
      <div className="flex flex-col my-2 sm:my-0 bg-sky-400 rounded-2xl p-4 sm:w-1/4 mx-2 ">

        <div className=" self-end  ">
          <i className="far fa-lg fa-money-bill "></i>
        </div>
        <div className="mt-4 mb-1">Total Revenues</div>
        <div className="text-2xl font-bold">$ 2,12</div>
      </div>
     
    </div>
  );
};
