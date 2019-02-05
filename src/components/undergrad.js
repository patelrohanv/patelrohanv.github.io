import React, { Component } from 'react';
import { undergrad_data } from '../data/undergradData';

class Undergrad extends React.Component {
    render() {
      console.log(undergrad_data);      
      return (
        <p>hello</p>
      );
    }
  }

  export default Undergrad