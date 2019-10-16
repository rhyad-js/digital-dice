import React, { Component } from 'react';
import './RollDice.css'
import Die from './Die';

class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    }
    constructor(props) {
        super(props);
        this.state = {
            die1: "one",
            die2: "one",
            rolling: false
        }
        this.randomValue = this.randomValue.bind(this);
    }
    randomValue () {
        let rand1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        let rand2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        this.setState({
           die1: rand1,
           die2: rand2,
           rolling: true
        })
        setTimeout(() => {
            this.setState({rolling: false})
        }, 1000)
    }
    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-die-div">
                    <Die value={this.state.die1} rolling={this.state.rolling}/>
                    <Die value={this.state.die2} rolling={this.state.rolling}/>
                </div>
                <button onClick={this.randomValue} disabled={this.state.rolling}>
                    {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
                </button>
            </div>
        )
    }
}

export default RollDice;