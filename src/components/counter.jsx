import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.badgeColor()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm mr-2"
        >
          increament
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "ZERO" : value.toString();
  }

  badgeColor() {
    const { value } = this.props.counter;
    let badgeClass = "badge m-2 badge-";
    badgeClass += value === 0 ? "warning" : "primary";
    return badgeClass;
  }
}

export default Counter;
