import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div id="Contact">
          <h1>Ferdinand Cruz</h1>
          <h2>Full-Stack Web Developer</h2>
          <div id='contact-container'>
              <div id='contact-text'>
                  <p>San Francisco, CA</p>
                  <p>(925) 395-6845</p>
              </div>
              <div id='contact-links'>
                  <a href='https://docs.google.com/document/d/1CmSRwqh-HU8w0ljzksn-bWZyKv1A86lniZjCAjOhj-w/edit?usp=sharing' target='_about'>
                      <img alt='Resume link' src='contact/resume.png'/>
                  </a>
                <a href='https://github.com/pomfy113' target='_about'>
                    <img alt='Github link' src='contact/github.png'/>
                </a>
                <a href='https://www.linkedin.com/in/ferdinand-cruz113/' target='_about'>
                    <img alt='LinkedIn link' src='contact/linkedin.png'/>
                </a>
                <a href='mailto:cruz.ferdin@gmail.com'>
                    <img alt='Email link' src='contact/mail.png'/>
                </a>
              </div>
          </div>
      </div>
    );
  }
}
