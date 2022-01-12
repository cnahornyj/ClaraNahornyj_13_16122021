import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  /*const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(false);

  // Gérer le changement input event onChange
 const handleChange = (event) => {
   // use set?
    this.setState({
      [event.target.name]: event.target.value
    });
  };*/

  /* Gérer la soumission du formulaire avec les informations récupérées
  puis redirection vers la page de profil de l'utilisateur et propriété error à true
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props
      .dispatchLoginUser({ email, password })
      .then(() => this.props.history.push("/"))
      .catch(() => this.setState({ error: true }));
  };
 */

  return (
    <section className="login">
      <Header />
      <main className="main bg-dark-blue">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button
              className="sign-in-button"
              // le state change d'état mais il n'est pas conservé /!\
              // reload de la page au clic retour à l'état initial voir pour faire persister
              onClick={() => {
                dispatch({ type: "login" });
              }}
            >
              Sign In
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </section>
  );
}

/*
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLoginUser: (credentials) => dispatch(loginUser(credentials))
  };
};

export default connect(null, mapDispatchToProps)(Login);*/

export default Login;
