import React, {Component} from 'react';
import Button from './../Button/Button.component'

class Counter extends Component {
  incrementCount = () => {
    this.props.onAddClick();
  }
  decrementCount = () => {
    this.props.onSubtractClick();
  }

  render() {
    return (
      <div>
        Counter: {this.props.counter}
        <Button caption="Add" onClick ={this.incrementCount}></Button>
        <Button caption="Subtract" onClick={this.decrementCount}></Button>
      </div>
    );
  }
}
export default Counter;