const BatteryHero = () => {
  return (
    <div className="text-black">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 ">
            <p className="text-start fw-medium mb-3 px-5 col-xl-12">
              Globally, electrical power infrastructures are undergoing a
              significant transformation as a result of smart grid initiatives,
              the development of renewable energy sources and the resulting
              distributed nature of electricity generation, the requirement for
              autonomous microgrids to ensure grid reliability, new demands from
              end users, the need to reduce greenhouse gas emissions, and the
              capacity to accommodate mixed energy resources. As a result, the
              power network must overcome significant obstacles in the
              generation, transmission, and distribution to fulfill evolving and
              frequently unexpected needs for a consistent electricity supply.
              With a multitude of technologies that have the potential to help
              with these difficulties significantly, Electrical Energy Storage
              (EES) has been hailed as the way out.
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-6 ">
            <p className="text-center fw-medium px-8 mb-4 col-xl-12">
              The current battery storage system needs to be more sustainable as
              many still run out of power, especially those without the grid and
              those using EVs. Our approach with the innovative constant
              electric power energy system device eliminates these challenges as
              our device doesn't need a battery storage system to function like
              most renewable energy devices currently in the market. The system
              will effectively supply uninterrupted power without any battery
              storage system installed. Here is a system that will directly work
              with any application needing electrical power.
            </p>
          </div>

          <div className="col-lg-6 ">
            <img
              className="img-fluid mb-4 w-50"
              src="assets/img/turbine.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BatteryHero;
