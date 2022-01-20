import logo from "../assets/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const loggedIn = useSelector((state) => state.loggedIn);

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {loggedIn ? (
        <div style={{display:"flex"}}>
          <i className="fas fa-user"></i>
          <p>user.firstname</p>
          <Link className="main-nav-item" to="/">
            <i className="fas fa-sign-out-alt"></i>
            Sign Out
          </Link>
        </div>
      ) : (
        <div>
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Header;
