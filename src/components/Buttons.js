import React, { Component } from 'react';

class Buttons extends Component {  
  state = { 
		valueInput: undefined
  };
  
  handleClick = (e) => { 
    this.setState({
      valueInput: e.target.value
    })
    this.props.handleClick(this.state.valueInput);
    console.log(this.state.valueInput);
  }

  render(){    
    let buttons = this.props.values.map((value) => (
      <button
        value={value}    
        onClick={this.handleClick}    
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


