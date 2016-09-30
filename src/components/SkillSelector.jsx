import React from 'react';
import $ from 'jquery';
// import AutoSuggest from "react-autosuggest";

class SkillSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [],
      newSkill: ''
    }
  }

  componentDidMount = () => {
    $.ajax({
      method: 'GET',
      url: 'http://contactus.squarewaveng.com/skills',
      contentType: 'application/json'
    }).done(
      (body) => {
        this.setState({skills: JSON.parse(body)});
      }
    );
  }

  handleNewSkillChange = (event) => {
    this.setState({newSkill: event.target.value});
  }

  render() {
    let skillRows = this.state.skills.map(function(skill){
      return <li key={skill.id}>{skill.name}</li>
    });

    return(
      <div>
        <ul>{skillRows}</ul>
        <input type="text" className="form-control" id="website" placeholder="" value={this.state.newSkill} onChange={this.handleNewSkillChange} />
        <a href='javascript:void(0)'><i className="fa fa-plus-circle" aria-hidden="true"></i></a>
      </div>
    )
  }
}

export default SkillSelector;