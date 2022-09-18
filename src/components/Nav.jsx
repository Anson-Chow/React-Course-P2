import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/users/ronaldo">Ronaldo</Link>
      <Link to="/users/messi">Messi</Link>
      <Link to="/users/david">Br4gg</Link>
    </nav>
  );
};

export default Nav;
