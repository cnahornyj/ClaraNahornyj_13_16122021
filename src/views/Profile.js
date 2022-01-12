import Header from "../components/Header";
import Footer from "../components/Footer";
import WelcomeUser from "../components/WelcomeUser";

function Profile(props){
  return (
    <section className="profile">
      <Header />
      <main className="main bg-dark-blue">
        <WelcomeUser userName="Thierry L'hermitte" />
        <h2 className="sr-only">Accounts</h2>
      </main>
      <Footer />
    </section>
  );
};

export default Profile;
