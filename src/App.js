import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    // const counters = this.state.counters.map((counter) => {
    //   if (counterId === counter.id) {
    //     counter.value = counter.value - 1;
    //   }
    //   return counter;
    // });
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
    console.log("On delete event called: ", counterId);
  };

  handleIncrement = (updateCounter) => {
    const counters = [...this.state.counters];
    const counterIndex = counters.indexOf(updateCounter);
    counters[counterIndex] = { ...updateCounter };
    counters[counterIndex].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <NavBar
            totalCounters={
              this.state.counters.filter((counter) => counter.value > 0).length
            }
          />
        </div>
        <main className="container mt-3 main-container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
