import React from 'react';
import { education_data } from '../data/educationData';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardText, CardTitle } from 'material-ui/Card';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
    card: {
        minWidth: 275,
        maxWidth: 575,
        margin: '25px',
    },
};

const Education = (props) => {

    const schoolInfo = education_data.map((e) => {
        const classes = e.coursework.map((c) => {
            return (
                <ListItem>
                    <ListItemText primary={c} />
                </ListItem>
            );
        });
        return (
            <Grid item sm={6} md={6} lg={6}>
                <Card style={styles.card}>
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
                        <List dense={true}>
                            {classes}
                        </List>
                    </CardText>
                </Card>
            </Grid>
        );
    });
    return (
        <MuiThemeProvider>
            <Grid container spacing={12}>
                {schoolInfo}
            </Grid>
        </MuiThemeProvider>
    );
}

export default Education