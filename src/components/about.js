import React from 'react';
import { about_data } from '../data/aboutData'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
    paper: {
        margin: '0px 250px', // top/bottom 0px left/right 150px
    },
    elevator: {
        backgroundColor: 'black',
        opacity: 0.60,
        color: 'white',
        textAlign: 'center',
        display: 'block',
        padding: 25,
    },
};

const About = (props) => (
    <Paper style={styles.paper}>
        <Typography style={styles.elevator}>
            { about_data }
        </Typography >
    </Paper>
);

export default About