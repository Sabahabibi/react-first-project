import React from "react";
import "./Button.css";

// function handleBtnClick() {
//   console.log("click");
// }

export default function Button({ text, clickHandler, type }) {
  return (
    <button
      onClick={clickHandler}
      className={`clickBtn ${
        type === "error"
          ? "error-btn"
          : type === "warn"
          ? "warn-btn"
          : type === "secondry"
          ? "secondry-btn"
          : type === "primary-outline"
          ? "primary-outline-btn"
          : "primary-btn"
      }`}
    >
      {text}
    </button>
  );
}
