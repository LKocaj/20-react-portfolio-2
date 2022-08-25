import React from 'react';

const styles = {
  pageHeightStyle: {
    backgroundColor: "#FCB5AC"
  }
}

export default function PortfolioContainer({renderPage}) {

  return (
    <div class="vh-100 bgc" style={styles.pageHeightStyle}>
      {renderPage()}
    </div>
  );
}


