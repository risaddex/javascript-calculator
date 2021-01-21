import React from 'react';
import CustomBtn from "./CustomBtn";
import CalcDisplay from './CalcDisplay';

class Keyboard extends React.Component {
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
            <div className="row justify-content-center">
              <CustomBtn click={this.clearScreen} btnName={'C'} customClass={'largeBtn'} customId="clear" />
              <CustomBtn click={this.handleInput} btnName={'/'} customId="divide"/>
              <CustomBtn click={this.handleInput} btnName={'*'} customId="multiply"/>
            </div>

            <div className="row justify-content-center">
              <CustomBtn click={this.handleInput} btnName="7" customId="seven"/>
              <CustomBtn click={this.handleInput} btnName="8" customId="eight"/>
              <CustomBtn click={this.handleInput} btnName="9" customId="nine"/>
              <CustomBtn click={this.handleInput} btnName="-" customId="subtract"/>
            </div>
            
            <div className="row justify-content-center">
              <CustomBtn click={this.handleInput} btnName="4" customId="four"/>
              <CustomBtn click={this.handleInput} btnName="5" customId="five"/>
              <CustomBtn click={this.handleInput} btnName="6" customId="six"/>
              <CustomBtn click={this.handleInput} btnName="+" customId="add"/>
            </div>

            <div className="row justify-content-center">
              <CustomBtn click={this.handleInput} btnName="1" customId="one"/>
              <CustomBtn click={this.handleInput} btnName="2" customId="two"/>
              <CustomBtn click={this.handleInput} btnName="3" customId="three"/>
              <CustomBtn click={this.handleInput} btnName="=" customClass="enter" customId="equals"/>
            </div>

            <div className="row bottom-row">
              <CustomBtn click={this.handleInput} btnName="0" customClass="zero" customId="zero"/>
              <CustomBtn click={this.handleInput} btnName="." customId="decimal"/>
            </div>

          </div>
          </div>
        </div>
    );
  }
}

export default Keyboard;