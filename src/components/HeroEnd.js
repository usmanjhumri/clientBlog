const HeroEnd = () => {
  return (
    <div>
      <section className="pt-1" id="manager">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                className="img-fluid w-50"
                src="assets/img/product.png"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              {/* <p className="fs-7 fw-bold mb-2">Product Managers</p> */}
              <p className="mb-2 p-5 fw-medium text-center">
                Due to the numerous health issues connected to the daily
                consumption of gas, coal, and oil, which continuously releases
                greenhouse gases into the atmosphere, there is an urgent need to
                protect our climate and ecosystem. The answer to this
                challenging problem, which is slowly destroying our world, is an
                energy source with no emissions. To preserve our environment
                from poisonous and dangerous pollution, the SHAKARZAHI constant
                electric power energy device was designed with zero toxic
                emissions. Our main objective is to eliminate all dangerous
                pollution that may be avoided since we prioritize everyone's
                health.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HeroEnd;
