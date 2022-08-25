import React from 'react';

const styles = {
  pageHeightStyle: {
    backgroundImage: "/public/assets/space.png"
  }
}

export default function PortfolioContainer({renderPage}) {

  return (
    <div class="vh-100 bgc" style={styles.pageHeightStyle}>
      {renderPage()}
    </div>
  );
}


