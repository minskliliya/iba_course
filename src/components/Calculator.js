import React, { Component } from 'react';
import InputWindow from './InputWindow';
import OutputWindow from './OutputWindow';
import Buttons from './Buttons';

class Calculator extends Component {
  state = {
    inputValue: ''
  };

  handleClick= (inputValue) => { 
    this.setState({inputValue: inputValue});
  };
  render(){
    return (
      <div>
        <InputWindow inputs={this.state.inputValue} /><br/>
        <OutputWindow />
        <Buttons 
          values={this.props.inputs}
          actions={this.props.actions}
          handleClick={this.handleClick}    
        />
      </div>  
    );
  }
}

export default Calculator;
