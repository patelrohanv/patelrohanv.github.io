import React from 'react';
import { project_data } from '../data/projectData';

import AOS from 'aos';
import 'aos/dist/aos.css'

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

const styles = {
    card: {
        minWidth: 275,
    },
};

AOS.init();

const Projects = (props) => {

    const prj = project_data.map((p) => {
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
                        {p.title}
                    </Card.Title>
                    <Card.Text>
                        {p.info}
                    </Card.Text>
                    <ButtonToolbar>
                        <Button variant="secondary" href={p.gitLink}>Repo</Button>
                        {p.projectLink != null &&
                            <Button variant="secondary" href={p.projectLink}>Link</Button>
                        }
                    </ButtonToolbar>
                </Card.Body>
            </Card>
        );
    });
    return (
        <CardDeck>
            {prj}
        </CardDeck>
    );
}
export default Projects