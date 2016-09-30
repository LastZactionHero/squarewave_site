import React from 'react';
import $ from 'jquery';

class ContactForm extends React.Component<> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      phone: '',
      message: '',
      sentAlert: false
    };
  }

  submit = (event) => {
    event.preventDefault();
    $.ajax({
      method: 'POST',
      url: 'http://contactus.squarewaveng.com/contact',
      contentType: 'application/json',
      data: JSON.stringify({
        email: this.state.email,
        name: this.state.name,
        phone: this.state.phone,
        message: this.state.message
      })
    }).done(
      () => {
        this.setState({sentAlert: true});
      }
    )
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  handlePhoneChange = (event) => {
    this.setState({phone: event.target.value});
  }

  handleMessageChange = (event) => {
    this.setState({message: event.target.value});
  }

  render() {
    return (
      <form>
        {this.state.sentAlert ? <div className='alert alert-success'>Thanks! We&apos;ll be in touch soon!</div> : null}
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Name" value={this.state.name} onChange={this.handleNameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="text" className="form-control" id="phone" placeholder="Phone" value={this.state.phone} onChange={this.handlePhoneChange} />
        </div>
        <div className="form-group">
          <label htmlFor="message">What can we do for you?</label>
          <textarea className="form-control" id="message" placeholder="" value={this.state.message} onChange={this.handleMessageChange} />
        </div>
        <button type="submit" className="btn btn-default" onClick={this.submit}>Contact Us</button>
      </form>
    )
  }
}

export default ContactForm;