const OfficeOfElectricity = () => {
  return (
    <div>
      <section className="py-md-11 py-8" id="superhero">
        <div
          className="bg-holder z-index--1 bottom-0 d-none d-lg-block background-position-top"
          style={{
            backgroundImage: "url(assets/img/superhero/oval.png)",
            opacity: ".5",
            backgroundPosition: "top",
          }}
        ></div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h1 className="fw-bold mb-4 fs-7">
                Report for Office of Electricity
              </h1>
              <p className="mb-5 text-info fw-medium">
                Office of Electricity/ Office of Energy Efficiency and Renewable
                Energy RFI DE- FOA-0002777: BIL 41001 Energy Storage
                Demonstration Projects agreement performance parameters,
                establishing warranty backstops, or facilitating debt financing?
                How could ROVI tools facilitate better-informed resilience
                planning and future grid design?
              </p>
              <button
                className="btn btn-md text-white"
                style={{ background: "#232536" }}
              >
                Read More...
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default OfficeOfElectricity;
