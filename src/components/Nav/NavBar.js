import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg px-5"
        style={{ backgroundColor: "#232536" }}
      >
        <div className="container-fluid">
          <div className="logo-menu-container">
            <Link className="navbar-brand" to={"/"}>
              <img
                src="assets/img/logomain1.png"
                className=""
                alt="logo"
                style={{ width: "150px" }}
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDarkDropdown"
              aria-controls="navbarNavDarkDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav ms-auto me-5">
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  aria-current="page"
                  to={"/"}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown my-2 text-light">
                <span
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Company
                </span>
                <ul className="dropdown-menu dropdown-menu-light">
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
                </ul>
              </li>
              <li className="nav-item dropdown my-2  text-light">
                <span
                  className=" dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products & Services
                </span>
                <ul className="dropdown-menu dropdown-menu-light">
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
                      Benefits of the innovative <br /> <br /> form of constant
                      energy
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
              <li className="nav-item ">
                <span className="">
                  <Link className="nav-link text-light " to={"/blog"}>
                    Blog
                  </Link>
                </span>
              </li>

              <li className="nav-item dropdown my-2  text-light">
                <span
                  className=" dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Report & Government
                </span>
                <ul className="dropdown-menu dropdown-menu-light">
                  <li>
                    <Link className="dropdown-item" to={"/congress"}>
                      Why the Congress should be interested
                    </Link>
                  </li>
                  <li>
                    <Link to={"/report"} className="dropdown-item">
                      Report for Office of Electricity
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/faq"}>
                      FAQs
                    </Link>
                  </li>
                </ul>
              </li>

              <button type="button" className="btn rounded btn-light mx-3 px-4">
                <Link to={"/contact"}>Contact Us</Link>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
