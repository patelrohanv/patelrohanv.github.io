import React from 'react';
import { skills_data } from '../data/skillsData';

import AOS from 'aos';
import 'aos/dist/aos.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardText, CardTitle } from 'material-ui/Card';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = {
    card: {
        width: 500,
        height: 300,
        backgroundColor: 'grey',
    },
    cardTitle: {
        color: 'gold',
    }
};

AOS.init();

const Skills = (props) => {

    const skillTypes = skills_data.map((t) => {
        const skillDetails = t.details.map((d) => {
            return (
                <div>
                    <ListItem>
                        <ListItemText primary={d} />
                    </ListItem>
                    <Divider />
                </div>

            );
        });
        return (
            <Grid item sm md lg>
                <Card
                    style={styles.card}
                    data-aos="fade-up"
                    data-aos-delay='300'
                    data-aos-duration='5000'
                >
                    <CardTitle
                        title={t.type}
                        style={styles.cardTitle}
                    />
                    <CardText
                        
                    >
                        <List dense={true}>
                            {skillDetails}
                        </List>
                    </CardText>
                </Card>
                <br />
            </Grid>
        );
    });
    return (
        <Grid 
            container
            spacing={12}
            direction="row"
            justify="space-around"
            alignItems="center"
        >
            <MuiThemeProvider>
                {skillTypes}
            </MuiThemeProvider>
        </Grid>
    );
};


export default Skills