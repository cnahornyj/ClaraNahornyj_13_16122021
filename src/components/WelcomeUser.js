import React, { Component } from 'react';

class WelcomeUser extends Component {
    render() {
        return (
            <div className='header'>
                <h1>Welcome back <br/>{this.props.userName}</h1>
                <button className='edit-button'>Edit name</button>
            </div>
        );
    }
}

export default WelcomeUser;