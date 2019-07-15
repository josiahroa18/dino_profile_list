import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <header>
                <img src={this.props.HeaderImage} alt="Dinosaur Logo" />
            </header>
        )
    }
}

export default Header;
