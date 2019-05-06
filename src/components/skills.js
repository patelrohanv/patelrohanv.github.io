import React from 'react';
import { skills_data } from '../data/skillsData';

import AOS from 'aos';
import 'aos/dist/aos.css'

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import ListGroup from 'react-bootstrap/ListGroup'

const styles = {
    card: {

    },
    cardTitle: {
        color: 'gold',
    }
};

AOS.init();

const Skills = (props) => {

    const skillTypes = skills_data.map((t) => {
        const skillDetails = t.details.map((d) => {
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
                        {t.type}
                    </Card.Title>
                    <Card.Text>
                        <br />
                        <ListGroup>
                            {skillDetails}
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    });
    return (
        <CardDeck>
            {skillTypes}
        </CardDeck>
    );
};


export default Skills