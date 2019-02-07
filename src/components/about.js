import React from 'react';
import { about_data } from '../data/aboutData'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const About = () => (
    <Paper>
        <Typography component="p">
            { about_data }
        </Typography >
    </Paper>
);

export default About