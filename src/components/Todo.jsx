import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class Todo extends Component {

  constructor(props){
      super(props);
      this.state = {
        term: '',
        value: []
      };

  }

  handleChange = (event) => {
    this.setState({term: event.target.value});
  }

  handleSubmit = (event) => {
   event.preventDefault()
   this.setState({
     term: '',
     items: [...this.state.items, this.state.term]
   });
 }



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.term} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


export default Todo;
