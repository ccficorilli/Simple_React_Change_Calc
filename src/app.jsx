import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='container'>
          <h1 className='border-bottom border-white py-2 text-white'>Change Calculator</h1>
          <div className='row p-2'>
            <div className='col-sm-4 p-2'>
              <div className='border rounded bg-light w-100'>
                <div className='panel mt-1 mb-1 p-2 bg-custom brd-btm-cst text-center'>Enter Information</div>
                <div className='txt-sm row m-1 pl-2 pr-2'>How much is due?</div>
                <div className='row m-1 p-2'>
                  <input type='number' step='.01' placeholder='$0' className='w-100' />
                </div>
                <div className='txt-sm row m-1 pl-2 pr-2'>How much was received?</div>
                <div className='row m-1 p-2 '>
                  <input type='number' step='.01' placeholder='$0' className='w-100' />
                </div>
                <div className='panel mt-1 mb-1 p-2 brd-top-cst'>
                  <button type='submit' >Calculate</button>
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
