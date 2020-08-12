import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/upload">Upload</Link>
      {/* <Link to="/" /> */}
    </nav>
  );
}

export default Nav;
