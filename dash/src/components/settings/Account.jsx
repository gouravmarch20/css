import React from "react";

export const Account = () => {
  return (
    <div className="">
      <div>
        <h1>Account</h1>
        <div>
          <input type="text" />
          <label htmlFor="">Email address</label>
        </div>
        <div>
          <input type="text" />
          <label htmlFor="">Email address</label>
        </div>
        <div>
          <input type="text" />
          <label htmlFor="">Email address</label>
        </div>
      </div>
      <div>
         <button className="bg-transparent hover:bg-red-500">Delete my account </button>
      </div>
    </div>
  );
};
