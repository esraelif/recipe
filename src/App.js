import { Browser as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Recipes from "./pages/Recipes";
import Setting from "./pages/Setting";

import './styles/index.scss';
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>

      </div>
      <Footer />
    </Router>
  );
}

export default App;
