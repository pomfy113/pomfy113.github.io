import React, { Component } from 'react';
import data from './text.js'
import './Project.css'
export default class Project extends Component {
  constructor(props){
      super(props);
      this.projectData = data[this.props.index]

  }

  render() {
      let title, subtitle, tools, site, repo;
      if(this.projectData){
          title = this.projectData.title;
          subtitle = this.projectData.subtitle;
          tools = this.projectData.tools;
          site = this.projectData.liveSite;
          repo = this.projectData.repo;
      }
      console.log(this.props.style)
      return(
          <div style={this.props.style} className={`tab project ${this.props.active ? 'active' : 'inactive'}`}>
              <h1>{title}</h1>
              <h2>{subtitle}</h2>
              <a href={this.props.active ? site : null} target='_about'>
              <img alt='Project screenshot' src={`projects/project-${this.props.index}/image.png`}/>
              </a>
              <div className='url-links'>
                  <a href={this.props.active ? site : null} target='_about'>Site</a>
                  <a href={this.props.active ? repo : null} target='_about'>Repo</a>
              </div>

              <p>Tools:<br/>{tools}</p>
          </div>
      )
  }

}
