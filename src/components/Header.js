import logo from "../assets/argentBankLogo.png";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logUserOut } from "../store";

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();

  const loggedIn = useSelector((state) => state.loggedIn);
  const userFirstName = useSelector((state) => state.user.firstName);

  const logout = () => {
    dispatch(logUserOut());
    history.push('/login');
  }

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
        <div style={{ display: "flex", alignItems: "center" }}>
          <i className="fas fa-user" style={{ marginRight: "5px"}}></i>
          <p className="user-name">
            {userFirstName}
          </p>
          <button className="btn-logout" onClick={logout}>
            <i className="fas fa-sign-out-alt"></i>
            Sign Out
          </button>
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
