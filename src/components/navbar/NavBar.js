// imports 
import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/about"> About </Link>
      <Link to="/market"> Market </Link>
      <Link to="/create"> Create </Link>
    </div>

    
    
  );
};

export default Navbar;
