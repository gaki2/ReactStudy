
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value : 0};
  };

  increase() {
    this.setState(() => {
      return {value : this.state.value + 1};
    });
  };

  decrease() {
    this.setState(() => {
      return {value : this.state.value - 1};
    });
  };

  render() {
    return(
    <div className='container'>
      <h2>{this.state.value}</h2>
      <button onClick={this.increase}>Increase</button>
      <button onClick={this.decrease}>Decrease</button>
    </div>)
  };
}

export default App;