import React, { Component } from 'react';
import { project_data } from '../data/projectData';

class Projects extends React.Component {
    render() {
      console.log(project_data)
      return <h1>Hello, {this.props.name}</h1>;
    }
  }

  export default Projects