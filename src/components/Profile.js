import React, { Component } from 'react';
import SkillList from './SkillList';

export class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false
        }
    }

    onClick = (e) => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        return (
            <li className="profile-card" onClick={this.onClick}>
                <div className="profile-header">
                    <img className="profile-header" src={"."+this.props.profile.image} alt="Dino"></img>
                    <p>
                        {this.props.profile.name}
                    </p>
                </div>
                <SkillList dinoSkills={this.props.profile.skills} open={this.state.open}/> 
            </li>
        )
    }
}

export default Profile
