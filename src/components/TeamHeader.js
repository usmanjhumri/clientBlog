const TeamHeader = () => {
  return (
    <div>
      <section className="pt-7">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 text-md-start text-center py-6">
              <h1 className="mb-4 fs-9 fw-bold text-capitalize">Our Team</h1>
            </div>
            <div className="col-md-8 text-end">
              <img
                className="pt-9 pt-md-0 img-fluid"
                src="assets/img/Team.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default TeamHeader;
