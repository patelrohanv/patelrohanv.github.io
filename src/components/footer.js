import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListItemText } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Link from "@material-ui/core/Link";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import React from 'react';
import { github, linkedIn } from '../data/linksData';



const styles = {
    footer: {
        backgroundColor: 'grey',
    },
};

const Footer = () => (
    <Grid
        container
        spacing={12}
        style={styles.footer}
    >
        <Grid item xs={9} >
            <h5>Rohan Patel</h5>
            <h6>Pittsburgh, PA</h6>
        </Grid>
        <Grid item xs={3}>
            <List>
                <ListItem
                    button
                    component={Link} href={github}
                >
                    <ListItemIcon>
                        <FontAwesomeIcon icon={faGithub} />
                    </ListItemIcon>
                    <ListItemText primary="Github" />
                </ListItem>
                <ListItem
                    button
                    component={Link} href={linkedIn}
                >
                    <ListItemIcon>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </ListItemIcon>
                    <ListItemText primary="LinkedIn" />
                </ListItem>
            </List>
        </Grid>
    </Grid>
);

export default Footer