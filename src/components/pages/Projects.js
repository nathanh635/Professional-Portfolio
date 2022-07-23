import React from 'react';
import '../../styles/Projects.css'
import Block from './Block';

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding


// We use JSX curly braces to evaluate the style object on the JSX tag

function Project() {
  return (
    <section className="section">
      <h2>Recent Projects</h2>
      <p>Click on the images for a link to the GitHub repository.</p>
        <Block />
    </section>
  );
}

export default Project;
