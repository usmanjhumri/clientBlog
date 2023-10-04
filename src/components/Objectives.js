const Objectives = () => {
  return (
    <div>
      <section className="pt-5 pt-md-9 mb-6" id="feature">
        <div
          className="bg-holder z-index--1 bottom-0 d-none d-lg-block"
          style={{
            backgroundImage: "url(assets/img/category/shape.png)",
            opacity: ".5",
          }}
        ></div>

        <div className="container">
          <h1 className="fs-9 fw-bold mb-4 text-center text-capitalize">
            {" "}
            Our primary objectives <br className="d-none d-xl-block" />
          </h1>
          <div className="row">
            <div className="col-lg-3 col-sm-6 mb-2">
              {" "}
              <img
                className="mb-3 ms-n3"
                src="assets/img/category/icon1.png"
                width="75"
                alt="Feature"
              />
              <p className="mb-0 fw-medium text-secondary">
                Creating a reputable brand that instills quality, knowledge, and
                the highest degree of customer service.
              </p>
            </div>
            <div className="col-lg-3 col-sm-6 mb-2">
              {" "}
              <img
                className="mb-3 ms-n3"
                src="assets/img/category/icon2.png"
                width="75"
                alt="Feature"
              />
              <p className="mb-0 fw-medium text-secondary">
                Attract, retain, and motivate the best human resource talents
                with continuous development, work culture, and incentives.
              </p>
            </div>
            <div className="col-lg-3 col-sm-6 mb-2">
              {" "}
              <img
                className="mb-3 ms-n3"
                src="assets/img/category/icon3.png"
                width="75"
                alt="Feature"
              />
              <p className="mb-0 fw-medium text-secondary">
                Multiple revenue streams to diversify the portfolio and mitigate
                risks for a decline in segments of the market.
              </p>
            </div>
            <div className="col-lg-3 col-sm-6 mb-2">
              {" "}
              <img
                className="mb-3 ms-n3"
                src="assets/img/category/icon4.png"
                width="75"
                alt="Feature"
              />
              <p className="mb-0 fw-medium text-secondary">
                Achieve client satisfaction through quality, efficiency, safe,
                and timely delivery of products and services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Objectives;
