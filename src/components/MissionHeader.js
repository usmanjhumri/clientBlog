const MissionHeader = () => {
  return (
    <div>
      <section className="pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-md-start text-center py-6">
              <h1 className="mb-4 fs-7 fw-bold text-capitalize">
                Shakarzahi’s Missions and Objectives
              </h1>
            </div>
            <div className="col-md-6 text-end">
              <img
                className="pt-9 pt-md-0 img-fluid"
                src="assets/img/mission.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default MissionHeader;
