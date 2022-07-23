import React from 'react';
import '../styles/Header.css';
import profilePic from './assets/profilephoto.JPG';

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <header className="header">
      <img className = "profilephoto" src={profilePic} alt="Profile pic" width="200" height="200"></img>
      <div className = "headerStuff">
        <h1>Nathan Howes</h1>
        <h3>Full Stack Developer / 
        Environmental Engineer</h3>
      </div>
    </header>
  );
}

export default Header;
