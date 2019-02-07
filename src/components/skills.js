import React from 'react';
import { skills_data } from '../data/skillsData';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardText, CardTitle } from 'material-ui/Card';
import Grid from '@material-ui/core/Grid';

class Skills extends React.Component {
    render() {
        const skillTypes = skills_data.map((t) => {
            const skillDetails = t.details.map((d) => {
                return (
                    <li>{d}</li>
                );
            });
            return (
                <Grid item sm={12} md={6}>
                    <Card
                    >
                        <CardTitle
                            title={t.type}
                        />
                        <CardText>
                            {skillDetails}
                        </CardText>
                    </Card>
                </Grid>
            );
        });
        return (
            <Grid container spacing={24}>
                <MuiThemeProvider>
                    {skillTypes}
                </MuiThemeProvider>
            </Grid>
        );
    }
};


export default Skills 