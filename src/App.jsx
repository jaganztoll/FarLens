import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import FC3Gallery from "./pages/FC3Gallery";
import FC4Gallery from "./pages/FC4Gallery";
import FC5Gallery from "./pages/FC5Gallery";
import FC6Gallery from "./pages/FC6Gallery";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          {/* Startseite mit Hero, About, Gallery and Contact */}
          <Route path="/" element={<HomePage />} />

          {/* Far Cry Galerien */}
          <Route path="/fc3" element={<FC3Gallery />} />
          <Route path="/fc4" element={<FC4Gallery />} />
          <Route path="/fc5" element={<FC5Gallery />} />
          <Route path="/fc6" element={<FC6Gallery />} />

          {/* Optional: 404-Seite */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
