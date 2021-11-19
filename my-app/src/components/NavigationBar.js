import React from "react";
import { Link, withRouter } from "react-router-dom";

const NavigationBar = (props) => {
  return (
    <div>
      <nav>
        <ul>
            {console.log(props)}
          <Link to="/">home page</Link>
          <br />
          <Link to="/about-us">about us</Link>
        </ul>
      </nav>
    </div>
  );
};

export default withRouter(NavigationBar);
