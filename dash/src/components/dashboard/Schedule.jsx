import React from "react";

export const Schedule = () => {
  return (
    <div className="sm:w-1/2 rounded-lg py-2 px-4 sm:ml-4 bg-white ">
      <div className="flex ">
        <div className="grow font-medium ">Today schedule</div>
        <div className="text-sm text-slate-500">see all</div>
      </div>

      <div className="flex my-2 ml-2 ">
        <div className="bg-green-500 w-1 h-auto mr-2 "></div>

        <div className=" grow ">
          <h6 className="font-sm text-slate-500 text-sm">Meeting with supplier  </h6>
          <small className="block text-slate-500">2.000 - 4.0 </small>
          <small className="block text-slate-500">at sunset road </small>
        </div>
      </div>
      <div className="flex my-2 ml-2 ">
        <div className="bg-pink-900 w-1 h-auto mr-2 "></div>

        <div className=" grow ">
          <h6 className="font-sm text-slate-500 text-sm">Meeting with supplier  </h6>
          <small className="block text-slate-500">2.000 - 4.0 </small>
          <small className="block text-slate-500">at sunset road </small>
        </div>
      </div>
    </div>
  );
};
