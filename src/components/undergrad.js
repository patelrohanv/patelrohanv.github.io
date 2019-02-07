import React from 'react';
import { undergrad_data } from '../data/undergradData';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Grid from '@material-ui/core/Grid';

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
                    <li>{c}</li>
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
                        <ul style={styles.ul}>
                            {bullets}
                        </ul>
                        </CardText>
                    </Card>
                </Grid>
            );
        });
        return (
            <MuiThemeProvider>
                <Grid container spacing={24}>
                    {ud}
                </Grid>
            </MuiThemeProvider>
        );
    }
}

export default Undergrad