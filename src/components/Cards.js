import React from "react";

const styles = {
    cardStyle: {
      width: '18rem',
    },
  }

export default function Cards(props) {
    return (
      <div class="row g-4 gap-3">
        {props.projects.map(item => (
        <div class="card ps-0 pe-0" style={styles.cardStyle} key={item.id}>
        <img class="card-img-top" src={item.image} alt="Card"/>
        <div class="card-body">
        
          <h5 class="card-title">{item.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{item.subtitle}</h6>
          <p class="card-text">{item.description}</p>
          
        </div>
        <div class="card-footer">
            <a href={item.deployedLink} class="card-link">Project Link</a>
            <a href={item.repoLink} class="card-link">Source Code</a>
          </div>
        </div>
        ))}
      </div>
      
    );
  }