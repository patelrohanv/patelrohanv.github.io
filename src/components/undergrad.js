import React from 'react';
import { undergrad_data } from '../data/undergradData';

import AOS from 'aos';
import 'aos/dist/aos.css'

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import ListGroup from 'react-bootstrap/ListGroup'

const styles = {
    card: {
        minWidth: 275,
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
                        {u.year}
                    </Card.Title>
                    <Card.Text>
                        <br />
                        <ListGroup>
                            {bullets}
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    });
    return (
        <CardDeck>
            {ud}
        </CardDeck>
    );
}

export default Undergrad