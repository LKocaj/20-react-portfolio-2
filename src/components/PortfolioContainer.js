import React from 'react';

const styles = {
  pageHeightStyle: {
    backgroundColor: 0
  }
}

export default function PortfolioContainer({renderPage}) {

  return (
    <div class="vh-100 bgc" style={styles.pageHeightStyle}>
      {renderPage()}
    </div>
  );
}


