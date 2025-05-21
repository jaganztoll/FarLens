import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import FC3Gallery from "./pages/FC3Gallery";
import FC4Gallery from "./pages/FC4Gallery";
import FC5Gallery from "./pages/FC5Gallery";
import FC6Gallery from "./pages/FC6Gallery";
import Credits from "./pages/Credits";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          {/* Hero, About, Gallery */}
          <Route path="/" element={<HomePage />} />
          {/* Far Cry 3-6 */}
          <Route path="/fc3" element={<FC3Gallery />} />
          <Route path="/fc4" element={<FC4Gallery />} />
          <Route path="/fc5" element={<FC5Gallery />} />
          <Route path="/fc6" element={<FC6Gallery />} />
          {/* Credits */}
          <Route path="/credits" element={<Credits />} />
        </Routes>
      </main>
      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
