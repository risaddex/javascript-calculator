import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

class Calculadora extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0,
      operation: null,
      
    }
  }
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
          <div className="calculadora">
            <input type="text" id="display" className="form-control" value={this.state.display} disabled="disabled" />
            
            <div className="row">
              <CustomBtn click={'foo'} btnName={'C'} customClass={'largeBtn'} customId="clear" />
              <CustomBtn click={'foo'} btnName={'/'} customId="divide"/>
              <CustomBtn click={'foo'} btnName={'*'} customId="multiply"/>
            </div>

            <div className="row">
              <CustomBtn click={'foo'} btnName="7" customId="seven"/>
              <CustomBtn click={'foo'} btnName="8" customId="eight"/>
              <CustomBtn click={'foo'} btnName="9" customId="nine"/>
              <CustomBtn click={'foo'} btnName="-" customId="subtract"/>
            </div>
            
            <div className="row">
              <CustomBtn click={'foo'} btnName="4" customId="four"/>
              <CustomBtn click={'foo'} btnName="5" customId="five"/>
              <CustomBtn click={'foo'} btnName="6" customId="six"/>
              <CustomBtn click={'foo'} btnName="+" customId="add"/>
            </div>

            <div className="row">
              <CustomBtn click={'foo'} btnName="1" customId="one"/>
              <CustomBtn click={'foo'} btnName="2" customId="two"/>
              <CustomBtn click={'foo'} btnName="3" customId="three"/>
              <CustomBtn click={'foo'} btnName="=" customClass="enter" customId="equals"/>
            </div>

            <div className="row" style={{marginTop: -60}}>
              <CustomBtn click={'foo'} btnName="0" customClass="zero" customId="zero"/>
              <CustomBtn click={'foo'} btnName="." customId="decimal"/>
            </div>

          </div>
          </div>
        </div>
      </div>
    )
  }
}

const CustomBtn= (props) => {
  return(
   <>
    <button click={props.click} type="button" id={props.customId} className={`btn btn-dark btn-lg font-weight-light ${props.customClass}`}>
        {props.btnName}
    </button>
   </>
  );
}


ReactDOM.render(
  <Calculadora />,
  document.getElementById('app')
);

export default Calculadora;