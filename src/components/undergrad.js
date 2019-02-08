import React from 'react';
import { undergrad_data } from '../data/undergradData';

import AOS from 'aos';
import 'aos/dist/aos.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardText } from 'material-ui/Card';
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
    cardHeader: {
        color: 'gold',
    }
};

AOS.init();

const Undergrad = (props) => {

    const ud = undergrad_data.map((u) => {
        const bullets = u.info.map((c) => {
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
                    data-aos="fade-up"
                    data-aos-duration="5000"
                >
                    <CardHeader
                        title={u.year}
                        subtitle="Click to view more details"
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText expandable={true}>
                        <List dense={true}>
                            {bullets}
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
                {ud}
            </Grid>
        </MuiThemeProvider>
    );
}

export default Undergrad