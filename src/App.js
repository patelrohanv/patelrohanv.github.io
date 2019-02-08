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

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

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
                    <Paper style={styles.paper} >
                        <Typography style={styles.section} variant="h4" gutterBottom>
                            Skills
                        </Typography>
                    </Paper>
                    <br />
                    <Skills />
                    <br />
                    <Paper style={styles.paper}>
                        <Typography style={styles.section} variant="h4" gutterBottom>
                            Education
                        </Typography>
                    </Paper>
                    <br />
                    <Education />
                    <br />
                    <Paper style={styles.paper}>
                        <Typography style={styles.section} variant="h4" gutterBottom>
                            Experience
                        </Typography>
                    </Paper>
                    <br />
                    <Experience />
                    <br />
                    <Paper style={styles.paper}>
                        <Typography style={styles.section} variant="h4" gutterBottom>
                            Projects
                        </Typography>
                    </Paper>
                    <br />
                    <Projects />
                    <br />
                    <Paper style={styles.paper}>
                        <Typography style={styles.section} variant="h4" gutterBottom>
                            Undergraduate Experience
                        </Typography>
                    </Paper>
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
