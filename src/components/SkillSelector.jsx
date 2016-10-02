import React from 'react';
import $ from 'jquery';
import AutoSuggest from 'react-autosuggest';
import SkillItem from './SkillItem';

class SkillSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSkills: [],
      skills: [],
      suggestions: [],
      newSkill: ''
    }
  }

  // Teach Autosuggest how to calculate suggestions for any given input value.
  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? [] : this.state.skills.filter(skill =>
      skill.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  }

  // When suggestion is clicked, Autosuggest needs to populate the input field
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  getSuggestionValue = (skill) => {
    return skill.name;
  }

  // Use your imagination to render suggestions.
  renderSuggestion = (skill) => {
    return(
      <span>{skill.name}</span>
    )
  }

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };


  componentDidMount = () => {
    $.ajax({
      method: 'GET',
      url: API_HOST + '/skills',
      contentType: 'application/json'
    }).done(
      (body) => {
        this.setState({skills: JSON.parse(body)});
      }
    );
  }

  handleNewSkillChange = (event, { newValue }) => {
    this.setState({newSkill: newValue})
    if(event.type == 'click'){
      setTimeout(this.addSkillToSelectedList.bind(this))
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.addSkillToSelectedList();
  }

  addSkillToSelectedList = () => {
    if(this.state.newSkill.length == 0){ return; }
    let existingSkill = this.state.skills.find(s => s.name == this.state.newSkill);

    if(existingSkill){
      var notInList = !this.state.selectedSkills.find(s => s.name == this.state.newSkill);
      if(notInList){
        this.setState({selectedSkills: this.state.selectedSkills.concat(existingSkill)});
      }
    } else {
      $.ajax({
        method: 'POST',
        url: API_HOST + '/skills',
        contentType: 'application/json',
        data: JSON.stringify({
          name: this.state.newSkill
        })
      }).done( (newSkill) => {
        this.setState({
          skills: this.state.skills.concat(newSkill),
          selectedSkills: this.state.selectedSkills.concat(newSkill)
        });
        this.render();
      });
    }
    this.setState({newSkill: ''});
  }

  removeSkillFromSelectList = (skill) => {
    let idx = this.state.selectedSkills.indexOf(skill);
    var selectedSkills = this.state.selectedSkills;
    selectedSkills.splice(idx,1);
    this.setState({selectedSkills: selectedSkills});
  }

  render() {
    // Autosuggest will pass through all these props to the input field.
    const inputProps = {
      placeholder: 'Skill',
      value: this.state.newSkill,
      onChange: this.handleNewSkillChange,
      className: 'form-control'
    };

    return(
      <div className='skill-selector'>
        <ul>
          {this.state.selectedSkills.map( (skill) => <SkillItem key={skill.id} skill={skill} removeSkillCallback={this.removeSkillFromSelectList}></SkillItem> )}
        </ul>
         <div className="clearfix"></div>
        <form className='row' onSubmit={this.handleSubmit}>
          <div className='col-xs-11'>
            <AutoSuggest
              suggestions={this.state.suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={this.getSuggestionValue}
              renderSuggestion={this.renderSuggestion}
              inputProps={inputProps} />
            </div>
            <div className='col-xs-1'>
              <a href='javascript:void(0)' onClick={this.addSkillToSelectedList}>
                <i className='fa fa-plus-circle btn btn-primary add-skill' aria-hidden='true'></i>
              </a>
            </div>
        </form>
      </div>
    )
  }
}

export default SkillSelector;