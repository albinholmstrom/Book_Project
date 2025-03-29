import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">Book Application</Link>
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
