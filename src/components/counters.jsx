import React from "react";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    const { onDelete, onIncrement, onReset, counters, onDecrement } =
      this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm mb-3" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
