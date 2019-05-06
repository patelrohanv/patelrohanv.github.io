import React from 'react';
import About from './about'
import headshot from '../images/headshot.jpg'
import background from '../images/header.jpeg'
import { github, linkedIn, resume } from '../data/linksData'

import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

const styles = {
    headshot: {
        margin: 'auto',
        display: 'block',
        width: '230px',
        border: 'solid 4px #fff',
        borderRadius: '50%',
    },
    header: {
        backgroundImage: 'url(' + background + ')',
        height: '550px',
        backgroundSize: 'cover',
        overflow: 'hidden',
    },
    button: {
        margin: '10px',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
};

const Header = (props) => {

    return (
        < div style={styles.header} >
            <br />
            <img src={headshot} alt="headshot" style={styles.headshot} />
            <br />
            <About />
            <br />
            <div>
                <ButtonToolbar>
                    <Button style={styles.button} variant="info" href={linkedIn} target="_blank"> LinkedIn</Button>
                    <Button style={styles.button} variant="info" href={github} target="_blank">GitHub</Button>
                    <Button style={styles.button} variant="info" href={resume} target="_blank"> Resume</Button>
                </ButtonToolbar>
            </div>
            <br />
        </div >
    )
};

export default Header