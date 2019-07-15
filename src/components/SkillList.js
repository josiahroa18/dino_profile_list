import React, { Component } from 'react'

export class SkillList extends Component {
    render() {
        return (
            <div className="skills-list">
                <ul className={this.props.open ? "" : "hidden"}> 
                    {this.props.dinoSkills.map(skill => (<li>{skill}</li>))}
                </ul>
            </div>
        )
    }
}

export default SkillList
