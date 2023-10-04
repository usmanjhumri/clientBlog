import "bootstrap-icons/font/bootstrap-icons.css";
const Footer = () => {
  return (
    <div>
      <section
        className="pb-2 pb-lg-7 "
        style={{ height: "100px", font: "10px!important" }}
      >
        <div className="container">
          <div className="row border-top border-top-secondary pt-4">
            <div className="col-lg-4 col-md-6 mb-2 mb-md-6 mb-lg-0 mb-sm-2 order-1 order-md-1 order-lg-1">
              <p className="fs-2 mb-lg-4">
                Austin, Texas, United States <br /> Shakarhazi LLC
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0 order-3 order-md-3 order-lg-3">
              <p className="fs-2 mb-lg-4">Leave us a message</p>
              <form className="mb-3">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Enter Your Email"
                  aria-label="Email Address"
                />
              </form>
              <button
                className="btn btn-md text-white"
                style={{ background: "#232536" }}
              >
                Contact Us
              </button>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 order-2 order-md-2 order-lg-2">
              <p className="fs-2 mb-lg-4">Social Links</p>
              <ul
                className="list-unstyled d-flex mb-0"
                style={{
                  gap: "15px",
                  justifyContent: "center",
                  color: "#232536",
                }}
              >
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="#!"
                  >
                    <i
                      class="bi bi-facebook  fs-3"
                      style={{ color: "#232536" }}
                    ></i>
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="#!"
                  >
                    <i
                      class="bi bi-twitter fs-3"
                      style={{ color: "#232536" }}
                    ></i>
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="#!"
                  >
                    <i
                      class="bi bi-instagram fs-3"
                      style={{ color: "#232536" }}
                    ></i>
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="#!"
                  >
                    <i
                      class="bi bi-youtube fs-3"
                      style={{ color: "#232536" }}
                    ></i>
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="#!"
                  >
                    <i
                      class="bi bi-quora fs-3"
                      style={{ color: "#232536" }}
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Footer;
