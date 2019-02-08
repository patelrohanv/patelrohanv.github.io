import React from 'react';
import { project_data } from '../data/projectData';

import AOS from 'aos';
import 'aos/dist/aos.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardText, CardTitle, CardActions } from 'material-ui/Card';
import { FlatButton } from 'material-ui';
import Grid from '@material-ui/core/Grid';

const styles = {
    card: {
        minWidth: 275,
        height: 500,
        backgroundColor: 'grey',
    },
};

AOS.init();

const Projects = (props) => {

    const prj = project_data.map((p) => {
        return (
            <Grid item sm md lg>
                <Card style={styles.card}
                    data-aos="fade-up"
                    data-aos-delay='300'
                    data-aos-duration='5000'
                >
                    <CardTitle
                        title={p.title}
                    >
                    </CardTitle>
                    <CardText>
                        {p.info}
                    </CardText>
                    <CardActions>
                        <FlatButton label="Repo" href={p.gitLink} />
                        {p.projectLink != null &&
                            <FlatButton label="Link" href={p.projectLink} />
                        }
                    </CardActions>
                </Card>
                <br />
            </Grid>
        );
    });
    return (
        <MuiThemeProvider>
            <Grid 
                container
                spacing={12}
                direction="row"
                justify="space-around"
                alignItems="center"
            >
                {prj}
            </Grid>
        </MuiThemeProvider>
    );
}
export default Projects