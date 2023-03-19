import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <div className="flex-1">
          <h1 className=" normal-case text-xl">
            Secure authentication and authorization
          </h1>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/login">
                <a>Login</a>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <a>Signup</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
