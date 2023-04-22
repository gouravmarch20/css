import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import chartdata from "../../data/chartData.json";
export const TopProduct = () => {
  const [month, setMonth] = useState("May-June");
  const months = [
    "May-June",
    "July-August",
    "August-September",
    "September-October",
  ];
  const [dataSet, setDataSet] = useState({
    sale: [50, 25, 25],
    product: ["Basic Trees", "Custom Short Plants", "Super Hoodies"],
  });
  let data = {
    datasets: [
      {
        data: dataSet.sale,
        backgroundColor: ["green", "red", "yellow"],
        border: "none",
      },
    ],
  };
  useEffect(() => {
    for (let key in chartdata) {
      if (key == month)
        setDataSet((prev) => ({ ...prev, sale: chartdata[key]["sale"] }));
    }
  }, [month]);

  ChartJS.register(ArcElement, Legend);

  const dataHandler = (e) => {
    setMonth(e.target.value);
  };
  return (
    <div className="sm:w-1/2 rounded-lg my-2 sm:my-0 py-2 px-4 sm:mr-4 bg-white">
      <div className="flex  ">
        <div className="grow font-medium">Top Products</div>
        <select
          value={month}
          onChange={dataHandler}
          className="border-none bg-white text-slate-500 text-sm focus:outline-none w-24"
        >
          {months.map((month) => (
            <option value={month}>{month}</option>
          ))}
        </select>
      </div>
      <div className="flex   justify-around">
        <div className="w-1/3 h-48">
          <Pie data={data} />
        </div>

        <div className="w-1/2  flex  items-start flex-col mt-4  ">
          <div className="flex  justify-center items-center ">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="font-medium">Basic Trees</span>
          </div>
          <p className="ml-4 text-sm text-slate-500 ">{dataSet.sale[0]}</p>
        <div className="w-1/2  flex  items-start flex-col mt-4  ">
          <div className="flex  justify-center items-center ">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="font-medium">Basic Trees</span>
          </div>
          <p className="ml-4 text-sm text-slate-500 ">{dataSet.sale[0]}</p>
        </div>
        </div>
      </div>
    </div>
  );
};
