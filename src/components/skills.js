import React from 'react';
import { skills_data } from '../data/skillsData';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardText, CardTitle } from 'material-ui/Card';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
    card: {
        minWidth: 275,
        maxWidth: 575,
        margin: '25px',
        height: 300,
    },
};

const Skills = (props) => {

    const skillTypes = skills_data.map((t) => {
        const skillDetails = t.details.map((d) => {
            return (
                <ListItem>
                    <ListItemText primary={d} />
                </ListItem>

            );
        });
        return (
            <Grid item sm={4}>
                <Card
                    style={styles.card}
                    raised={true}
                >
                    <CardTitle
                        title={t.type}
                    />
                    <CardText>
                        <List dense={true}>
                            {skillDetails}
                        </List>
                    </CardText>
                </Card>
            </Grid>
        );
    });
    return (
        <Grid container spacing={40}>
            <MuiThemeProvider>
                {skillTypes}
            </MuiThemeProvider>
        </Grid>
    );
};


export default Skills