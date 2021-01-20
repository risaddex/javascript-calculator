import React from 'react';

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

export default CustomBtn;