import React from 'react';
import { education_data } from '../data/educationData';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardText, CardTitle } from 'material-ui/Card';
import Grid from '@material-ui/core/Grid';

class Education extends React.Component {

    render() {
        const styles = {
            ul: {
                listStyleType: 'none',
            },
        }
        console.log(education_data)
        const schoolInfo = education_data.map((e) => {
            const classes = e.coursework.map((c) => {
                return (
                    <li>{c}</li>
                );
            });
            return (
                <Grid item sm={6} md={6} lg={6}>
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
                            <ul style={styles.ul}>
                                {classes}
                            </ul>
                        </CardText>
                    </Card>
                </Grid>
            );
        });
        return (
            <MuiThemeProvider>
                <Grid container spacing={24}>
                    {schoolInfo}
                </Grid>
            </MuiThemeProvider>
        );
    }
}

export default Education