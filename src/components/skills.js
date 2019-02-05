import React, { Component } from 'react';
import { skills_data } from '../data/skillsData';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

class Skills extends React.Component {
    render() {
        console.log(skills_data)
        const skillTypes = skills_data.map((t) => {
            const skillDetails = t.details.map((d) => {
                return (
                    <li>{d}</li>
                );
            });
            return (
                <Card>
                    <CardHeader
                        title={t.type}
                    />
                    <CardText>
                        {skillDetails}
                    </CardText>
                </Card>
            );
        });
        return (
            <MuiThemeProvider>
                {skillTypes}
            </MuiThemeProvider>
        );
    }
};


export default Skills 