import React, { Component } from 'react';

class Buttons extends Component {  
  render(){
    let buttons = this.props.values.map((value) => (
      <button
        value={value}        
        >      
        {value}
      </button>
    ));

    let actions = this.props.actions.map((action) => (
      <button
        value={action}        
        >      
        {action}
      </button>
    ));

    return (
      <div>
        <p>{buttons}</p>
        <p>{actions}</p>
      </div>
    );
  }
}

export default Buttons;


