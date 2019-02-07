import React from 'react';
import { experience_data } from '../data/experienceData';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { CardTitle, Card, CardHeader, CardText } from 'material-ui/Card';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


class Experience extends React.Component {
    render() {
        const styles = {
            ul: {
                listStyleType: 'none',
            },
        }

        const exp = experience_data.map((e) => {
            const details = e.details.map((d) => {
                return (
                    <ListItem>
                        <ListItemText primary={d}/>
                    </ListItem>
                );
            });
            return (
                <Grid item sm={12} md={6} lg={6}>
                    <Card>
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
                </Grid>
            );
        });
        return (
            <MuiThemeProvider>
                <Grid container spacing={12}>
                    {exp}
                </Grid>
            </MuiThemeProvider>
        );
    }
}

export default Experience