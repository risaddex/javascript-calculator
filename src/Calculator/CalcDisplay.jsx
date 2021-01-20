const CalcDisplay = props => {
  return(
    <>
      <input 
        type="text"
        id="display"
        className="form-control"
        value={props.display}
        disabled="disabled"
      />
    </>
  );
}

export default CalcDisplay;