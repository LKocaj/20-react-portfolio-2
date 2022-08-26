import React from "react";

const styles = {
  cardStyle: {
    width: '18rem',
  },
}

export default function Cards(props) {
    return (
      <div class="row g-5 gap-5">
        {props.projects.map(item => (
        <div class="card" style={styles.cardStyle} key={item.id}>
        <img class="card-img-top" src={item.image} alt="img"/>
        <div class="card-body">
        
          <h5 class="card-title">{item.name}</h5>
          <p class="card-text">{item.description}</p>
          
        </div>
        <div class="card-footer">
            <a href={item.deployedLink} class="card-link">Source Code</a>
            <a href={item.repoLink} class="card-link">Website</a>
          </div>
        </div>
        ))}
      </div>
      
    );
  }