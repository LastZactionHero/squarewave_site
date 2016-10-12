import React from 'react';

class Footer extends React.Component {
  render() {
    return(
      <div className="container-fluid container-footer">
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/join'>Join the Network</a></li>
                <li><a href='/privacy'>Privacy Policy</a></li>
              </ul>
            </div>
            <div className='col-md-4 col-md-offset-4'>
              <ul>
                <li>info@squarewaveng.com</li>
                <li>303-552-9644</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;