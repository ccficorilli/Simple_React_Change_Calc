import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div className='container'>
          <h2 className='border-bottom border-white #fff py-2 text-white'>Change Calculator</h2>
          <div className='row p-3'>
            <div className="col-sm-4 p-2"> 
              <div className="border-white border rounded w-100">Amount Given Goes Here</div>            
            </div>
            <div className="col-sm-8 p-2">
              <div className="border-white border rounded w-100">Change Goes Here</div>            
            </div>
          </div>        
        </div>
      </div>
    );
  }
   
}
export default App;
