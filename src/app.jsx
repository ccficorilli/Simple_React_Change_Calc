import React, { Component } from 'react';
const defaultState = {
  amountDue: 0,
  amountReceived: 0,
  twenties: 0,
  tens: 0,
  fives: 0,
  ones: 0,
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0,
  changeDue: 0,
  changeBar: ''
};

class App extends Component {
  constructor(props) {
    super(props);    
    this.state = defaultState;
    this.handleClick = this.handleClick.bind(this);
  }
  
  updateAmountDue(e) {
    this.setState({
      amountDue: e.target.value
    });
  }
  updateAmountReceived(e) {
    this.setState({
      amountReceived: e.target.value
    });
  }
  handleClick() {
    const tempReceived = Math.round(this.state.amountReceived * 100);
    const tempDue = Math.round(this.state.amountDue * 100);
    if (tempReceived < tempDue){
      const no = <div className='changeDisplay caution'>${this.state.amountReceived} is not enough for this item.</div>;
      this.setState(
        defaultState,
        defaultState.changeBar = no 
      );
    } else if (tempReceived === tempDue){
      const none = <div className='changeDisplay'>You were given exact change...</div>;
      this.setState(
        defaultState,
        defaultState.changeBar = none
     );
    } else {
        const changeDue = (tempReceived - tempDue) / 100;
        const yes = <div className='changeDisplay successful'>Your change is: ${changeDue}</div>    
        this.setState({
          changeDue,
          amountDue: 0,
          amountReceived: 0,
          twenties: Math.floor(changeDue / 20),
          tens: Math.floor((changeDue % 20) / 10),
          fives: Math.floor(((changeDue % 20) % 10) / 5),
          ones: Math.floor((((changeDue % 20) % 10) % 5) / 1),
          quarters: Math.floor((((((changeDue % 20) % 10) % 5) % 1) * 100) / 25),
          dimes: Math.floor(((((((changeDue % 20) % 10) % 5) % 1) * 100) % 25) / 10),
          nickels: Math.floor((((((((changeDue % 20) % 10) % 5) % 1) * 100) % 25) % 10) / 5),
          pennies: Math.round(((((((((changeDue % 20) % 10) % 5) % 1) * 100) % 25) % 10) % 5) / 1),
          changeBar: yes 
        });
      }    
    };
    
  render() {
    return (
      <div>
        <div className='container'>
          <h1 className='border-bottom border-white py-2 text-white'>Change Calculator</h1>
          <div className='row p-2'>
            <div className='col-sm-4 p-2'>
              <div className='border rounded bg-light w-100'>
                <div className='panel mt-1 mb-1 p-2 bg-custom brd-btm-cst text-left txt-sm'>Enter Information</div>
                <div className='txt-sm-b row m-1 pl-2 pr-2'>How much is due?</div>
                <div className='row m-1 p-2'>
                  <input
                    name='amountDue'
                    type='number' 
                    step='.01' 
                    min='0'
                    value={ this.state.amountDue }
                    placeholder='$0' 
                    className='w-100' 
                    onChange={ e => this.updateAmountDue(e) }
                  />
                </div>
                <div className='txt-sm-b row m-1 pl-2 pr-2'>How much was received?</div>
                <div className='row m-1 p-2 '>
                  <input
                    name='amountReceived'
                    type='number'
                    min='0'
                    step='.01' 
                    value={ this.state.amountReceived } 
                    placeholder='$0' 
                    className='w-100'
                    onChange={ e => this.updateAmountReceived(e) }
                  />
                </div>
                <div className='panel mt-1 mb-1 p-2 brd-top-cst'>
                  <button type='submit' onClick={this.handleClick}>Calculate</button>
                </div>
              </div>
            </div>
            <div className='col-sm-8 p-2'>
              <div className='register'>
                <div className='row p-3'>{this.state.changeBar}</div>
                <div className='dollarsRow'>
                  <div className='dollars'>Twenties
                    <p>{this.state.twenties}</p>
                  </div>
                  <div className='dollars'>Tens
                    <p>{this.state.tens}</p>
                  </div>
                  <div className='dollars'>Fives
                    <p>{this.state.fives}</p>
                  </div>
                  <div className='dollars'>Ones
                    <p>{this.state.ones}</p>
                  </div>
                </div>
                <div className='centsRow'>
                  <div className='cents'>Quarters
                    <p>{this.state.quarters}</p>
                  </div>
                  <div className='cents'>Dimes
                    <p>{this.state.dimes}</p>
                  </div>
                  <div className='cents'>Nickels
                    <p>{this.state.nickels}</p>
                  </div>
                  <div className='cents'>Pennies
                    <p>{this.state.pennies}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default App;
