import React, { Component } from 'react';

class InputWindow extends Component {
  state = {
    value: this.props.inputs
  };  
  render(){
    return (
      <div>
        <p>{this.props.inputs}</p>
        <input type="text" size="20" value={this.state.value}/>
      </div>
    );
  }
}

export default InputWindow;
