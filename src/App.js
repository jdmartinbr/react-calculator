import React, { Component } from 'react';
import './App.css';

import DumbButton from './components/DumbButton/DumbButton';
import Display from './components/Display/Display';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstNumber: 0,
      secondNumber: 0,
      operation: '',
      isFirst: true,
      displayValue: ''
    }
  }

  handleClickPrint = (e) => {
    e.preventDefault();
    let newDisplayValue = this.state.displayValue;
    if (this.state.isFirst) {
      this.setState({
        displayValue: newDisplayValue += e.target.value,
        firstNumber: e.target.value
      })
    } else {
      this.setState({
        displayValue: newDisplayValue += e.target.value,
        secondNumber: e.target.value
      })
    }
    console.log(this.state)
  }
  
  handleClickOperation = (e) => {
    e.preventDefault();
    let newDisplayValue = eval(this.state.displayValue);
    if (e.target.value === '='){
      this.setState({
        displayValue: newDisplayValue
      })
    } else {
      this.setState({
        isFirst: !this.state.isFirst,
        displayValue: newDisplayValue += e.target.value,
        operation: e.target.value
      })
    }
    console.log(this.state)
  }

  render() {
    return (
      <div className="App d-flex justify-content-center">
        <div className='calculator-container col-6'>
          <div className='d-flex justify-content-center'>
            <Display value={this.state.displayValue}/>
          </div>
          <div className='d-flex justify-content-center'>
            <DumbButton value='7' handleClick={this.handleClickPrint}/>
            <DumbButton value='8' handleClick={this.handleClickPrint}/>
            <DumbButton value='9' handleClick={this.handleClickPrint}/>
            <DumbButton value='*' handleClick={this.handleClickOperation}/>
          </div>
          <div className='d-flex justify-content-center'>
            <DumbButton value='4' handleClick={this.handleClickPrint}/>
            <DumbButton value='5' handleClick={this.handleClickPrint}/>
            <DumbButton value='6' handleClick={this.handleClickPrint}/>
            <DumbButton value='-' handleClick={this.handleClickOperation}/>
          </div>
          <div className='d-flex justify-content-center'>
            <DumbButton value='1' handleClick={this.handleClickPrint}/>
            <DumbButton value='2' handleClick={this.handleClickPrint}/>
            <DumbButton value='3' handleClick={this.handleClickPrint}/>
            <DumbButton value='+' handleClick={this.handleClickOperation}/>
          </div>
          <div className='d-flex justify-content-center'>
            <DumbButton value='0' width={2} handleClick={this.handleClickPrint}/>
            <DumbButton value='.' handleClick={this.handleClickPrint}/>
            <DumbButton value='=' handleClick={this.handleClickOperation}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
