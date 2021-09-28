import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter, onIncrement, onDelete } = this.props;
    return (
      <div>
        <span className={this.badgeColor(counter)}>
          {this.formatCount(counter)}
        </span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm mr-2"
        >
          increament
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount({ value }) {
    return value === 0 ? "ZERO" : value.toString();
  }

  badgeColor({ value }) {
    let badgeClass = "badge m-2 badge-";
    badgeClass += value === 0 ? "warning" : "primary";
    return badgeClass;
  }
}

export default Counter;
