import React, { Component } from "react";
import "../styles/Banner.css";

class Banner extends Component {
  render() {
    return (
      <section className="banner">
        <article>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </article>
      </section>
    );
  }
}

export default Banner;
