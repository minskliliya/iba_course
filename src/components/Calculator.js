import React, { Component } from 'react';
import InputWindow from './InputWindow';
import OutputWindow from './OutputWindow';
import Buttons from './Buttons';

class Calculator extends Component {

  render(){
    return (
      <div>
        <InputWindow  /><br/>
        <OutputWindow />
        <Buttons 
          values={this.props.inputs}
          actions={this.props.actions}
        />
      </div>  
    );
  }
}

export default Calculator;
