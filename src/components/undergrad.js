import React from 'react';
import { undergrad_data } from '../data/undergradData';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Undergrad extends React.Component {
    render() {
        const styles = {
            ul: {
                listStyleType: 'none',
            },
        }
        const ud = undergrad_data.map((u) => {
            const bullets = u.info.map((c) => {
                return (
                    <ListItem>
                        <ListItemText primary={c} />
                    </ListItem>
                );
            });
            return (
                <Grid item sm={12} md={6} lg={6}>
                    <Card>
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
                </Grid>
            );
        });
        return (
            <MuiThemeProvider>
                <Grid container spacing={12}>
                    {ud}
                </Grid>
            </MuiThemeProvider>
        );
    }
}

export default Undergrad