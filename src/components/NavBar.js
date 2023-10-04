import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg shadow navbar-light sticky-top bg-white"
        data-navbar-on-scroll="data-navbar-on-scroll"
      >
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            <img src="assets/img/logo.png" height="31" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div
            className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/about"}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/about"}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/mission"}>
                      Our Mission
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/team"}>
                      Our Team
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to={"/goals"}>
                      Goals
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products & Services
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/history"}>
                      History of Innovation
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/offer"}>
                      What do we offer?
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to={"/benefits"}>
                      Benefits of the innovative form of constant energy
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/battery"}>
                      Battery Storage System
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/energy"}>
                      Energy Storage for E-mobility
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={"/blog"}>
                  Blog
                </Link>
              </li>
              <li
                className="nav-item dropdown"
                style={{ ":hover": { display: "block" } }}
              >
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Report
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/congress"}>
                      Why the Congress should be interested
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/report"}>
                      Report for Office of Electricity
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " to={"/faq"}>
                      FAQs
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="d-flex ms-lg-4">
              <Link
                className={`btn mx-auto text-white ${styles.btn}`}
                to={"/contact"}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
