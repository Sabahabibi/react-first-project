import React from "react";
import "./Aside.css";
import Lists from "./Lists/Lists";
import Offer from "./Offer/Offer";

export default function Aside() {
  return (
    <div className="aside-container">
      <div className="offer-container">
        <p>Copy</p>
        <Offer />
      </div>

      <Lists />
    </div>
  );
}
