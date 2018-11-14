import React, { Component } from 'react';
import data from './text.js'
import './Project.css'
export default class Project extends Component {
  constructor(props){
      super(props);
      this.project = data[this.props.index]

  }
  render() {
      return(
          <div style={this.props.style} className={`tab project ${this.props.active ? 'active' : 'inactive'}`}>
              <h1 className="project-title">{this.project.title}</h1>
              <h2 className="project-subtitle">{this.project.subtitle}</h2>


              <a className="project-image" href={this.props.active ? this.project.liveSite : null} target='_about'>
                <img alt='Project screenshot' src={this.project.img}/>
              </a>

              <p className="project-role">Role - {this.project.role}</p>

              <p className="project-tools"><b>Tools:</b><br/>{this.project.tools}</p>

              <div className='project-links'>
                  {this.project.liveSite
                    ? <a href={this.props.active ? this.project.liveSite : null} target='_about'>Site</a>
                    : null
                  }
                  {this.project.repo
                    ? <a href={this.props.active ? this.project.repo : null} target='_about'>Repo</a>
                    : null
                  }
              </div>
          </div>
      )
  }

}
