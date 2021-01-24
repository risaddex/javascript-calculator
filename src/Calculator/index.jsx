import React from 'react';
import Keyboard from "./Keyboard";
import { customSetter } from './utils';


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '0',
      operation: null,
      lastValue: '',
      expression: '0',
      result: ''
    }
    this.clearDisplay = this.clearDisplay.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  clearDisplay() {
    this.setState({
      display: '0',
      operation: null,
      lastValue: '',
      expression: '0',
      result: ''
    })
  }
  // manipulate input values
  onInput(val) {
    if(this.state.display.length >= 21) {
      this.setState({
        expression: this.state.display,
        display: this.state.display,
        result: this.state.display
      })
    } else {
      this.setState(customSetter(this.state, val))
    }
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