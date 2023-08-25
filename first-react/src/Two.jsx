import { Component } from "react";

export default class Two extends Component {
  constructor() {
    super();
    this.state = { color: "#581845", fontSize:'16px' };
  }
  render() {
    return (
      <>
        <h2 style={{ color: this.state.color , fontSize: this.state.fontSize}}>{this.props.time}</h2>
        <button
          onClick={() => {
              this.setState({ color: "#D333FF", fontSize:'32px'});
          }}
        > Click me </button>
      </>
    );
  }
}
