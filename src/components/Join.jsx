import React from 'react';
import ContractorForm from './ContractorForm';
import Footer from './Footer';

class Join extends React.Component<> {
  render() {
    return (
      <div>
        <div className="splash">
          <div className="splash-overlay" />
          <div className="splash-hero">
            <img src='images/logo_named_white.png' className='splash-logo' />
            <p className="tagline">Join the network of Colorado freelance engineers.</p>
          </div>
        </div>
        <div className="container-fluid container-services container-services-no-content">
          <div className="container">
            <div className="row row-services">
              <div className="col-md-4 service">
                <p className="title"><i className="fa fa-flash" /> Engineers</p>
              </div>
              <div className="col-md-4 service">
                <p className="title"><i className="fa fa-code" /> Software Developers</p>
              </div>
              <div className="col-md-4 service">
                <p className="title"><i className="fa fa-desktop" /> Designers</p>
              </div>
            </div>
            <div className="row row-services">
              <div className="col-md-4 service">
                <p className="title"><i className="fa fa-line-chart" /> Project Managers</p>
              </div>
              <div className="col-md-4 service">
                <p className="title"><i className="fa fa-industry" /> Manufacturers</p>
              </div>
              <div className="col-md-4 service">
                <p className="title"><i className="fa fa-bullseye" /> Data Scientists</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid container-lead">
          <div className="container">
            <div className="row">
              <div className="col-md-6 lead">
                We're a network for local engineers, creatives, developers, and project managers.
              </div>
              <div className="col-md-6 lead">
                We use local Colorado teams for short-term engineering projects.
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
                  Meet and work with other local engineers across the state by participating in contract teams or sharing your own projects.
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
            <h4>Tell us a few things about yourself- this helps us find good people for projects. We'll never sell or share your info.</h4>
            <ContractorForm></ContractorForm>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Join;