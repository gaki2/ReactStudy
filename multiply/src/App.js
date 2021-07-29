import './App.css';
import React from 'react';

const num = 9;

class App extends React.Component {
    state = {
      operand1 : Math.ceil(Math.random() * num),
      operand2 : Math.ceil(Math.random() * num),
      value : '',
      result : ''
  };
// e.key +++++++ constructor 없이도 state 만들수있음.
  onSubmit = (e) => {
    console.log(e);
    if((e.key === 'Enter') && ((parseInt(this.state.value) === this.state.operand1 * this.state.operand2))) {
      this.setState({
        result: '정답입니다.',
        operand1 : Math.ceil(Math.random() * num),
        operand2 : Math.ceil(Math.random() * num),
        value : ''
      });
    }
    if ((window.event.keyCode === 13) && ((parseInt(this.state.value) !== this.state.operand1 * this.state.operand2))) {
      this.setState({
        result: '틀렸습니다.',
        value: ''
      });
    }
  }

  onChange = (e) => {
    this.setState({value : e.target.value});
  };

  render() {
    return (
      <div className='container'>
        <p className='question'>{this.state.operand1} X {this.state.operand2} ﹦
         <input placeholder='?'value={this.state.value} 
         onChange={this.onChange} 
         onKeyUp={this.onSubmit} /></p>
        <div className='result'>{this.state.result}</div>
      </div>
    )
  }
}
export default App;
