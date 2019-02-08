import React from 'react';
import { project_data } from '../data/projectData';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardText, CardTitle, CardActions } from 'material-ui/Card';
import { FlatButton } from 'material-ui';
import Grid from '@material-ui/core/Grid';

const styles = {
    card: {
        minWidth: 275,
        maxWidth: 575,
        margin: '25px',
        height: 500,
    },
};

const Projects = (props) => {

    const prj = project_data.map((p) => {
        return (
            <Grid item sm={12} md={6} lg={6}>
                <Card style={styles.card}>
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
            </Grid>
        );
    });
    return (
        <MuiThemeProvider>
            <Grid container spacing={12}>
                {prj}
            </Grid>
        </MuiThemeProvider>
    );
}
export default Projects