import Header from "../components/Header";
import Footer from "../components/Footer";
import WelcomeUser from "../components/WelcomeUser";
import Transactions from "../components/Transactions";

function Profile(){
  return (
    <section className="profile">
      <Header />
      <main className="main bg-dark-blue">
        <WelcomeUser />
        <Transactions/>
      </main>
      <Footer />
    </section>
  );
};

export default Profile;
