import React from 'react';

//reassign variable when necessary (switching pages)
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul class="nav nav-pills purp">
      
      <li class="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')} // depends which page youre on will show active or not
          class={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About
        </a>  
      </li>

      <li class="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}     
          class={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>My Portfolio
        </a>
      </li>

      <li class="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}     
          class={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Reach Out
        </a>
      </li>

      <li class="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}     
          class={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>My Resume 
        </a> 
      </li>

    </ul>
  );
}

export default NavTabs;