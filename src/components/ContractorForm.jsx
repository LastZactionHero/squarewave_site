import React from 'react';
import $ from 'jquery';
import SkillSelector from './SkillSelector';

// Email:             payload.Email,
// Name:              payload.Name,
// City:              payload.City,
// Phone:             payload.Phone,
// Speciality:        payload.Specialty,
// CurrentlyEmployed: payload.CurrentlyEmployed,
// Availability:      payload.Availability,
// Projects:          payload.Projects,
// Twitter:           payload.Twitter,
// Github:            payload.Github,
// Linkedin:          payload.Linkedin,
// Website:           payload.Website,
// AnythingElse:      payload.AnythingElse,
// Skills:            skills,

class ContractorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      city: '',
      phone: '',
      speciality: '',
      currentlyEmployed: false,
      availability: '',
      projects: '',
      twitter: '',
      github: '',
      linkedin: '',
      website: '',
      anythingElse: '',
      skills: ''
    }
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

  handleCityChange = (event) => {
    this.setState({city: event.target.value});
  }

  handleSpecialityChange = (event) => {
    this.setState({speciality: event.target.value});
  }

  handleCurrentlyEmployedChange = (event) => {
    this.setState({currentlyEmployed: event.target.value});
  }

  handleProjectsChange = (event) => {
    this.setState({projects: event.target.value});
  }

  handleAvailabilityChange = (event) => {
    this.setState({availability: event.target.value});
  }

  handleTwitterChange = (event) => {
    this.setState({twitter: event.target.value});
  }

  handleGithubChange = (event) => {
    this.setState({github: event.target.value});
  }

  handleLinkedinChange = (event) => {
    this.setState({linkedin: event.target.value});
  }

  handleWebsiteChange = (event) => {
    this.setState({website: event.target.value});
  }

  handleAnythingElseChange = (event) => {
    this.setState({anythingElse: event.target.value});
  }

  handleSkillsChange = (event) => {
    this.setState({skills: event.target.value});
  }

  render() {
    return (
      <div>
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
          <label htmlFor="city">City</label>
          <input type="text" className="form-control" id="city" placeholder="City" value={this.state.city} onChange={this.handleCityChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="text" className="form-control" id="phone" placeholder="Phone" value={this.state.phone} onChange={this.handlePhoneChange} />
        </div>
        <div className="form-group">
          <label htmlFor="speciality">Speciality</label>
          <input type="text" className="form-control" id="speciality" placeholder="" value={this.state.speciality} onChange={this.handleSpecialityChange} />
        </div>
        <div className="form-group">
          <label htmlFor="currentlyEmployed">Currently Employed</label>
          <input type="text" className="form-control" id="currentlyEmployed" value={this.state.currentlyEmployed} onChange={this.handleCurrentlyEmployedChange} />
        </div>
        <div className="form-group">
          <label htmlFor="availability">Availability</label>
          <input type="text" className="form-control" id="availability" placeholder="" value={this.state.availability} onChange={this.handleAvailabilityChange} />
        </div>
        <div className="form-group">
          <label htmlFor="projects">Projects</label>
          <textarea className="form-control" id="projects" placeholder="" value={this.state.projects} onChange={this.handleProjectsChange} />
        </div>
        <div className="form-group">
          <label htmlFor="twitter">Twitter</label>
          <input type="text" className="form-control" id="twitter" placeholder="" value={this.state.twitter} onChange={this.handleTwitterChange} />
        </div>
        <div className="form-group">
          <label htmlFor="github">Github</label>
          <input type="text" className="form-control" id="github" placeholder="" value={this.state.github} onChange={this.handleGithubChange} />
        </div>
        <div className="form-group">
          <label htmlFor="linkedin">LinkedIn</label>
          <input type="text" className="form-control" id="linkedin" placeholder="" value={this.state.linkedin} onChange={this.handleLinkedinChange} />
        </div>
        <div className="form-group">
          <label htmlFor="website">Personal Website</label>
          <input type="text" className="form-control" id="website" placeholder="" value={this.state.website} onChange={this.handleWebsiteChange} />
        </div>
        <div className="form-group">
          <label htmlFor="anythingElse">Anything Else</label>
          <textarea className="form-control" id="anythingElse" placeholder="" value={this.state.anythingElse} onChange={this.handleAnythingElseChange} />
        </div>
        <div className="form-group">
          <label htmlFor="skills">Skills</label>
          <SkillSelector></SkillSelector>
        </div>
        <button type="submit" className="btn btn-default" onClick={this.submit}>Contact Us</button>
      </div>
    )
  }
}

export default ContractorForm;