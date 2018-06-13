import React, { Component } from 'react';
import Calculator from './components/Calculator';


let inputArray = [1,2,3,4,5,6,7,8,9]
let actions = ['/','*','+','-']

class App extends Component {

  render() {
    return (
      <Calculator inputs={inputArray} actions={actions} />
    );
  }
}

export default App;
