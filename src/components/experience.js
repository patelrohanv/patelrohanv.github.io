import React, { Component } from 'react';
import { experience_data } from '../data/experienceData';


class Experience extends React.Component {
    render() {
      console.log(experience_data);
      return <h1>Hello, {this.props.name}</h1>;
    }
  }

  export default Experience