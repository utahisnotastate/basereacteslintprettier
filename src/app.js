import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./app.css";

function App() {
  useEffect(() => {
    Promise.resolve(console.log("it works"))
      .then(() => {
        const test = "hello";
      })
      .catch((error) => console.log(error));
  });
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
