import React, { Component } from 'react';
import "../styles/FeatureItem.css";

class FeatureItem extends Component {
    render() {
        return (
           <section className='featureItem'>
               <img src={this.props.icon} alt="" />
               <h3>{this.props.title}</h3>
               <p>{this.props.text}</p>
           </section>
        );
    }
}

export default FeatureItem;