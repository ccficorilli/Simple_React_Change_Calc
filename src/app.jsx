import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  <div>
    <h1>Change Calculator</h1>
    <div className='container'>
      <div className='row'>
      <div className='cos-sm'>
      Enter Information
      </div>
      <div className='cos-sm'>
      How Much is due?
        <input type='number' value='' /> 
      </div>   
      <div className='cos-sm'>
      How much was received?
        <input type='number' value='' />
      </div>
      <div className='cos-sm'><button type='submit' onClick={this.calculate()}>Calulate</button></div>
      </div>
    </div>
    <div>
      <div>The total change due is $</div>
      <div>Twenties</div>
      <div>Tens</div>
      <div>Fives</div>
      <div>Ones</div>
      <div>Quarters</div>
      <div>Dimes</div>
      <div>Nickels</div>
      <div>Pennies</div>
      
    </div>
  </div>
  }
}

export default App;
