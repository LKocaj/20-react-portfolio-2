// import nav with haeder
import React from "react";
import NavTabs from "./NavTabs"

function Header({ currentPage, handlePageChange }) {
  return (
<nav class="navbar px-5 py-3 text-align-around">
  <h1>Lawrence Kocaj</h1>
    <NavTabs handlePageChange={handlePageChange} currentPage={currentPage}/>
</nav>
  );
}

export default Header;