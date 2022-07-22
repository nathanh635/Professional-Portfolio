import React, {Link} from 'react';
import plantOverflowSS from '../assets/screenshot2.PNG';
import rideCompareSS from '../assets/screenshot-homepage.PNG';

//import '../styles/Section.css';

// By importing the Section.css file, it is added to the DOM whenever this component loads

const projects = [
  {
    id:1,
    name: "RideCompare",
    description: "An application designed to save users money by using APIs to compare the costs of ridesharing companies Lyft and Uber.",
    techUsed: ["HTML", "CSS", "Javascript", "WebAPIs"],
    source: rideCompareSS,
    href: "https://github.com/RGarrettLee/Ride-Compare"
    },
    {
      id:2,
      name: "PlantOverflow",
      description: "A community site where people with gardening questions can come together and give their green thumbs a workout.",
      techUsed: ["Handlebars", "CSS", "Javascript", "MySQL", "Sequelize"],
      source: plantOverflowSS,
      href: "https://github.com/nathanh635/PlantOverflow"
      }
]

//Define the project list to be exported as a map of the array of projects

let projectList = projects.map((project) => {

    let techList = project.techUsed.map((tech) =>

      <li>{tech}</li>
    );
  
    return (<div className="projectBlock">

      <a href={project.href} ><img className="projectImage"src={project.source} alt={project.name}></img></a>
      <div className="box">
      <h3 className = "projectName">{project.name}</h3>
    <p>{project.description}</p>
    <ul>{techList}</ul>
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
