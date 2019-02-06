import React, { Component } from 'react';
import { experience_data } from '../data/experienceData';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { CardTitle, Card, CardHeader, CardText } from 'material-ui/Card';


class Experience extends React.Component {
    render() {
        const exp = experience_data.map((e) => {
            const details = e.details.map((d) => {
                return (
                    <li>{d}</li>
                );
            });
            return (
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
            );
        });
        return (
            <MuiThemeProvider>
                {exp}
            </MuiThemeProvider>
        );
    }
}

export default Experience