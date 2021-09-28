import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <NavBar />
      </div>
      <main className="container mt-3 main-container">
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;
