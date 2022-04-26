import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
        <ul>
            <NavLink to="/">
                <li>Home</li>
            </NavLink>
            <NavLink to="/about">
                <li>About</li>
            </NavLink>
        </ul>
    </div>
  );
};

export default NavigationBar;
