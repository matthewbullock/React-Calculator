import React from 'react';

class Calculator extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        prev: [],
        total: []
      };
  }

  inputDigit(int) {

    let newArr = this.state.total.slice();
    newArr.push(int);
    this.setState({total: newArr});

  }

  addition(prevNum) {

    let store = this.arrToNum(prevNum);
    let newArr = this.state.prev.slice();
    newArr.push(store , "+");
    let string = newArr.join(" ");
    this.setState({total:[] , prev: [string]});

    return prevNum;

  }

  minus(prevNum) {

    let store = this.arrToNum(prevNum);
    let newArr = this.state.prev.slice();
    newArr.push(store , "-");
    let string = newArr.join(" ");
    this.setState({total:[] , prev: [string]});

    return prevNum;

  }

  divide(prevNum) {

    let store = this.arrToNum(prevNum);
    let newArr = this.state.prev.slice();
    newArr.push(store , "/");
    let string = newArr.join(" ");
    this.setState({total:[] , prev: [string]});

    return prevNum;

  }

  multiply(prevNum) {

    let store = this.arrToNum(prevNum);
    let newArr = this.state.prev.slice();
    newArr.push(store , "*");
    let string = newArr.join(" ");
    this.setState({total:[] , prev: [string]});

    return prevNum;
  }

  clearInput() {

    this.setState({total:[],prev:[]});

  }

  sum(currNum) {

    let store = this.arrToNum(currNum);
    let newArr = this.state.prev.slice();
    newArr.push(store);
    console.log(newArr.join(" "));
    let sum = eval(newArr.join(" "));

    this.setState({total:[sum]});

  }

  arrToNum(arr) {

    let test = Number(arr.join(''));

    return test;

  }

  makePretty(num) {

    let newNum = this.arrToNum(num);
    let formatNum = newNum.toLocaleString();

    return formatNum;

  }

  render() {
    return(
      <div className="Calculator">
        <div className="Screen">
          <p>{this.makePretty(this.state.total)}</p>
        </div>
        <div className="KeyPad">
          <div className="row">
            <button className="square" onClick={() => this.inputDigit(7)}>7</button>
            <button className="square" onClick={() => this.inputDigit(8)}>8</button>
            <button className="square" onClick={() => this.inputDigit(9)}>9</button>
            <button className="square" onClick={() => this.addition(this.state.total)}>+</button>
          </div>
          <div className="row">
            <button className="square" onClick={() => this.inputDigit(4)}>4</button>
            <button className="square" onClick={() => this.inputDigit(5)}>5</button>
            <button className="square" onClick={() => this.inputDigit(6)}>6</button>
            <button className="square" onClick={() => this.minus(this.state.total)}>-</button>
          </div>
          <div className="row">
            <button className="square" onClick={() => this.inputDigit(1)}>1</button>
            <button className="square" onClick={() => this.inputDigit(2)}>2</button>
            <button className="square" onClick={() => this.inputDigit(3)}>3</button>
            <button className="square" onClick={() => this.multiply(this.state.total)}>*</button>
          </div>
          <div className="row">
            <button className="square" onClick={() => this.inputDigit(0)}>0</button>
            <button className="square" onClick={() => this.inputDigit(".")}>.</button>
            <button className="square" onClick={() => this.sum(this.state.total)}>=</button>
            <button className="square" onClick={() => this.divide(this.state.total)}>/</button>
          </div>
          <div className="row">
            <button className="square full" onClick={() => this.clearInput()}>CLEAR</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
