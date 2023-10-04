const BatteryHeader = () => {
  return (
    <div>
      <section className="pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 text-md-start text-center py-6">
              <h1 className="mb-4 fs-7 fw-bold text-capitalize">
                Battery Storage System
              </h1>
            </div>
            <div className="col-md-7 text-end">
              <img
                className="pt-9 pt-md-0 img-fluid"
                src="assets/img/Battery.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default BatteryHeader;
