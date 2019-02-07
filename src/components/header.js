import React from 'react';
import About from './about'
import headshot from '../images/headshot.jpg'

class Header extends React.Component {
    render() {
        const headStyle = {
            margin: 'auto',
            display: 'block',
            width: '230px',
            border: 'solid 4px #fff',
            borderRadius: '50%',
        }
      return(
          <div>
              <img src={headshot} alt="headshot" style={headStyle}/>
              <About />
          </div>
      );
    }
  }

  export default Header