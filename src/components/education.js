import React, { Component } from 'react';
import { education_data } from '../data/educationData';
import { Row, Col, Card, CardTitle } from 'react-materialize';

class Education extends React.Component {

    render() {
        console.log(education_data)
        const schoolInfo = education_data.map((e) => {
            const classes = e.coursework.map( (c) => {
                return(
                    <li>- {c}</li>
                );
            });
            return (
                <Col s={12} m={6}>
                    <Card className='small'
                        title={e.school}
                        reveal={<ul>{classes}</ul>}>
                        <h6>{e.degree}</h6> <br />
                        <h6>{e.graduated}</h6> <br />
                    </Card>
                </Col>
            );
        });
        return (
            <div>
                <Row> {schoolInfo}</Row>
            </div>
        );
    }
}

export default Education