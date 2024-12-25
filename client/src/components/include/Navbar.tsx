import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <h1 className="text-3xl">Visuify</h1>
      <ul className="flex space-x-3 text-xl">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/imagestudio">Image Studio</Link>
        </li>
        <li>
          <Link to="/signup">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
