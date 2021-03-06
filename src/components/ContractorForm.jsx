import React from 'react';
import $ from 'jquery';
import SkillSelector from './SkillSelector';

var Scroll = require('react-scroll');

class ContractorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      city: '',
      speciality: '',
      otherSpeciality: '',
      currentlyEmployed: false,
      availability: '',
      projects: '',
      twitter: '',
      github: '',
      linkedin: '',
      website: '',
      anythingElse: '',
      skills: [],
      newsletter: true,
      errors: {},
      submitting: false
    }
  }

  submit = (event) => {
    if(this.state.submitting){ return; }

    event.preventDefault();
    this.setState({submitting: true});

    let postData = {
      email: this.state.email,
      name: this.state.name,
      city: this.state.city,
      speciality: this.state.speciality == 'other' ? this.state.otherSpeciality : this.state.speciality,
      currently_employed: this.state.currentlyEmployed,
      availability: this.state.availability,
      projects: this.state.projects,
      twitter: this.state.twitter,
      github: this.state.github,
      linkedin: this.state.linked,
      website: this.state.website,
      anythingElse: this.state.anythingElse,
      newsletter: this.state.newsletter,
      skills: this.state.skills.map( (skill) => skill.id)
    }

    $.ajax({
      method: 'POST',
      url: API_HOST + '/contractors',
      contentType: 'application/json',
      data: JSON.stringify(postData)
    }).done(
      () => {
        this.setState({sentAlert: true, errors: {}});
        this.setState({submitting: false});
        this.scrollToFormTop();
      }
    ).fail( (xhr, status, error) => {
      this.setState({errors: xhr.responseJSON});
      this.setState({submitting: false});
      this.scrollToFormTop();
    });
  }

  scrollToFormTop = () => {
    let scroller = Scroll.scroller;
    scroller.scrollTo('contractor-form-top', {
      duration: 250,
      smooth: true
    });
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
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

  handleOtherSpecialityChange = (event) => {
    this.setState({otherSpeciality: event.target.value});
  }

  handleCurrentlyEmployedChange = (event) => {
    this.setState({currentlyEmployed: event.target.chekced});
  }

  handleNewsletterChange = (event) => {
    this.setState({newsletter: event.target.chekced});
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

  handleSkillsChange = (skills) => {
    this.setState({skills: skills})
  }

  submitBtnClass = () => {
    let baseClasses = ['btn', 'btn-primary', 'btn-lg'];
    if(this.state.submitting){ baseClasses.push('disabled') }
    return baseClasses.join(' ');
  }

  render() {
    let classesFGNoErrors = 'form-group'
    let classesFGWErrors = classesFGNoErrors +' has-error'
    return (
      <div className='contractor-form' id='contractor-form-top'>
        {this.state.sentAlert ? <div className='alert alert-success'>Thanks! We&apos;ll be in touch soon!</div> : null}
        <div className='row'>
          <div className='col-md-6'>

            <h3>Getting in Touch</h3>
            <div className={this.state.errors.email ? classesFGWErrors : classesFGNoErrors}>
              <label htmlFor="email">Email address *</label>
              <input type="email" className="form-control" id="email" value={this.state.email} onChange={this.handleEmailChange} />
              {this.state.errors.email ? <span className="help-block">Email address {this.state.errors.email.join(', ')}.</span> : ''}
            </div>
            <div className={this.state.errors.name ? classesFGWErrors : classesFGNoErrors}>
              <label htmlFor="name">Name *</label>
              <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.handleNameChange} />
              {this.state.errors.name ? <span className="help-block">Name {this.state.errors.name.join(', ')}.</span> : ''}
            </div>
            <div className={this.state.errors.city ? classesFGWErrors : classesFGNoErrors}>
              <label htmlFor="city">City *</label>
              <input type="text" className="form-control" id="city" value={this.state.city} onChange={this.handleCityChange} />
              {this.state.errors.city ? <span className="help-block">City {this.state.errors.city.join(', ')}.</span> : ''}
            </div>
            <hr/>
            <h3>Your Skills</h3>
            <div className={this.state.errors.speciality ? classesFGWErrors : classesFGNoErrors}>
              <label htmlFor="speciality">Speciality *</label>
              <select className='form-control' id="speciality" value={this.state.speciality} onChange={this.handleSpecialityChange}>
                <option></option>
                <option>3D Design</option>
                <option>Computer Engineering</option>
                <option>Electrical Engineering</option>
                <option>Firmware Engineering</option>
                <option>Graphics Design</option>
                <option>Industrial Design</option>
                <option>Mechanical Engineering</option>
                <option>Software Engineering</option>
                <option>Project Managment</option>
                <option value='other'>Other (specify below)</option>
              </select>
              {this.state.errors.speciality ? <span className="help-block">Speciality {this.state.errors.speciality.join(', ')}.</span> : ''}
            </div>
            { this.state.speciality == 'other' ?
                <div className='form-group'>
                  <input type='text' className="form-control" id="other-speciality" placeholder='Speciality' value={this.state.otherSpeciality} onChange={this.handleOtherSpecialityChange} />
                </div>
                : ''
            }
            <div className="form-group">
              <label htmlFor="skills">Professional Skills</label>
              <SkillSelector onSkillChange={this.handleSkillsChange}></SkillSelector>
            </div>
          </div>
          <div className='col-md-6'>
            <h3>Your Availability</h3>
            <div className={this.state.errors.availability ? classesFGWErrors : classesFGNoErrors}>
              <label htmlFor="availability">Availability</label>
              <select className='form-control' id="availability" value={this.state.availability} onChange={this.handleAvailabilityChange}>
                <option></option>
                <option>Freelance</option>
                <option>Part Time</option>
                <option>Full Time</option>
                <option>Unavailable - just interested in networking</option>
              </select>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" defaultChecked={this.state.currentlyEmployed} onChange={this.handleCurrentlyEmployedChange}/> Currently Employed
              </label>
            </div>
            <hr />

            <h3>Anything Else</h3>
            <div className={this.state.errors.anything_else ? classesFGWErrors : classesFGNoErrors}>
              <textarea className="form-control" id="anythingElse" placeholder="Anything else you'd like to share. Projects, work history, personal website, Twitter, Github, etc." value={this.state.anythingElse} onChange={this.handleAnythingElseChange} />
              {this.state.errors.anything_else ? <span className="help-block">Field {this.state.errors.anything_else.join(', ')}.</span> : ''}
            </div>

            <div className="checkbox">
              <label>
                <input type="checkbox" defaultChecked={this.state.newsletter} onChange={this.handleNewsletterChange}/>
                  Receive our community newsletter for info about jobs and other members.
                  <br/><small>(We'll never send you advertisements.)</small>
              </label>
            </div>

            <br/><br/>
            <div className='text-right'>
              <button type="submit" className={this.submitBtnClass()} onClick={this.submit}>Join the Network</button>
            </div>
          </div>
        </div>


      </div>
    )
  }
}

export default ContractorForm;
