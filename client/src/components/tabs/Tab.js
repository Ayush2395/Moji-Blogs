import React, { useState } from "react";
import AllCat from "./categories/AllCat";
import TechCat from "./categories/LearnCat";

export const Tab = () => {
  const [inActive, setInActive] = useState("all");
  return (
    <>
      <div className=" w-100 sticky top-0">
        <h1 className="text-6xl mb-10">Blog Categories</h1>
        <ul className="categories flex justify-between items-center space-x-2 w-72">
          <li
            onClick={() => setInActive("all")}
            className={`px-2 py-1 rounded-md w-full hover:cursor-pointer text-white ${
              inActive !== "all"
                ? "border border-solid border-success text-dark"
                : "all bg-success"
            }`}
          >
            All
          </li>
          <li
            onClick={() => setInActive("learn")}
            className={`px-2 py-1 rounded-md w-full hover:cursor-pointer text-white ${
              inActive !== "learn"
                ? "border border-solid border-success text-dark"
                : "learn bg-success"
            } `}
          >
            Learn
          </li>
          {/* <li className="px-2 py-1 rounded-md border border-solid border-success w-full hover:cursor-pointer text-dark">
            Technology
          </li> */}
        </ul>
        <div className="output">
          {inActive === "all" ? <AllCat /> : <TechCat />}
        </div>
      </div>
    </>
  );
};
