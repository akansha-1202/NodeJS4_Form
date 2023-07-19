import React from "react";
import BgImg from "../Others/bg2.jpg";

export default function Home() {
  return (
    <div>
      <img src={BgImg} className="background" alt="backgroundImage" />
      <h1 className="home-content">Welcome to the Home page!</h1>
    </div>
  );
}
