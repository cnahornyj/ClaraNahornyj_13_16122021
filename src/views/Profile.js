import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WelcomeUser from "../components/WelcomeUser";

class Profile extends Component {
  render() {
    return (
      <section className="profile">
        <Header />
        <main className="main bg-dark-blue">
          <WelcomeUser userName="{userName}" />
          <h2 className="sr-only">Accounts</h2>
        </main>
        <Footer />
      </section>
    );
  }
}

export default Profile;
