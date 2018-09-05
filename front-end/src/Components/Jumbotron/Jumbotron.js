import React, { Component } from 'react';
import './Jumbotron.css';

import Project from './Project'
import { About, Tools } from './Misc'

export default class Jumbotron extends Component {

  constructor(props){
      super(props);
      this.state = {
          rotate: 0,
          index: [3, 2, 1, 0, 0, 1, 2],
          active: 0
      }
      this.projectNum = 5 // Change as needed
      this.total = this.projectNum + 2;
      this.ref = React.createRef();
      // this.ref.current.style.setProperty('--total', this.total)

      this.colors = ['#3550A6', '#DFDF8A', '#C09AAF', '#709F4F', '#CC8B82', '#DFDF8A', '#C09AAF'];
  }

  leftRotate(){
    // Shift all numbers in the index
    const total = this.total;
    const newRot = this.state.rotate - (360 / total);
    const newActive = this.state.active + 1;
    const adjustedActive = (newActive % total + total) % total;

    const indexCopy = this.state.index.slice();
    const newTail = indexCopy.pop();
    indexCopy.unshift(newTail);

    for(let i in indexCopy){
        this.ref.current.style.setProperty(`--z-${(i)}`, indexCopy[i]);
    }

    this.ref.current.style.setProperty('--rotate', `${newRot}deg`);

    this.setState({
        rotate: newRot,
        index: indexCopy,
        active: adjustedActive
    })
    this.setBodyColor(adjustedActive);
  }

  rightRotate(){
    const total = this.total;
    const newRot = this.state.rotate + (360 / total);
    const newActive = this.state.active - 1;
    const adjustedActive = (newActive % total + total) % total;

    const indexCopy = this.state.index.slice();
    const newTail = indexCopy.shift();
    indexCopy.push(newTail);

    for(let i in indexCopy){
      this.ref.current.style.setProperty(`--z-${(i)}`, indexCopy[i])
    }

    this.ref.current.style.setProperty('--rotate', `${newRot}deg`)
    this.setState({
      rotate: newRot,
      index: indexCopy,
      active: adjustedActive
    })
    this.setBodyColor(adjustedActive);
  }

  setBodyColor(active){
      document.body.style.backgroundColor = this.colors[active];
  }

  setStyle(index){
    return {
        transform: `rotateY(${this.state.rotate + (360/this.total) * index}deg) translateZ(500px)`,
        backgroundColor: this.colors[index],
        zIndex: this.state.index[index]
    }
  }

  render() {
    let projects = []
    for(let i = 0; i < this.projectNum; i++){
        projects.push(<Project
                key={`project-${i}`}
                active={i === this.state.active}
                index={i}
                rotLeft={() => this.rightRotate()}
                rotRight={() => this.leftRotate()}
                style={this.setStyle(i)}
            />
        )
    }
    return (
      <div id='Jumbotron' ref={this.ref}>
          <button className="left-rot rotate" onClick={() => this.rightRotate()}/>
          <button className="right-rot rotate" onClick={() => this.leftRotate()}/>
          <div id='container'>
              {/* Recall: first 3 are projects */}
              {projects}
              <About
                  active={this.projectNum + 1 === this.state.active}
                  rotLeft={() => this.rightRotate()}
                  rotRight={() => this.leftRotate()}
                  total={this.total}
                  style={this.setStyle(this.projectNum)}
              />
              <Tools
                  active={this.projectNum + 2 === this.state.active}
                  rotLeft={() => this.rightRotate()}
                  rotRight={() => this.leftRotate()}
                  total={this.total}
                  style={this.setStyle(this.projectNum + 1)}

              />
          </div>
      </div>

    );
  }
}
