import React, { Component } from 'react';
import { education_data } from '../data/educationData';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardText, CardTitle } from 'material-ui/Card';

class Education extends React.Component {

    render() {
        console.log(education_data)
        const schoolInfo = education_data.map((e) => {
            const classes = e.coursework.map((c) => {
                return (
                    <li>{c}</li>
                );
            });
            return (
                <Card>
                    <CardTitle
                        title={e.school}
                    >
                    </CardTitle>
                    <CardHeader
                        title={e.degree}
                        subtitle={e.graduated}
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText expandable={true}>
                        <p>Relevant coursework</p><br />
                        {classes}
                    </CardText>
                </Card>
            );
        });
        return (
                <MuiThemeProvider>
                    {schoolInfo}
                </MuiThemeProvider>
        );
    }
}

export default Education