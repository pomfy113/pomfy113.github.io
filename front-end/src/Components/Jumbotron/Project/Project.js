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
              <h1>{title}</h1>
              <h2>{subtitle}</h2>
              <a href={this.props.active ? site : null} target='_about'>
                <img alt='Project screenshot' src={`projects/project-${this.props.index}/image.png`}/>
              </a>
              <p>{role}</p>
              <p>Tools:<br/>{tools}</p>
              <div className='url-links'>
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
