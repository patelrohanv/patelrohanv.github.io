import React from 'react';
import { about_data } from '../data/aboutData'

import Card from 'react-bootstrap/Card'

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
    <Card body style={styles.elevator}>{ about_data }</Card>
);

export default About