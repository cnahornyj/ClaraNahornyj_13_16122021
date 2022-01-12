import logo from "../assets/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

/**  const userIsAuth = useSelector((state) => state.isAuth);
  // on peut ensuite utiliser cette valeur dans le rendu
  return <p>{userIsAuth ? "Link to login" : "Link to disconnect"}</p>; */

function Header() {
  const userIsAuth = useSelector((state) => state.isLoggedIn);

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
      {userIsAuth ? (
        <div style={{display:"flex"}}>
          <i className="fas fa-user"></i>
          <p>user.firstname</p>
          <Link className="main-nav-item" to="/">
          {/* onClick dispatch action login */}
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
