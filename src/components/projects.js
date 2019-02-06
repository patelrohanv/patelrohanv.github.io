import React, { Component } from 'react';
import { project_data } from '../data/projectData';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardText, CardTitle, CardActions } from 'material-ui/Card';
import { FlatButton } from 'material-ui';

class Projects extends React.Component {
    render() {
        const prj = project_data.map((p) => {
            return (
                <Card>
                    <CardTitle
                        title={p.title}
                    >
                    </CardTitle>
                    <CardText>
                        {p.info}
                    </CardText>
                    <CardActions>
                        <FlatButton label="Repo" href={p.gitLink}/>
                        { p.projectLink != null &&
                            <FlatButton label="Link" href={p.projectLink}/>
                        }
                    </CardActions>
                </Card>
            );
        });
        return (
            <MuiThemeProvider>
                {prj}
            </MuiThemeProvider>
        );
    }
}
export default Projects