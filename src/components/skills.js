import React, { Component } from 'react';
import { skills_data } from '../data/skillsData';

class Skills extends React.Component {
    render() {
        console.log(skills_data)
        return <h1>Hello, {this.props.name}</h1>;
    }
}

export default Skills 