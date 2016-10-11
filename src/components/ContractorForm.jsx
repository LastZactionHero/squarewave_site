import React from 'react';
import $ from 'jquery';
import SkillSelector from './SkillSelector';

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
      errors: []
    }
  }

  submit = (event) => {
    event.preventDefault();

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
      }
    ).fail( (xhr, status, error) => {
      this.setState({errors: xhr.responseJSON});
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

  render() {
    let classesFGNoErrors = 'form-group'
    let classesFGWErrors = classesFGNoErrors +' has-error'
    return (
      <div>
        {this.state.sentAlert ? <div className='alert alert-success'>Thanks! We&apos;ll be in touch soon!</div> : null}
        <div className='row'>
          <div className='col-md-6'>
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
            <div className="checkbox">
              <label>
                <input type="checkbox" defaultChecked={this.state.currentlyEmployed} onChange={this.handleCurrentlyEmployedChange}/> Currently Employed
              </label>
            </div>
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
            <div className={this.state.errors.projects ? classesFGWErrors : classesFGNoErrors}>
              <label htmlFor="projects">Projects</label>
              <textarea className="form-control" id="projects" placeholder="Any noteworthy projects you've worked on." value={this.state.projects} onChange={this.handleProjectsChange} />
              {this.state.errors.projects ? <span className="help-block">Projects {this.state.errors.projects.join(', ')}.</span> : ''}
            </div>
          </div>
          <div className='col-md-6'>
            <div className={this.state.errors.twitter ? classesFGWErrors : classesFGNoErrors}>
              <label htmlFor="twitter">Twitter</label>
              <input type="text" className="form-control" id="twitter" placeholder="" value={this.state.twitter} onChange={this.handleTwitterChange} />
              {this.state.errors.twitter ? <span className="help-block">Twitter {this.state.errors.twitter.join(', ')}.</span> : ''}
            </div>
            <div className={this.state.errors.github ? classesFGWErrors : classesFGNoErrors}>
              <label htmlFor="github">Github</label>
              <input type="text" className="form-control" id="github" placeholder="" value={this.state.github} onChange={this.handleGithubChange} />
              {this.state.errors.github ? <span className="help-block">Github {this.state.errors.github.join(', ')}.</span> : ''}
            </div>
            <div className={this.state.errors.linkedin ? classesFGWErrors : classesFGNoErrors}>
              <label htmlFor="linkedin">LinkedIn</label>
              <input type="text" className="form-control" id="linkedin" placeholder="" value={this.state.linkedin} onChange={this.handleLinkedinChange} />
              {this.state.errors.linkedin ? <span className="help-block">LinkedIn {this.state.errors.linkedin.join(', ')}.</span> : ''}
            </div>
            <div className={this.state.errors.website ? classesFGWErrors : classesFGNoErrors}>
              <label htmlFor="website">Personal Website</label>
              <input type="text" className="form-control" id="website" placeholder="" value={this.state.website} onChange={this.handleWebsiteChange} />
              {this.state.errors.website ? <span className="help-block">Website {this.state.errors.website.join(', ')}.</span> : ''}
            </div>
            <div className={this.state.errors.anything_else ? classesFGWErrors : classesFGNoErrors}>
              <label htmlFor="anythingElse">Anything Else</label>
              <textarea className="form-control" id="anythingElse" placeholder="Anything else you'd like to share." value={this.state.anythingElse} onChange={this.handleAnythingElseChange} />
              {this.state.errors.anything_else ? <span className="help-block">Field {this.state.errors.anything_else.join(', ')}.</span> : ''}
            </div>
            <div className="form-group">
              <label htmlFor="skills">Professional Skills</label>
              <SkillSelector onSkillChange={this.handleSkillsChange}></SkillSelector>
            </div>
          </div>
        </div>
        <div className='text-right'>
          <button type="submit" className="btn btn-primary" onClick={this.submit}>Join the Network</button>
        </div>
        
      </div>
    )
  }
}

export default ContractorForm;