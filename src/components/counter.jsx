import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: this.props.counter,
  };

  render() {
    console.log("props:", this.props);
    return (
      <div>
        <span className={this.badgeColor()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.handleIncrement();
          }}
          className="btn btn-secondary btn-sm"
        >
          increament
        </button>
        <button
          onClick={() => this.props.onDelete(this.state.counter.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }

  handleIncrement = () => {
    const { value } = this.state.counter;
    this.setState({ counter: { value: value + 1 } });
  };

  formatCount() {
    const { value } = this.state.counter;
    return value === 0 ? "ZERO" : value.toString();
  }

  badgeColor() {
    const { value } = this.state.counter;
    let badgeClass = "badge m-2 badge-";
    badgeClass += value === 0 ? "warning" : "primary";
    return badgeClass;
  }
}

export default Counter;
