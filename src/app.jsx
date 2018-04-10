import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);    
    const none = <div className='changeDisplay'>There is no change to give...</div>;
    this.state = {      
      amountDue: 0,
      amountReceived: 0,
      twenties: 10,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
      changeDue: 0,
      changeBar: none
    };
    this.updateChangeDue = this.updateChangeDue.bind(this)
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
  updateChangeDue() {
    let tempReceived = this.state.amountReceived * 100;
    tempReceived = Math.round(tempReceived);
    let tempDue = this.state.amountDue * 100;
    tempDue = Math.round(tempDue);
    const changeDue = (tempReceived - tempDue) / 100;    
    this.setState({
      changeDue,      
    },
    function() {
      const yes = <div className='changeDisplay successful'>Your change is: ${this.state.changeDue}</div>
      const no = <div className='changeDisplay caution'>${this.state.amountReceived} is not enough for this item.</div>;
      if (tempReceived >= tempDue) {
        this.setState({
          changeBar: yes })
      } else {
        this.setState({
          changeBar: no })
      }
    }
  );    
  }
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
                  <button type='submit' onClick={ () => this.updateChangeDue() }>Calculate</button>
                </div>
              </div>
            </div>
            <div className='col-sm-8 p-2'>
              <div className='border bg-light rounded w-100'>
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
