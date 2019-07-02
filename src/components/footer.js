import React from 'react';

import { github, linkedIn } from '../data/linksData';
import { personal } from '../data/personal'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
    footer: {
        backgroundColor: 'grey',
    },
};

const Footer = () => (
    <Container style={styles.footer}>
        <Row>
            <Col>{personal.name}</Col>
            <Col></Col>
            <Col><FontAwesomeIcon icon={faGithub} href={github}/></Col>
        </Row>
        <Row>
            <Col>{personal.location}</Col>
            <Col></Col>
            <Col><FontAwesomeIcon icon={faLinkedinIn} href={linkedIn}/></Col>
        </Row>
        <Row>
            <Col>Designed and Built by Rohan Patel</Col>
        </Row>
    </Container>
);

export default Footer