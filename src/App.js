import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0,
      operation: null,
      lastValue: null,
      expression: ""
    }
    this.clearDisplay = this.clearDisplay.bind(this);
    this.onInput = this.onInput.bind(this);
  }
  componentDidMount() {
    
  }
  clearDisplay() {
    this.setState({
      display: 0,
      operation: null,
      lastValue: null,
    })
  }
  onInput(val) {
    this.setState({
      display: this.state.display + val
    })
  }
  render() {
    return(
      <div className="container">
        <Calculator
          display={this.state.display}
          clearDisplay={this.clearDisplay}
          onInput={this.onInput}
        />
      </div>
    )
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.clearScreen = this.clearScreen.bind(this);
  }
  handleInput(data) {
    this.props.onInput(data)
  }
  clearScreen() {
    this.props.clearDisplay()
  }
  
  render() {
    return(
      <div className="row">
          <div className="col d-flex justify-content-center">
          <div className="calculadora">
            <CalcDisplay display={this.props.display}/>
            <div className="row">
              <CustomBtn click={this.clearScreen} btnName={'C'} customClass={'largeBtn'} customId="clear" />
              <CustomBtn click={this.handleInput} btnName={'/'} customId="divide"/>
              <CustomBtn click={this.handleInput} btnName={'*'} customId="multiply"/>
            </div>

            <div className="row">
              <CustomBtn click={this.handleInput} btnName="7" customId="seven"/>
              <CustomBtn click={this.handleInput} btnName="8" customId="eight"/>
              <CustomBtn click={this.handleInput} btnName="9" customId="nine"/>
              <CustomBtn click={this.handleInput} btnName="-" customId="subtract"/>
            </div>
            
            <div className="row">
              <CustomBtn click={this.handleInput} btnName="4" customId="four"/>
              <CustomBtn click={this.handleInput} btnName="5" customId="five"/>
              <CustomBtn click={this.handleInput} btnName="6" customId="six"/>
              <CustomBtn click={this.handleInput} btnName="+" customId="add"/>
            </div>

            <div className="row">
              <CustomBtn click={this.handleInput} btnName="1" customId="one"/>
              <CustomBtn click={this.handleInput} btnName="2" customId="two"/>
              <CustomBtn click={this.handleInput} btnName="3" customId="three"/>
              <CustomBtn click={this.handleInput} btnName="=" customClass="enter" customId="equals"/>
            </div>

            <div className="row" style={{marginTop: -60}}>
              <CustomBtn click={this.handleInput} btnName="0" customClass="zero" customId="zero"/>
              <CustomBtn click={this.handleInput} btnName="." customId="decimal"/>
            </div>

          </div>
          </div>
        </div>
    );
  }
}

class CustomBtn extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClicked = this.toggleClicked.bind(this);
  }
  toggleClicked() {
      this.props.click(this.props.btnName)
    
  }
  render() {
    return(
      <>
       <button onClick={this.toggleClicked} type="button" id={this.props.customId} className={`btn btn-dark btn-lg font-weight-light ${this.props.customClass}`}>
           {this.props.btnName}
       </button>
      </>
     );
  }
  
}

class CalcDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <>
        <input 
          type="text"
          id="display"
          className="form-control"
          value={this.props.display}
          disabled="disabled"
        />
      </>
    );
  }
  
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);

export default App;