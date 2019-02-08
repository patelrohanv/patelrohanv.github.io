import React from 'react';
import About from './about'
import headshot from '../images/headshot.jpg'
import background from '../images/code_m.jpeg'
import { github, linkedIn, resume } from '../data/linksData'

import Button from '@material-ui/core/Button'

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
        backgroundSize: 'cover',
        overflow: 'hidden',
    },
    button: {
        margin: '10px'
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
            <Button style={styles.button} variant="contained" href={linkedIn} target="_blank"> LinkedIn</Button>
            <Button style={styles.button} variant="contained" href={github} target="_blank">GitHub</Button>
            <Button style={styles.button} variant="contained" href={resume} target="_blank"> Resume</Button>
        </div>
        <br />
    </div >
    )
};

export default Header