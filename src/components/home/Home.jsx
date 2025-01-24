import React from "react";
import Aside from "./Aside/Aside";
import Form from "./Form/Form";
import Header from "./Header/Header";
import "./Home.css";
import Profile from "./Profile/Profile";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <div className="cartContainer">
        <Aside />
        <Form />
      </div>
      <Profile />
    </div>
  );
}
