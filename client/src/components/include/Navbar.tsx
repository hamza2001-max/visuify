import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center pt-4">
      <h1 className="text-3xl font-medium">Visuify</h1>
      <ul className="flex space-x-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/imagestudio">Image Studio</Link>
        </li>
        <li>
          <Link to="/signup">Account</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
