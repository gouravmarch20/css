import React, { useEffect, useState } from "react";
import { Aside, Header, Pagination, Loader } from "../components";
import profilePhoto from "../assets/profileDP.png";
export const User = () => {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const searchHandler = (e) => {
    setSearchText(e.target.value);
  };
  const getSearchedData = (arr, query) => {
    return arr.filter((ar) => {
      const q2 = query.toLowerCase();
      return (
        ar.name.toLowerCase().includes(q2) ||
        ar.email.toLowerCase().includes(q2)
      );
    });
  };
  const searchedText = getSearchedData(users, searchText);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);

  return (
    <div className="flex">
      <Aside />
      <div className="w-full mt-6 ">
        <Header title={"Users"} />
        <div className="bg-white rounded-lg sm:w-11/12 flex flex-col sm:p-6 mt-6 ">
          <div className="flex  ">
            <h1>User Records</h1>
            <div className="self-end ml-auto flex space-x-2 	sm:mt-auto mt-7 sm:mr-5">
              <div className="relative  ">
                <input
                  type="text"
                  name=""
                  id=""
                  onChange={searchHandler}
                  placeholder="search in table"
                  className="bg-slate-200 py-1 px-2 rounded-lg"
                />
                <i className="fa fa-search"></i>
              </div>
              <button className=" border-solid border-2  rounded-md border-blue-900 px-3">
                <i className=" far fa-regular fa-filter mr-1"></i>
                Filter
              </button>
              <div className="bg-dash-blue text-white rounded-md px-2 flex px-4">
                <button>+ Add</button>
              </div>
            </div>
          </div>
          <div>
            {users?.length ? (
              <div>
                {searchedText.map((user, i) => {
                  return (
                    <li
                      key={i}
                      className="flex justify-around w-full text-xs sm:text-base odd:bg-slate-100 even:bg-slate-300 py-3 px-2 rounded-md my-4 "
                    >
                      <img
                        src={profilePhoto}
                        alt="profile pho"
                        className="rounded-full w-5 h-5 sm:w-10 sm:h-10 mr-1 "
                      />
                      <div className="sm:ml-4 sm:w-2/6 sm:place-items-start  ">
                        {user.name}
                      </div>
                      <div className="sm:w-2/6 sm:place-items-start ">
                        {user.email}
                      </div>
                      <div>Male</div>
                      <div>Admin</div>
                    </li>
                  );
                })}
              </div>
            ) : (
              "looder"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
