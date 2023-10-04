import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Objectives from "../components/Objectives";
import HeroTextOne from "../components/HeroTextOne";
import HeroTextTwo from "../components/HeroTextTwo";
import HeroTextThree from "../components/HeroTextThree";
import OfficeOfElectricity from "../components/OfficeOfElectricity";
import ElectricPower from "../components/ElectricPower";
import HeroEnd from "../components/HeroEnd";
import Footer from "../components/Footer";
import Footer1 from "../components/Footer1";

const Home = () => {
  return (
    <div>
      {/* <NavBar/> */}
      <Hero />
      <Objectives />
      <HeroTextOne />
      <HeroTextTwo />
      <HeroTextThree />
      <OfficeOfElectricity />
      <ElectricPower />
      <HeroEnd />
      {/* <Footer /> */}
      {/* <Footer1 /> */}
    </div>
  );
};
export default Home;
