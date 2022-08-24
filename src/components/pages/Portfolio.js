import React from 'react';
import Cards from '../Cards'

// my work
const projects = [
  {
    id: 1,
    name: "",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "",
    image: ""
  },
  {
    id: 2,
    name: "",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "",
    image: ""
  },
  {
    id: 3,
    name: "",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "",
    image: ""
  },
  {
    id: 4,
    name: "",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "",
    image: ""
  },
  {
    id: 5,
    name: "",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "",
    image: ""
  },
  {
    id: 6,
    name: "",
    description: "",
    subtitle: "",
    deployedLink: "",
    repoLink: "",
    image: ""
  }
];

export default function Portfolio() {
  return (
    <div className = "w-50 mx-auto">
      <h1 className ="pb-4 pt-2">Portfolio</h1>
<Cards projects={projects} />
    </div>
  );
}