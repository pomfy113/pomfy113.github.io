import React, { Component } from 'react';
import './Misc.css'
import data from './text.js'

function About(props){
  return(
      <div style={props.style} className={`tab about misc ${props.active ? 'active' : 'inactive'}`}>
          <h1>About</h1>
          <p>Hello, my name is Ferdinand Cruz! I'm a <strong>full-stack web developer,</strong>
              and my strengths lie in front-end web development and scripting.
              I'm motivated by making hobbies more convenient for others!
          </p>
          <h2>Background</h2>
          <p>I graduated from <strong>UC Davis with a B.A. in Psychology</strong>.
            After graduation, I pursued the <strong>Full-Stack Web Development program at
            Make School</strong>, a Y.C. backed college alternative for those who wish to
            enter the software engineering field by shipping live products alongside traditional
              lectures.</p>
          <h2>What am I looking for?</h2>
          <p>I hope to work somewhere with challenging problems, a fun
              atmosphere, and a product that many can use. I'm capable of
              learning rather quickly and wearing many hats!
          </p>
          <h2>Hobbies</h2>
          <p>Video Games (MMORPGs, Strategy RPGs, Fighting), Tabletop Roleplaying
              Games, Writing, Anime, Light Novels, Martial Arts
          </p>
          <h2>Achievements</h2>
          <ul>
              <li>Reached level 4.5 of Google Foobar (ongoing!)</li>
              <li>Tutored various students in code challenges, debugging,
                  data structures, optimization, and web development.
              </li>
              <li>Entered UC Davis Dean's Honor Roll multiple times</li>
          </ul>
      </div>
  )
}

function Tools(props){
  return(
      <div style={props.style} className={`tab tools misc ${props.active ? 'active' : 'inactive'}`}>
          <h1>Tools</h1>
          <table>
              <tbody>
              <tr>
                  <th>Category</th>
                  <th>Tools</th>
              </tr>
              <tr>
                  <td>Specialties</td>
                  <td>Python, React, CSS3, Node & Express, Javascript</td>
              </tr>
              <tr>
                  <td>Web Tech</td>
                  <td>Node.js, Express, Flask, REST, MVC/MVVC</td>
              </tr>
              <tr>
                  <td>Languages</td>
                  <td>Python, Javascript (JSX, ES6), CSS3, HTML</td>
              </tr>
              <tr>
                  <td>Databases</td>
                  <td>MongoDB, Postgres, GraphQL</td>
              </tr>
              <tr>
                  <td>Libraries</td>
                  <td>React, Redux, jQuery, Jest, Sass/SCSS, Angular, Bootstrap, Mocha/Chai, React Native</td>
              </tr>
              <tr>
                  <td>Tools</td>
                  <td>Git, Github, Bitbucket, Unix, GIMP/Photoshop, Maya, Heroku, Trello, Slack, iMovie, AWS</td>
              </tr>
              <tr>
                  <td>Comp Sci & Misc</td>
                  <td>Object Oriented Programming, Data Structures, 3D Modeling & Animation, UX Design & Testing</td>
              </tr>
              </tbody>
          </table>
      </div>
  )
}


function Experience(props){
  const positions = data.map((job, index) => {
    return <Position key={`position-${index}`} data={job}/>
  })
  return(
      <div style={props.style} className={`tab experience misc ${props.active ? 'active' : 'inactive'}`}>
          <h1>Experience</h1>
          {positions}
      </div>
  )
}

function Position(props){
  return(
    <div className="experience-position">
      <div className="position-header">
        <p className="position-company">{props.data.company}</p>
        <p className="position-date">{props.data.dates}</p>
      </div>
      <p className="position-role">{props.data.position}</p>
      <p className="position-tech"><b>Tech</b> - {props.data.tech}</p>
      <p className="position-description">{props.data.description}</p>
    </div>
  )
}


export { About, Tools, Experience }
