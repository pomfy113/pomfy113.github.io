import React, { Component } from 'react';
import data from './text.js'
import './Project.css'
export default class Project extends Component {
  constructor(props){
      super(props);
      this.projectData = data[this.props.index]

  }
  render() {
      let title, subtitle, tools, site, repo, role;

      if(this.projectData){
          title = this.projectData.title;
          subtitle = this.projectData.subtitle;
          tools = this.projectData.tools;
          role = this.projectData.role;
          site = this.projectData.liveSite;
          repo = this.projectData.repo;
      }

      return(
          <div style={this.props.style} className={`tab project ${this.props.active ? 'active' : 'inactive'}`}>
              <h1 className="project-title">{title}</h1>
              <h2 className="project-subtitle">{subtitle}</h2>


              <a className="project-image" ref={this.props.active ? site : null} target='_about'>
                <img alt='Project screenshot' src={`projects/project-${this.props.index}/image.png`}/>
              </a>

              <p className="project-role">Role - {role}</p>

              <p className="project-tools">Tools:<br/>{tools}</p>

              <div className='project-links'>
                  {site
                    ? <a href={this.props.active ? site : null} target='_about'>Site</a>
                    : null
                  }
                  {repo
                    ? <a href={this.props.active ? repo : null} target='_about'>Repo</a>
                    : null
                  }
              </div>
          </div>
      )
  }

}
