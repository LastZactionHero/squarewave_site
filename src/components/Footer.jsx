import React from 'react';

class Footer extends React.Component {
  render() {
    return(
      <div className="container-fluid container-footer">
        <div className='container'>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/join'>Join the Network</a></li>
            <li><a href='/privacy'>Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer;