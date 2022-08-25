// import nav with haeder
import React from "react";
import NavTabs from "./NavTabs"

function Header({ currentPage, handlePageChange }) {
  return (
<nav class="navbar d-flex justify-content-around navi">
  <h1>Lawrence Kocaj</h1>
    <NavTabs handlePageChange={handlePageChange} currentPage={currentPage}/>
</nav>
  );
}

export default Header;
