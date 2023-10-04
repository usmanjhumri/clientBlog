import "./ReportHeader.css";

const ReportHeader = () => {
  return (
    <div>
      <section className="">
        <div className="Reporthero">
          <div className=" w-100 col-lg-6 col-md-6 col-sm-12">
            <h1 className="text-white Reportherotext">
              Report for Office of Electricity
            </h1>
            <div className="Reportbtn-area">
              <a
                href="https://drive.google.com/drive/folders/1Aa_HTsRe5X3xBCsec2k8Fjee_5mVRVTQ"
                className="btn me-3 btn-lg text-white"
                role="button"
                style={{ background: "#232536" }}
              >
                Read More...
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <img
          className="w-100 h-25 py-1 pb-3 img-fluid"
          src="assets/img/pattern.png"
          alt=""
        />
      </section>
    </div>
  );
};
export default ReportHeader;
