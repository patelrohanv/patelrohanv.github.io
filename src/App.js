import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import Education from './components/education';
import Skills from './components/skills';
import Experience from './components/experience';
import Projects from './components/projects';
import Undergrad from './components/undergrad';
import Footer from './components/footer';

import background from './images/desk_light_l.jpeg'

class App extends Component {
  render() {
    const styles = {
      main: {
        backgroundImage: 'url(' + background + ')',
      },
    }
    return (
      <div className="App">
        <Header />
        <div style= {styles.main}>
          <Skills />
          <hr />
          <Education />
          <hr />
          <Experience />
          <hr />
          <Projects />
          <hr />
          <Undergrad />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
