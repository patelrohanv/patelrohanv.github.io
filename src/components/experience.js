import React from 'react';
import { experience_data } from '../data/experienceData';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { CardTitle, Card, CardHeader, CardText } from 'material-ui/Card';
import Grid from '@material-ui/core/Grid';


class Experience extends React.Component {
    render() {
        const exp = experience_data.map((e) => {
            const details = e.details.map((d) => {
                return (
                    <li>{d}</li>
                );
            });
            return (
                <Grid item sm={12} md={6} lg={6}>
                    <Card>
                        <CardTitle title={e.title} />
                        <CardHeader
                            title={e.company}
                            subtitle={e.dates}
                        />
                        <CardText>
                            {details}
                        </CardText>
                    </Card>
                </Grid>
            );
        });
        return (
            <MuiThemeProvider>
                <Grid container spacing={24}>
                    {exp}
                </Grid>
            </MuiThemeProvider>
        );
    }
}

export default Experience