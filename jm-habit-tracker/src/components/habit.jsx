import React, { Component } from "react";

class Habit extends Component {
    state = {
        count: 0,
    };

    handleIncrement = (event) => {
        // state 오브젝트 안에 있는 count를 증가 한 뒤 state를 업데이트 해야 함.
        this.setState({ count: this.state.count + 1});
    };

    handleDecrement = (event) => {
        // state 오브젝트 안에 있는 count를 감소 한 뒤 state를 업데이트 해야 함.
        const count = this.state.count -1;
        this.setState({ count: count < 0 ? 0 : count});
    };
    render() {
    return (
        <li className='habit'>
        <span className="habit-name">Reading </span>
        <span className="habit-count">{this.state.count}</span>
        <button className='habit-button habit-increase' onClick={this.handleIncrement}>
            <i className="far fa-plus-square"></i>
        </button>
        <button className='habit-button habit-decrease' onClick={this.handleDecrement}>
            <i className="far fa-minus-square"></i>
        </button>
        <button className='habit-button habit-delete'>
            <i className="far fa-trash-alt"></i>
        </button>
        </li>
    );
    }
}

export default Habit;
