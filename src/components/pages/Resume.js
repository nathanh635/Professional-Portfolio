import React from 'react';
import resume from '../assets/Nathan-Howes-June-2022.pdf'

function Resume() {
  return (
    <div>
        <h2>Click <a href= {resume} download>here</a> to download my resume.</h2>
        <h3>Proficient in:</h3>
        <p>Front End technologies:</p>
        <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
    <li>Handlebars</li>
    <li>ReactJS</li>
    </ul>
    <p>Back End technologies:</p>
    <ul>
    <li>Node</li>
    <li>ExpressJS</li>
    <li>MySQL</li>
    <li>Sequelize</li>
    <li>MongoDB</li>
    <li>GraphQL</li>
        </ul>
    </div>
  );
    
}

export default Resume;
