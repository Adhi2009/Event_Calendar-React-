import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = ({ watchlistCount }) => {
  const { user, isLoggedIn, login, logout } = useAuth();

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink className="brand" to="/" aria-label="Red Dragon Events home">
          <span className="brand-mark">RD</span>
          <span>
            <strong>Red Dragon</strong>
            <small>Events</small>
          </span>
        </NavLink>

        <nav className="main-nav" aria-label="Main navigation">
          <NavLink to="/" end>Explore Events</NavLink>
          <NavLink to="/calendar">Calendar</NavLink>
          <NavLink to="/watchlist">
            My Watchlist <span className="nav-count">{watchlistCount}</span>
          </NavLink>
        </nav>

        <div className="auth-area">
          {isLoggedIn && <span className="welcome-text">Hi, {user.name}</span>}
          <button className={isLoggedIn ? "button button-ghost" : "button button-primary"} onClick={isLoggedIn ? logout : login}>
            {isLoggedIn ? "Log out" : "Mock login"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
