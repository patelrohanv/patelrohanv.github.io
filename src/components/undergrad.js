import React, { Component } from 'react';
import { undergrad_data } from '../data/undergradData';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardText } from 'material-ui/Card';

class Undergrad extends React.Component {
  render() {
    const ud = undergrad_data.map((u) => {
      const bullets = u.info.map((c) => {
        return (
          <li>{c}</li>
        );
      });
      return (
        <Card>
          <CardHeader
            title={u.year}
            subtitle="Click to view more details"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            {bullets}
          </CardText>
        </Card>
      );
    });
    return (
      <MuiThemeProvider>
        {ud}
      </MuiThemeProvider>
    );
  }
}

export default Undergrad