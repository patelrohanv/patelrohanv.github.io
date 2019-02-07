import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import Education from './components/education';
import Skills from './components/skills';
import Experience from './components/experience';
import Projects from './components/projects';
import Undergrad from './components/undergrad';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Skills />
        <hr/>
        <Education />
        <hr/>
        <Experience />
        <hr/>
        <Projects />
        <hr/>
        <Undergrad />
        <Footer />
      </div>
    );
  }
}

export default App;
