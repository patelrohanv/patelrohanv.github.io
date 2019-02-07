import React from 'react';
import { project_data } from '../data/projectData';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardText, CardTitle, CardActions } from 'material-ui/Card';
import { FlatButton } from 'material-ui';
import Grid from '@material-ui/core/Grid';

class Projects extends React.Component {
    render() {
        const prj = project_data.map((p) => {
            return (
                <Grid item sm={12} md={6} lg={6}>
                    <Card>
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
                <Grid container spacing={24}>
                    {prj}
                </Grid>
            </MuiThemeProvider>
        );
    }
}
export default Projects