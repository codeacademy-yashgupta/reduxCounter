import React, {Component} from 'react';
import Button from './../Button/Button.component'

class Counter extends Component {
  incrementCount = () => {
    this.props.onAddClick();
  }
  decrementCount = () => {
    this.props.onsubtractClick();
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Button caption="Add" onClick ={this.incrementCount}></Button>
        <Button caption="Subtract" onClick={this.decrementCount}></Button>
      </div>
    );
  }
}
export default Counter;