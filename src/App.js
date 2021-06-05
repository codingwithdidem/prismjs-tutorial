import React, { useEffect } from "react";
import Prism from "prismjs";
import "./App.css";
import "prismjs/themes/prism-shades-of-purple.css";

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
      <pre>
        <code className="language-javascript">{code}</code>
      </pre>
    </div>
  );
};

export default App;
