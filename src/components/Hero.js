import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <section className="pt-7">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-md-start text-center py-6">
              <h1 className="mb-4 fs-9 fw-bold text-capitalize">
                Introducing innovative constant electric power energy system
                device
              </h1>
              <div className="text-center text-md-start">
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
              </div>
            </div>
            <div className="col-md-6 text-end">
              <img
                className="pt-9 pt-md-0 img-fluid"
                src="assets/img/heroImg.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <div
        className="modal fade"
        id="popupVideo"
        tabindex="-1"
        aria-labelledby="popupVideo"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <iframe
              className="rounded"
              style={{ width: "100%", height: "500px" }}
              src="https://www.youtube.com/embed/5S1mEc-fa_0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
