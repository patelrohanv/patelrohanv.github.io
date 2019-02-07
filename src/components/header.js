import React from 'react';
import About from './about'
import headshot from '../images/headshot.jpg'
import background from '../images/code_m.jpeg'

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
}

const Header = () => (

    < div style={styles.header} >
        <img src={headshot} alt="headshot" style={styles.headshot} />
        <About />
        <br />
        <div>
            <Button variant="contained" href="https://www.linkedin.com/in/patelrohanv/" target="_blank"> LinkedIn</Button>
            <Button variant="contained" href="https://github.com/patelrohanv" target="_blank">GitHub</Button>
            <Button variant="contained" href="https://resume.creddle.io/resume/mv7do3zgiw" target="_blank"> Resume</Button>
        </div>
        <br />
    </div >
);

export default Header