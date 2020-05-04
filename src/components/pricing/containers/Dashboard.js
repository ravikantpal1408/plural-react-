import React from 'react';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      dealerName: '',
      businessType: '',
      startDate: '',
      error: {},
    };

    this.handleOnchange = this.handleOnchange.bind(this);
  }

  handleOnchange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(`i'm triggered `);
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='container'>
            <div className='col-md-12'>
              <div className='form-group'>
                <label htmlFor='txtDealerName'>Dealer Name</label>
                <input
                  type='text'
                  id='txtDealerNamr'
                  name='dealerName'
                  placeholder='Enter dealer name'
                  value={this.state.dealerName}
                  onChange={this.handleOnchange}
                  className='form-control'
                />
              </div>
            </div>
            <div className='row container'>
              <div className='col-md-6'>
                <label>Business Type</label>
                <select
                  className='form-control'
                  id='dllBusinessType'
                  name='businessType'
                  onChange={this.handleOnchange}
                  value={this.state.businessType}
                >
                  <option value=''>---Select Business Type---</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                </select>
              </div>
              <div className='col-md-6'>
                <label>Start Date</label>
                <input
                  type='date'
                  id='txtStartDate'
                  name='startDate'
                  className='form-control'
                  value={this.state.startDate}
                  onChange={this.handleOnchange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
