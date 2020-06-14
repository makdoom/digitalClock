import React, { useState } from "react";
import "./App.css";

const App = () => {
  // using Hooks to set the time

  let [hours, setHours] = useState(new Date().getHours());
  let [minutes, setMinutes] = useState(new Date().getMinutes());
  let [seconds, setSeconds] = useState(new Date().getSeconds());

  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours !== 0 && hours < 10 ? "0" + hours : 12; // Hour 0 should be 12
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  setInterval(() => {
    setHours(new Date().getHours());
    setMinutes(new Date().getMinutes());
    setSeconds(new Date().getSeconds());
  }, 1000);
  // console.log(`${hours}: ${minutes}:${currentTime.getSeconds()} ${ampm}`);
  // }, 1000);

  return (
    <div className="App">
      <div className="upper-body">Digital Clock</div>
      <div className="lower-body"></div>
      <div className="clock">
        <h2>
          <span className="hours">{hours}</span> :{" "}
          <span className="minutes">{minutes}</span> :{" "}
          <span className="seconds">{seconds}</span>
          <span className="format"> {ampm}</span>
        </h2>
      </div>
    </div>
  );
};

export default App;
