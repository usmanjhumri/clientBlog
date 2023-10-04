import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import History from "./Pages/History";
import Article from "./components/Article";
import About from "./Pages/About";
import Team from "./Pages/Team";
import Benfits from "./Pages/Benfits";
import Offer from "./Pages/Offer";
import Battery from "./Pages/Battery";
import Energy from "./Pages/Energy";
import Mission from "./Pages/Mission";
import Report from "./Pages/Report";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/benefits" element={<Benfits />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/battery" element={<Battery />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/report" element={<Report />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles" element={<Article />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
