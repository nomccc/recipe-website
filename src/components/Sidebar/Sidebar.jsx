import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoAddCircleOutline, IoBookOutline,IoPencilOutline, IoTrashBinOutline, IoLogOutOutline } from "react-icons/io5";


const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-1/6 h-auto shadow-xl ">
        <h1 className="pt-16 pb-6 text-center font-bold text-lg">
          Halo, Avivah
        </h1>

        <div className="w-full bg-orange-500 text-center py-3 my-2 ">
          <h1 className="font-medium text-white">DASHBOARD</h1>
        </div>
        <div className="flex flex-col px-auto items-start ms-8  gap-y-5">
          <div className="flex flex-row justify-center items-center  gap-2 hover:text-orange-500 hover:font-semibold py-2 mt-5">
            <span className="">
              <IoAddCircleOutline />
            </span>
            <Link to={"/createRecipe"}>Create Recipe</Link>
          </div>
          <div className="flex flex-row justify-center items-center gap-2 hover:text-orange-500 hover:font-semibold py-2">
            <span className="">
              <IoBookOutline/>
            </span>
            <Link to={"/readRecipe"} >
              Recipe
            </Link>
          </div>
          <div className="flex flex-row justify-center items-center gap-2 hover:text-orange-500 hover:font-semibold py-2 mb-8">
            <span className="">
              <IoLogOutOutline/>
            </span>
          <Link to={"#"} >
            Logout
          </Link>
          </div>
        </div>
      </div>
      <div className="flex-1  relative container m-10">
        <h1>{children}</h1>
      </div>
    </div>
  );
};

export default Sidebar;
