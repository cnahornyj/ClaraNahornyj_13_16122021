import React, { Component } from "react";
class FeatureItem extends Component {
  render() {
    return (
      <div className="feature-item">
        <img src={this.props.icon} alt="" className="feature-icon" />
        <h3 className="feature-item-title">{this.props.title}</h3>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default FeatureItem;
