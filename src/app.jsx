import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: 0,
      amountTendered: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
      changeDue: 'There is no change to give'
    }  
  }
  updateAmountDue(e) {
    this.setState({
      amountDue: e.target.value
    });
    //console.log(this.state.amountDue)
  }
  updateAmountReceived(e) {
    this.setState({
      amountTendered: e.target.value
    });
    console.log(this.state.amountTendered)
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
                    value={ console.log(this.state.amountDue) }
                    placeholder='$0' 
                    className='w-100' 
                    onChange={ e => this.updateAmountDue(e) }
                    />
                </div>
                <div className='txt-sm-b row m-1 pl-2 pr-2'>How much was received?</div>
                <div className='row m-1 p-2 '>
                  <input
                    type='number'
                    step='.01' 
                    value={ this.state.amountTendered } 
                    placeholder='$0' 
                    className='w-100'
                    onChange={ e => this.updateAmountReceived(e) }
                    />
                </div>
                <div className='panel mt-1 mb-1 p-2 brd-top-cst'>
                  <button type='submit'>Calculate</button>
                </div>
              </div>
            </div>
            <div className='col-sm-8 p-2'>
              <div className='border-white border rounded w-100'>Change Goes Here</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default App;
