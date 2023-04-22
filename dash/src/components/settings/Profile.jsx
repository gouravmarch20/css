import React from "react";
import profilePhoto from "../../assets/profileDP.png";

export const Profile = () => {
  return (
    <div className=" px-4 mx-4 sm:mx-0 sm:w-6/12 bg-white rounded-lg p-8 h-full">
      <div className="font-medium">Profile</div>

      <div className="flex flex-col sm:flex-row my-5  ">
        <div className="flex flex-col items-center mx-3  ">
          <img
            src={profilePhoto}
            alt=""
            srcset=""
            className="rounded-full w-20"
          />
          <button className="rounded-md px-2 my-2 border-solid border-black border-2">
            changer
          </button>
        </div>

        <div>
          <div className="flex ">
            <div className="flex flex-col ">
              <label htmlFor="">first name </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-slate-200 w-4/5  p-1 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">last name </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-slate-200 w-4/5  p-1 rounded-lg "
              />
            </div>
          </div>
          <div className="flex flex-col mt-1">
            <label htmlFor="">Date of birth </label>
            <input
              type="date"
              name=""
              id=""
              className="bg-slate-200 p-1 rounded-lg"
            />
          </div>
          <div className="flex flex-col mt-1">
            <label htmlFor="">Phone no </label>
            <input
              type="number"
              name=""
              id=""
              className="bg-slate-200 p-1 rounded-lg"
            />
          </div>
          <div className="flex flex-col mt-1">
            <label htmlFor="">Address </label>
            <input
              type="text"
              name=""
              id=""
              className="bg-slate-200  p-1 rounded-lg"
            />
          </div>
          <div className="flex bg-red-300 mt-2">
            <button className="bg-dash-blue self-end ml-auto">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};
