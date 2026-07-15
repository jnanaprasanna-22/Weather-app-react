import "./Navbar.css";
import { FaCloudSun } from "react-icons/fa";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaCloudSun className="logo-icon" />
        <h2>Weather Dashboard</h2>
      </div>

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <BsSunFill /> : <BsMoonStarsFill />}
      </button>
    </nav>
  );
};

export default Navbar;