import React, { Component } from 'react';
import Profile from './Profile';

export class Profiles extends Component {
    render() {
        let dinoProfiles = this.props.DinoProfiles.map(profile => 
            <Profile profile={profile}/>
        )
        return (
            <main>
                <section id="profiles-container">
                    <h2>Profiles</h2>
                    <ul id="profiles">
                        {dinoProfiles}
                    </ul>
                </section>
            </main>
        )
    }
}

export default Profiles;
