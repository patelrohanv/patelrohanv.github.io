import React from 'react';
import { experience_data } from '../data/experienceData';

import AOS from 'aos';
import 'aos/dist/aos.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { CardTitle, Card, CardHeader, CardText } from 'material-ui/Card';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = {
    card: {
        minWidth: 275,
        height: 500,
        backgroundColor: 'grey',
    },
};

AOS.init();

const Experience = (props) => {

    const exp = experience_data.map((e) => {
        const details = e.details.map((d) => {
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
                <Card style={styles.card}
                    data-aos="fade-up"
                    data-aos-duration="5000"
                >
                    <CardTitle title={e.title} />
                    <CardHeader
                        title={e.company}
                        subtitle={e.dates}
                    />
                    <CardText>
                        <List dense={true}>
                            {details}
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
                {exp}
            </Grid>
        </MuiThemeProvider>
    );
}

export default Experience