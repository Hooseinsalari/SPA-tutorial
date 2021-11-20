import React from "react";
import { Link, withRouter } from "react-router-dom";

const NavigationBar = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">home page</Link></li>
          <li><Link to="/about-us">about us</Link></li>
          <li><Link to="/profile">profile</Link></li>
          <li><Link to="/product">products</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default withRouter(NavigationBar);
