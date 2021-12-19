import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import FeatureItem from "../components/FeatureItem";
import chat from "../assets/icon-chat.png";
import money from "../assets/icon-money.png";
import security from "../assets/icon-security.png";

class HomePage extends Component {
  render() {
    return (
      <section className="home">
        <Header />
        <Banner />
        <main>
          <section className="features">
            <h2 className="sr-only">Features</h2>
            <FeatureItem
              icon={chat}
              title="You are our #1 priority"
              text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            />
            <FeatureItem
              icon={money}
              title="More savings means higher rates"
              text="The more you save with us, the higher your interest rate will be!"
            />
            <FeatureItem
              icon={security}
              title="Security you can trust"
              text="We use top of the line encryption to make sure your data and money is always safe."
            />
          </section>
        </main>
        <Footer />
      </section>
    );
  }
}

export default HomePage;
