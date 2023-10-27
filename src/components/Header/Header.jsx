import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-full flex p-4">
      <div className="basis-1/4 px-4 flex justify-start items-center">
        <img src="img/logo.png" alt="" className="w-32" />
      </div>
      <div className="basis-2/4 flex justify-center items-center">
        <ul className="flex gap-7 font-semibold">
          <Link to="/">Beranda</Link>
          <li>
            <a href="#">Resep</a>
          </li>
          <li>
            <a href="#">Tentang Kami</a>
          </li>
        </ul>
      </div>
      <div className="basis-1/4 px-4 flex justify-end items-center">
        <Link to={"/login"}>
          <Button
            className="px-4 py-2 bg-orange-400 hover:bg-orange-500 rounded-md font-medium text-sm text-white"
            id={"loginBtn"}
            text={"Login"}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
