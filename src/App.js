import React, {Component} from 'react';
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import {ClearButton} from './components/ClearButton';
import * as math from 'mathjs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    }
  }

  addToInput = val => {
    this.setState({input: this.state.input + val});
  }

  handleEqual = () => {
    this.setState({input: math.evaluate(this.state.input)})
  }

  handleMultiply = () => {
    this.setState({input: this.state.input + '*'});
  }

  handleSin = () => {
    this.setState({input: math.sin(this.state.input)})
  }

  handleCos = () => {
    this.setState({input: math.cos(this.state.input)})
  }

  handleTan = () => {
    this.setState({input: math.tan(this.state.input)})
  }

  handlePercent = () => {
    this.setState({input: ((this.state.input)/100)})
  }

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <h1>Simple Calculator</h1>
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button handleClick={this.addToInput}>(</Button>
            <Button handleClick={this.addToInput}>)</Button>
            <Button handleClick={this.handlePercent}>%</Button>
            {/* <Button handleClick={this.addToInput}>/</Button> */}
          </div>
          <div className="row">
            <Button handleClick={this.handleSin}>Sin</Button>
            <Button handleClick={this.handleCos}>cos</Button>
            <Button handleClick={this.handleTan}>tan</Button>
            {/* <Button handleClick={this.addToInput}>/</Button> */}
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.handleMultiply}>x</Button>
            
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({input: ""})}>
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

  

export default App;
