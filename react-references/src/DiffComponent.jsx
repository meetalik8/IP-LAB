import React, { Component } from "react";

class ChildComponent extends Component {
  focusInput = () => {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  };

  render() {
    return (
      <div>
        <h3>Child Component</h3>
        <input
          ref={(input) => (this.inputRef = input)}
          placeholder="Callback reference"
        />
      </div>
    );
  }
}

class DifComponent extends Component {
  focusChildInput = () => {
    this.childComponent.focusInput();
  };

  render() {
    return (
      <div>
        <h2>Callback Ref Example</h2>
        <ChildComponent ref={(child) => (this.childComponent = child)} />
        <button onClick={this.focusChildInput}>Focus Child Input</button>
      </div>
    );
  }
}

export default DifComponent;
