import React, { Component } from 'react';
import { education_data } from '../data/educationData';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

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
                    <CardHeader
                        title={e.school}
                        subtitle="Click to view more details"
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText expandable={true}>
                        {e.degree} <br/>
                        {e.graduated} <br/> <br/>
                        <p>Relevant coursework</p><br/>
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