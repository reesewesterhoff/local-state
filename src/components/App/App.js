import React, { Component } from 'react';
import './App.css';


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
    user: {
      name: '',
      city: '',
      zipCode: '',
      street: '',
    }
  }

 

  handleNameChange = (event) => {
    let name = event.target.value;
    this.setState({
      user: {
        ...this.state.user,
        name: name,
      }
    });  // don't reassign state, use setState
  }

  handleCityChange = (event) => {
    let city = event.target.value;
    this.setState({
      user: {
        ...this.state.user,
        city: city,
      }
    });
  }
  
  handleZipChange = (event) => {
    let zipCode = event.target.value;
    this.setState({
      user: {
        ...this.state.user,
        zipCode: zipCode,
      }
    });
  }

  handleStreetChange = (event) => {
    let street = event.target.value;
    this.setState({
      user: {
        ...this.state.user,
        street: street,
      }
    });
  }
  handleLogCity = (event) => {
    console.log(this.state.user);
  }

  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        {JSON.stringify(this.state)}
        <br />
        {this.state.user.name}<span> is from </span>{this.state.user.city}
        <br />
        <input value={this.state.user.name} onChange={this.handleNameChange} type="text" placeholder="Name" />
        <input value={this.state.user.city} onChange={this.handleCityChange} type="text" placeholder="City" />
        <input value={this.state.user.zipCode} onChange={this.handleZipChange} type="text" placeholder="Zip Code" />
        <input value={this.state.user.street} onChange={this.handleStreetChange} type="text" placeholder="Street" />
        <button onClick={this.handleLogCity}>Click Here</button>
      </div>
    );
  }
}

export default App;
