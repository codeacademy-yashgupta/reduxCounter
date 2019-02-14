import React,{Component} from 'react';
import { connect } from 'react-redux';
import { addCounter,subtractCounter } from '../Actions';
import Counter from './../components/Counter/Counter.component'

const mapStateToProps = state => {
  console.log(state);
    return {
      counter:state.Counter
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onAddClick:()=>{dispatch(addCounter())},
      onSubtractClick:()=>{dispatch(subtractCounter())}
      
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Counter)