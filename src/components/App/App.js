import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'

class App extends Component {
  // OLD WAY
  // constructor(props) {  // special words
  //   super(props); // local state, only exists in this component
  //   this.state = {
  //     user: 'Luke',

  //   }
  //   // similar to const self = this;
  //   // makes the `this` in `handleChange` the same as `this` in the constructor
  //   this.handleChange = this.handleChange.bind(this);
  // }

  state = {
    user: 'Luke',
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({user: event.target.value});  // don't reassign state, use setState
  }

  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        { JSON.stringify(this.state) }
        <br />
        {this.state.user}
        <br />
        <input value={this.state.user} onChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
