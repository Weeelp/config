import React, { useState } from "react";
import "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import fireDogPng from "@/assets/fireDog.jpg";

// import "./App.module.scss";

export const App = () => {
  const [click, setClick] = useState(0);

  const changeNumber = () => setClick((e) => e + 1);

  return (
    <div>
      <h1>PLATFORM = {__PLATFORM__}</h1>
      <div>
        <input type="range"></input>
        <br />
        <img width={200} src={fireDogPng} alt="" />
      </div>
      <Link to={"/about"}>about</Link>
      <br />
      <Link to={"/shop"}>shop</Link>
      <h1>{click}</h1>
      <button onClick={changeNumber}>
        {" "}
        <span>click</span>{" "}
      </button>
      <Outlet />
    </div>
  );
};
