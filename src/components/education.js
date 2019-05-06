import React from 'react';
import { education_data } from '../data/educationData';

import AOS from 'aos';
import 'aos/dist/aos.css'

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import ListGroup from 'react-bootstrap/ListGroup'

const styles = {
    card: {
        minWidth: 275,
    },
};

AOS.init();

const Education = (props) => {

    const schoolInfo = education_data.map((e) => {
        const classes = e.coursework.map((c) => {
            return (
                <div>
                    <ListGroup.Item variant="secondary">
                       {c}
                    </ListGroup.Item>
                </div>
            );
        });
        return (
            <Card
                bg="secondary" 
                style={styles.card}
                data-aos='fade-up'
                data-aos-delay='300'
                data-aos-duration='5000'
            >
                <Card.Body>
                    <Card.Title>
                        {e.school}
                    </Card.Title>
                    <Card.Subtitle>
                        {e.degree}
                        <br />
                        {e.graduated}
                    </Card.Subtitle>
                    <Card.Text>
                        <br />
                        <ListGroup>
                            {classes}
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    });
    return (
        <CardDeck>
            {schoolInfo}
        </CardDeck>
    );
}

export default Education