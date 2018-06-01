import React, { Component } from 'react';
import './App.css';

import DumbButton from './components/DumbButton/DumbButton';
import Display from './components/Display/Display';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstNumber: '',
      secondNumber: '',
      operation: '',
      newOperation: '',
      isFirst: true,
      displayedValue: '',
      displayedValueSecondary: ''
    }
  }

  handleClickPrint = (e) => {
    e.preventDefault();
    let newFirstNumber = this.state.firstNumber;
    let newSecondNumber = this.state.secondNumber;
    if (this.state.isFirst) {
      this.setState({
        firstNumber: newFirstNumber += e.target.value
      })
    } else {
      this.setState({
        secondNumber: newSecondNumber += e.target.value,
      })
    }
    console.log(this.state)
  }
  
  handleClickOperation = (e) => {
    const {firstNumber, secondNumber, operation} = this.state;
    if ((!this.state.secondNumber && this.state.operation)) { 
      this.setState({
        operation: e.target.value
      })
      return 
    };

    let newDisplayedValue = eval(firstNumber+operation+secondNumber);

    if (e.target.value === '='){
      this.setState({
        displayedValueSecondary: firstNumber + ' ' + operation + ' ' + secondNumber,
        operation: '',
        firstNumber: newDisplayedValue,
        secondNumber: ''
      })
    } else {
      this.setState({
        isFirst: false,
        firstNumber: newDisplayedValue,
        displayedValue: newDisplayedValue += ' ' + e.target.value + ' ',
        displayedValueSecondary: firstNumber + ' ' + operation + ' ' + secondNumber,
        operation: e.target.value,
        secondNumber: ''
      })
    }
    console.log(this.state)
  }

  handleClearDisplay = (e) => {
    this.setState({
      firstNumber: '',
      secondNumber: '',
      operation: '',
      isFirst: true,
      displayedValue: '',
      displayedValueSecondary: ''
    })
  }

  handleToNegative = (e) => {
    const { displayedValue } = this.state;
    const displayedValueToNumber = Number(displayedValue);
    if (!isNaN(displayedValueToNumber)) {
      this.setState({
        displayedValue: -Math.abs(displayedValueToNumber)
      }) 
    }
  }

  render() {
    const { firstNumber, secondNumber, operation } = this.state;
    let displayedValue = firstNumber + (operation ? ' ' + operation + ' ' : '') + secondNumber;
    return (
      <div className="App d-flex justify-content-center align-items-center">
        <div className='calculator-container col-12 col-md-6 p-2'>
          <div className='d-flex justify-content-center'>
            <Display value={this.state.displayedValueSecondary} height={1}/>
          </div>
          <div className='d-flex justify-content-center'>
            <Display value={displayedValue}/>
          </div>
          <div className='d-flex justify-content-center'>
            <DumbButton value='C' handleClick={this.handleClearDisplay}/>
            <DumbButton value='&plusmn;' handleClick={this.handleToNegative}/>
            <DumbButton value='%' handleClick={this.handleClickOperation}/>
            <DumbButton value='/' handleClick={this.handleClickOperation}/>
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
