import "./App.css";
import ImageStudio from "./pages/ImageStudio";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <div className="container">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl">Visuify</h1>
          <ul className="flex space-x-3 text-xl">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/imagestudio">Image Studio</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/imagestudio" element={<ImageStudio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
