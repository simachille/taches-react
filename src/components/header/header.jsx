import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth-provider";
function Header() {
  const { currentUser } = useContext(AuthContext);

  const renderHeader = () => {
    if (currentUser) {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand" href="#">
            TACHES
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/taches" className="nav-link">
                  Liste
                </Link>
              </li>
              <li className="nav-item">
                <Link to="utilisateurs" className="nav-link">
                  Utilisateurs
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    } else {
      return <p className="sr-only"></p>;
    }
  };

  return <React.Fragment>{renderHeader()}</React.Fragment>;
}

export default Header;
