import React from "react";
import {
  Aside,
  Header,
  DashboardSummary,
  Activities,
  TopProduct,
  Schedule,
} from "../components";

export const Dashboard = () => {
  return (
    <div className="flex  ">
      <Aside />
      <div className=" sm:w-5/6 mt-6 mx-3 sm:ml-2 ">
        <Header title={"Dashboard"} />
        <div className="ml-8 mt-2">
          <DashboardSummary />
        </div>
        <Activities />
        <div className="flex flex-col sm:flex-row sm:justify-between mt-4">
          <TopProduct />
          <Schedule />
        </div>
      </div>
    </div>
  );
};
