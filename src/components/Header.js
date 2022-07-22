import React from 'react';
import '../styles/Header.css';
import profilePic from './assets/profilephoto.JPG';

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding


// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <header className="header">
      <img className = "profilephoto" src={profilePic} alt="Profile pic" width="200" height="200"></img>
     <h1>Nathan Howes</h1>
     <h3>Full Stack Developer</h3>
    </header>
  );
}

export default Header;
