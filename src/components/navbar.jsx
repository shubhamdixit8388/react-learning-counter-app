import React from "react";

// Stateless Finctional Component
const NavBar = (props) => {
  const { totalCounters } = props;
  return (
    <nav class="navbar navbar-dark bg-dark">
      <span class="navbar-brand mb-0 h1">
        Navbar
        <span className="badge badge-pill badge-secondary ml-2">
          {totalCounters}
        </span>
      </span>
    </nav>
  );
};

export default NavBar;
