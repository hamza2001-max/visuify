import "./App.css";
import ImageStudio from "./pages/ImageStudio";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Navbar from "./components/include/Navbar";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/imagestudio" element={<ImageStudio />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
