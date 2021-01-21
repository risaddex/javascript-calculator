import React from 'react';
import Keyboard from "./Keyboard";
import { customSetter } from './utils';


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0,
      operation: null,
      lastValue: "",
      expression: [],
      result: null
    }
    this.clearDisplay = this.clearDisplay.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  clearDisplay() {
    this.setState({
      display: 0,
      operation: null,
      lastValue: "",
      expression: [],
      result: null,
    })
  }
  // manipulate input values
  onInput(val) {
      this.setState(customSetter(this.state, val))
    }
  

  render() {
    return(
      <div className="container">
        <Keyboard
          display={this.state.display}
          clearDisplay={this.clearDisplay}
          onInput={this.onInput}
        />
      </div>
    );
  }
}

export default Calculator;