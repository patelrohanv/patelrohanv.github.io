import React from 'react';
import Grid from '@material-ui/core/Grid'

const Footer = () => (
    <Grid container spacing={12}>
        <Grid item xs={9}>
            <h5>Rohan Patel</h5>
            <h6>Pittsburgh, PA</h6>
        </Grid>
        <Grid item xs={3}>
            <h5>Links</h5>
            <ul>
                <li><a href="https://github.com/patelrohanv">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/patelrohanv/">LinkedIn</a></li>
            </ul>
        </Grid>
    </Grid>
);

export default Footer