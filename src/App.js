import React from "react";
import logo from "./logo.svg";
import "./App.css";

//Edit <code>src/App.js</code> and save to reload. Hello {subject}!

function App(props) {
  console.log(props);
  const subject = props.subject;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the first ReactJS app from Aman. Written on Github and deployed on AWS. Made with &#10084; for Divya!
        </p>
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
