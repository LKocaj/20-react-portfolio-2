import React from 'react';
// Say a lil something about you
export default function Home() {
  return (
    <div class = "w-50 mx-auto">
      <h1 class ="pb-4 pt-2">About me</h1>

      <article>
      <img class="float" src={""} alt="Mr Lawrence"/>
        <p>Web Developer from New York looking to pursue a career in tech</p>
      </article>

      <article>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </article>
    </div>
    
  );
}