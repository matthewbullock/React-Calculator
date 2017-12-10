import React, {Component} from 'react';

class Calculator extends Component {
  constructor(props) {
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

  operation(prevNum, op) {

    var store = this.arrToNum(prevNum);
    var newArr = this.state.prev.slice();
    newArr.push(store, op);
    var string = newArr.join(" ");
    this.setState({total: [], prev: [string]});

    return prevNum;

  }

  clearInput() {

    this.setState({total: [], prev: []});

  }

  sum(currNum) {

    let store = this.arrToNum(currNum);
    let newArr = this.state.prev.slice();
    newArr.push(store);
    console.log(newArr.join(" "));
    let sum = eval(newArr.join(" "));

    this.setState({total: [sum]});

  }

  arrToNum(arr) {

    let num = Number(arr.join(''));
    return num;

  }

  makePretty(num) {

    let newNum = this.arrToNum(num);
    let formatNum = newNum.toLocaleString();

    return formatNum;

  }

  renderRow(s, f, o) {

    let rows = [];

    for (var i = s; i <= f; i++) {
      let t = i;
      let q = t;
      rows.push(<button className="square" onClick={() => this.inputDigit(q)}>{q}</button>);
    }

    rows.push(<button className="square grey" onClick={() => this.operation(this.state.total, o)}>{o}</button>);

    return rows;

  }

  render() {
    return (<div className="Calculator">
      <div className="Screen">
        <p>{this.makePretty(this.state.total)}</p>
      </div>
      <div className="KeyPad">
        <div className="row">
          {this.renderRow(7, 9, "+")}

        </div>
        <div className="row">
          {this.renderRow(4, 6, "-")}

        </div>
        <div className="row">
          {this.renderRow(1, 3, "*")}
        </div>
        <div className="row">
          <button className="square" onClick={() => this.inputDigit(0)}>0</button>
          <button className="square" onClick={() => this.inputDigit(".")}>.</button>
          <button className="square grey" onClick={() => this.sum(this.state.total)}>=</button>
          <button className="square grey" onClick={() => this.operation(this.state.total, "/")}>/</button>
        </div>
        <div className="row">
          <button className="square full" onClick={() => this.clearInput()}>AC</button>
        </div>
      </div>
    </div>);
  }
}

export default Calculator;
