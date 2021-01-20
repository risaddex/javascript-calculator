import React from 'react';
import Keyboard from "./Keyboard";
import { handleOperation, customSetter } from './utils';


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
  componentDidMount() {
    //soon tm
  }

  clearDisplay() {
    this.setState({
      display: 0,
      operation: null,
      lastValue: "",
      expression: [],
      result: 0,
    })
  }
  // manipulate input values
  onInput(val) {
    const s = this.state;
    if(val === '=' && s.expression) { // tratamento de resultado
      let result = handleOperation(s.expression);
      this.setState({
        display: result
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