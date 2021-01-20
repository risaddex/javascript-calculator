import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import Calculator from './Calculator';

const App = () => {
  return(
    <>
      <Calculator />
    </>
  );
}

ReactDOM.render(
    <App />,
  document.getElementById('app')
);

export default App;