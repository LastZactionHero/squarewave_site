import React from 'react';
import ContactForm from './ContactForm';
import Footer from './Footer';
import LogoImage from '../images/logo_named_white.png'

class Main extends React.Component<> {
  render() {
    return (
      <div>
        <div className="splash">
          <div className="splash-overlay" />
          <div className="splash-hero">
            <img src={LogoImage} className='splash-logo' />
            <p className="tagline">Building Colorado industries with local engineering and creative talent.</p>
            <a className='btn btn-primary-contrast btn-join btn-lg' href='/join'>Engineer? Join our team!</a>
          </div>
        </div>
        <div className="container-fluid container-services">
          <div className="container">
            <div className="row row-services">
              <div className="col-md-4 service">
                <p className="title"><i className="fa fa-cog" /> 3D Design</p>
                <p className="description">3D models, printed prototypes, and production runs.</p>
              </div>
              <div className="col-md-4 service">
                <p className="title"><i className="fa fa-flash" /> Electronics</p>
                <p className="description">Component selection, PCB design, and fabrication.</p>
              </div>
              <div className="col-md-4 service">
                <p className="title"><i className="fa fa-code" /> Firmware</p>
                <p className="description">We specialize in reliability, efficiency and communication.</p>
              </div>
            </div>
            <div className="row row-services">
              <div className="col-md-4 service">
                <p className="title"><i className="fa fa-plug" /> API</p>
                <p className="description">Cloud infrastruture to securely connect your products, developers, and data.</p>
              </div>
              <div className="col-md-4 service">
                <p className="title"><i className="fa fa-mobile" /> Interface</p>
                <p className="description">Monitor and controls your connected products with simple and elegant web interfaces and apps.</p>
              </div>
              <div className="col-md-4 service">
                <p className="title"><i className="fa fa-bullseye" /> AI + Data</p>
                <p className="description">Use your data to make intelligent decisions through AI and machine learning.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid container-lead">
          <div className="container">
            <div className="row">
              <div className="col-md-6 lead">
                We build electronics, manufacturing controls, custom lighting, IoT devices, and cloud-based systems.
              </div>
              <div className="col-md-6 lead">
                We&apos;re available one-off specialty equipment and large production runs.
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid container-tags">
          <div className="container">
            <div className="row">
              <div className="col-md-4 tag">
                <div className="title">
                  End-to-End Solutions
                </div>
                <div className="description">
                  Our multidiciplinary team takes your ideas from discovery to production.
                </div>
              </div>
              <div className="col-md-4 tag">
                <div className="title">
                  Startup Tested
                </div>
                <div className="description">
                  We know startups- as founders and early employees.
                </div>
              </div>
              <div className="col-md-4 tag">
                <div className="title">
                  Colorado Built
                </div>
                <div className="description">
                  We&apos;re focused on building products and tools for Colorado companies, and we do it with a local team of experts.
                  <br/><br/>
                  <a className='btn btn-primary-contrast btn-join btn-lg' href='/join'>Engineer? Join our team!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid container-contact">
          <div className="container">
            <h2>Contact Us</h2>
            <div className="row">
              <div className="col-md-6">
                <p>What can we build for you? Don&apos;t hesitate to drop us a line.</p>
                <ContactForm></ContactForm>
              </div>
              <div className="col-md-6 contact-details">
                <h4>Email Us Directly:</h4>
                <p>info@squarewaveng.com</p>
                <h4>Call Us:</h4>
                <p>303-552-9644</p>
                <a className='btn btn-primary btn-join btn-lg' href='/join'>Join our team!</a>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;