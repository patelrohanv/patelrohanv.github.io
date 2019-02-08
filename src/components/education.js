import React from 'react';
import { education_data } from '../data/educationData';

import AOS from 'aos';
import 'aos/dist/aos.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardText, CardTitle } from 'material-ui/Card';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = {
    card: {
        minWidth: 275,
        backgroundColor: 'grey',
    },
};

AOS.init();

const Education = (props) => {

    const schoolInfo = education_data.map((e) => {
        const classes = e.coursework.map((c) => {
            return (
                <div>
                    <ListItem>
                        <ListItemText primary={c} />
                    </ListItem>
                    <Divider />
                </div>
            );
        });
        return (
            <Grid item sm md lg>
                <Card style={styles.card}
                    data-aos='fade-up'
                    data-aos-delay='300'
                    data-aos-duration='5000'
                >
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
                <br />
            </Grid>
        );
    });
    return (
        <MuiThemeProvider>
            <Grid 
                container
                spacing={12}
                direction="row"
                justify="space-around"
                alignItems="center"
            >
                {schoolInfo}
            </Grid>
        </MuiThemeProvider>
    );
}

export default Education