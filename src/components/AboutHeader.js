const AboutHeader = () => {
  return (
    <div>
      <section className="pt-7">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 text-md-start text-center py-6">
              <h1 className="mb-4 fs-9 fw-bold text-capitalize">About Us</h1>
              {/* <div className="text-center text-md-start">
                <Link
                  to="/contact"
                  className="btn me-3 btn-lg text-white"
                  role="button"
                  style={{ background: "#232536" }}
                >
                  {" "}
                  Contact Us
                </Link>
                <Link
                  className="btn btn-link fw-medium"
                  style={{ color: "#232536" }}
                  href="#!"
                  role="button"
                  data-bs-toggle="modal"
                  data-bs-target="#popupVideo"
                >
                  <span className="fas fa-play me-2"></span>Watch the video{" "}
                </Link>
              </div> */}
            </div>
            <div className="col-md-8 text-end">
              <img
                className="pt-9 pt-md-0 img-fluid"
                src="assets/img/aboutUs.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutHeader;
