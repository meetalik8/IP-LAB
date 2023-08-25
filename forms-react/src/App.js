import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      currentStat: false,
    };
  }

  handleUserNameTest = (event) => {
    const key = event.key;
    if (!/^[a-zA-Z]$/.test(key)) {
      event.preventDefault();
      alert("Enter appropriate letters!");
    }
  };

  handleUserName = (event) => {
    const input = event.target.value.replace(/[^a-zA-Z]/g, "");
    this.setState({ name: input });
  };

  handlePassword = (event) => {
    const input = event.target.value;
    this.setState({ password: input });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid =
    this.state.name === 'admin' && this.state.password === 'password';

    this.setState({ currentStat: isValid });
  };

  render() {
    return (
      <div className="App">
        {!this.state.currentStat ? (
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name &nbsp;&nbsp;</label>
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onKeyDown={this.handleUserNameTest}
              onChange={this.handleUserName}
              required
            />
            <br />
            <label htmlFor="password">Password &nbsp;&nbsp;</label>
            <input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handlePassword}
            />{" "}
            <br />
            <button type="submit" onClick={this.handleSubmit}>Submit It</button>
          </form>
        ) : (
          <div>
            <p>You logged in!</p>
          </div>
        )}
      </div>
    );
  }
}
export default App;
