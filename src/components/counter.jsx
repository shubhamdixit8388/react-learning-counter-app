import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };
    
    render() { 
        return (<React.Fragment>
            <span className={this.badgeColor()}>{this.formatCount()}</span>
            <button onClick={() => {this.handleIncrement({id: 1})}} className="btn btn-secondary btn-sm">increament</button>
            <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
            </React.Fragment>);
    }

    handleIncrement = product => {
        console.log(product);
        this.setState({count: this.state.count + 1});
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'ZERO' : count.toString();
    }

    badgeColor() {
        const { count } = this.state;
        let badgeClass = 'badge m-2 badge-';
        badgeClass += count === 0 ? 'warning' : 'primary';
        return badgeClass;
    }
}
 
export default Counter;
