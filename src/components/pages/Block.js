import React from 'react';
import plantOverflowSS from '../assets/screenshot2.PNG';
import rideCompareSS from '../assets/screenshot-homepage.PNG';
import JATESS from '../assets/JATEscreenshot.PNG';
import project4SS from '../assets/project4screenshot.PNG';
import project5SS from '../assets/project5screenshot.PNG';
import project6SS from '../assets/project6screenshot.PNG';
import geoCatch from '../assets/Geocatch.PNG';


//list of projects as an array of objects to use the map function below to add them to the react parent component
const projects = [
  {
    id:1,
    name: "GeoCatch",
    description: "An application for users to play a game of catch with other users, based on photo uploads and landmarks. Can you find where the photos were taken?",
    techUsed: ["ReactJS, MERN Stack, MongoDB Atlas, MapBox, ExifJS"],
    source: geoCatch,
    hrefRepo: "https://github.com/tdickson96/GeoCatch",
    hrefDep: "https://geocatch1-0.herokuapp.com/"
    },
  {
    id:2,
    name: "RideCompare",
    description: "An application designed to save users money by using APIs to compare the costs of ridesharing companies Lyft and Uber.",
    techUsed: ["HTML", "CSS", "Javascript", "WebAPIs"],
    source: rideCompareSS,
    hrefRepo: "https://github.com/RGarrettLee/Ride-Compare",
    hrefDep: "https://rgarrettlee.github.io/Ride-Compare/"
    },
    {
      id:3,
      name: "PlantOverflow",
      description: "A community site where people with gardening questions can come together and give their green thumbs a workout.",
      techUsed: ["Handlebars", "CSS", "Javascript", "MySQL", "Sequelize"],
      source: plantOverflowSS,
      hrefRepo: "https://github.com/nathanh635/PlantOverflow",
      hrefDep: "https://beautiful-glacier-bay-92549.herokuapp.com/"
      },
      {
        id:4,
        name: "Text Editor",
        description: "A simple text editor, built as a progressive web application (PWA) which contains service workers and a manifest to allow for installation.",
        techUsed: ["Handlebars", "CSS", "Progressive Web Applications", "Service Workers", "IndexedDB"],
        source: JATESS,
        hrefRepo: "https://github.com/nathanh635/Text-Editor",
        hrefDep: "https://radiant-temple-37153.herokuapp.com/"
        },
        {
          id:5,
          name: "Tech Blog",
          description: "A simple text editor, built as a progressive web application (PWA) which contains service workers and a manifest to allow for installation.",
          techUsed: ["Handlebars", "CSS", "Model-View-Controller Structure", "MySQL", "Sequelize"],
          source: project4SS,
          hrefRepo: "https://github.com/nathanh635/Text-Editor",
          hrefDep: "https://pure-island-12653.herokuapp.com/"
          },
          {
            id:6,
            name: "Team Profile Builder",
            description: "A team profile builder command line application which allows the user to input a number of employee roles and information and creates a team profile.",
            techUsed: ["NodeJS", "CSS", "HTML", "Test Driven Development"],
            source: project5SS,
            hrefRepo: "https://github.com/nathanh635/TeamProfileGenerator"
            }

]



//Define the project list to be exported as a map of the array of projects

let projectList = projects.map((project) => {

    let techList = project.techUsed.map((tech) =>

      <li>{tech}</li>
    );
  
    return (<div className="projectBlock">

      <a href={project.hrefRepo} ><img className="projectImage"src={project.source} alt={project.name}></img></a>
      <div className="box">
      <h3 className = "projectName">{project.name}</h3>
    <p>{project.description}</p>
    <ul>{techList}</ul>
  {project.hrefDep ? 
    <p>Link to Deployed Application: <a href={project.hrefDep}>{project.name} </a></p>
    : <p>Link to Repository: <a href={project.hrefRepo}>{project.name} </a></p>
  }
    </div>
    </div>
    )
})

// We use JSX curly braces to evaluate the style object on the JSX tag

function Block() {
  return (
    <section className="project">
      {projectList}

    </section>
  );
}

export default Block;
