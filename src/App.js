import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import Education from './components/education';
import Skills from './components/skills';
import Experience from './components/experience';
import Projects from './components/projects';
import Undergrad from './components/undergrad';
import Footer from './components/footer';

import background from './images/background.jpeg'

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Navbar from 'react-bootstrap/Navbar'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab)

class App extends Component {
    render() {
        const styles = {
            main: {
                backgroundImage: 'url(' + background + ')',
                backgroundSize: '100%',
            },
            paper: {
            },
            section: {
                backgroundColor: 'black',
                opacity: 0.80,
                color: 'white',
                textAlign: 'center',
                display: 'block',
                padding: 25,
            },
        }
        return (
            <div className="App">
                <Header />
                <div style={styles.main}>
                    <br />
                    <Navbar bg="dark" variant="dark" >
                        <Navbar.Brand>
                            {'Skills'}
                        </Navbar.Brand>
                    </Navbar>
                    <br />
                    <Skills />
                    <br />
                    <Navbar bg="dark" variant="dark" >
                        <Navbar.Brand>
                            {'Education'}
                        </Navbar.Brand>
                    </Navbar>
                    <br />
                    <Education />
                    <br />
                    <Navbar bg="dark" variant="dark" >
                        <Navbar.Brand>
                        </Navbar.Brand>
                    </Navbar>
                    <br />
                    <Experience />
                    <br />
                    <Navbar bg="dark" variant="dark" >
                        <Navbar.Brand>
                            {'Projects'}
                        </Navbar.Brand>
                    </Navbar>
                    <br />
                    <Projects />
                    <br />
                    <Navbar bg="dark" variant="dark" >
                        <Navbar.Brand>
                            {'Undergrate Experience'}
                        </Navbar.Brand>
                    </Navbar>
                    <br />
                    <Undergrad />
                    <br />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
