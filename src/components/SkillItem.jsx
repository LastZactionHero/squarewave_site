import React from 'react';

class SkillItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRemove = () => {
    this.props.removeSkillCallback(this.props.skill);
  }

  render() {
    return(
      <li className='skill-item'>
        {this.props.skill.name}
        <a href='javascript:void(0)' onClick={this.handleRemove}><i className="fa fa-times-circle" aria-hidden="true"></i></a>
      </li>
    )
  }
}

export default SkillItem;