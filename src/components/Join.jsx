import React from 'react';
import ContractorForm from './ContractorForm';
import SmoothScroll from 'smoothscroll';

class Join extends React.Component {

  handleCTA = (event) => {
    event.preventDefault();

    let contactForm = document.querySelector('.container-contact');
    SmoothScroll(contactForm);
  }

  render() {
    return (
      <div>
        <div className="splash circuit">
          <div className="splash-overlay" />
          <div className="splash-hero">
            <img src='images/logo_named_white.png' className='splash-logo' />
            <p className="tagline">Join the network of Colorado engineers.</p>
            <a className='btn btn-hero' href='javascript:void(0)' onClick={this.handleCTA}>Join the Team</a>
          </div>
        </div>
        <div className="container-fluid container-lead lead-light">
          <div className="container">
            <div className="row">
              <div className="col-md-6 lead">
                We're a network for local engineers, creatives, developers, and project managers.
              </div>
              <div className="col-md-6 lead">
                We use on local teams for short-term engineering projects.
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid container-tags">
          <div className="container">
            <div className="row">
              <div className="col-md-4 tag">
                <div className="title">
                  Short-Term Projects
                </div>
                <div className="description">
                  We build ad-hoc teams of engineers, designers, and project managers for contract engineering projects.
                </div>
              </div>
              <div className="col-md-4 tag">
                <div className="title">
                  Connect with Others
                </div>
                <div className="description">

                </div>
              </div>
              <div className="col-md-4 tag">
                <div className="title">
                  Get Assistance
                </div>
                <div className="description">
                  Stuck on something? Ask other experts in the community on projects of any scope.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid container-contact">
          <div className="container">
            <h2>Join the Team</h2>
            <p>Tell us a few things about yourself- this just helps us find good people for projects. We&apos;ll never sell or share your info.</p>
            <ContractorForm></ContractorForm>
          </div>
        </div>
        <div className="container-fluid container-footer">
        </div>
      </div>
    );
  }
}

export default Join;
