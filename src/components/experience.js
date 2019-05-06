import React from 'react';
import { experience_data } from '../data/experienceData';

import AOS from 'aos';
import 'aos/dist/aos.css'

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import ListGroup from 'react-bootstrap/ListGroup'

const styles = {
    card: {
        minWidth: 275,
        minHeight: 600,
    },
};

AOS.init();

const Experience = (props) => {

    const exp = experience_data.map((e) => {
        const details = e.details.map((d) => {
            return (
                <div>
                    <ListGroup.Item variant="secondary">
                        {d}
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
                        {e.title}
                    </Card.Title>
                    <Card.Subtitle>
                        {e.company}
                        <br />
                        {e.dates}
                    </Card.Subtitle>
                    <br />
                    <Card.Text>
                        <ListGroup>
                            {details}
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    });

    return (
        <CardDeck>
            {exp}
        </CardDeck>
    );
}

export default Experience