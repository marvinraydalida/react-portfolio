import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>
        <NavLink to="/"> Amben </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink
            style={(data) => (data.isActive ? { color: "#d342ab" } : {})}
            to="/about"
          >
            about
          </NavLink>
        </li>
        <li>
          <NavLink
            style={(data) => (data.isActive ? { color: "#d342ab" } : {})}
            to="/skill"
          >
            skills
          </NavLink>
        </li>
        <li>projects</li>
      </ul>
    </nav>
  );
}

export default Navbar;
