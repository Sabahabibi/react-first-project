import React from "react";
import Button from "./Button/Button";
import "./Form.css";
import Inputs from "./Inputs/Inputs";

export default function Form() {
  function loger() {
    console.log("loger");
  }

  function sendEmail() {
    console.log("sendEmail");
  }

  return (
    <div className="FormContainer">
      <h1>URGENCY STATMENT</h1>
      <Inputs />
      <Button text="problem" clickHandler={sendEmail} type="primary-outline" />
      <Button text="click" clickHandler={loger} />
      <Button text="send" clickHandler={sendEmail} type="secondry" />
      <Button text="Help" clickHandler={sendEmail} type="warn" />
      <Button text="problem" clickHandler={sendEmail} type="error" />
    </div>
  );
}
