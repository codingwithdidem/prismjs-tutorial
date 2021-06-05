import React, { useEffect } from "react";
import Prism from "prismjs";
import "./App.css";
import "prismjs/themes/prism-shades-of-purple.css";
import Code from "./Code";

const App = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const code = ` const getCoffee = (count) => {
    if(count < 3) {
      return "Here is your ☕";
    } else {
      return "No more babe."
    }
  }
  `;

  return (
    <div className="App">
      <Code code={code} language={"javascript"} />
    </div>
  );
};

export default App;
