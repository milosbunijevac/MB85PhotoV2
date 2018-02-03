import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import vof from '../../images/splash1.jpg';

const Display = styled.div`

  /* Smartphones (landscape) ----------- */
  @media only screen and (min-width : 321px) {
  /* Styles */
    background-image: url(${vof});
    background-repeat: no-repeat;
    background-size: cover;
    height: 667px;
    margin-left: -33%;
  }

  /* Smartphones (portrait) ----------- */
  @media only screen 
  and (min-device-width: 414px) 
  and (max-device-width: 736px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) { 
    background-image: url(${vof});
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px;
    margin-left: 0;
  }

  /* ----------- iPhone X ----------- */

/* Portrait */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: portrait) { 
    background-image: url(/5de53ff….jpg);
    background-repeat: no-repeat;
    height: 700px;
    margin-left: -30%;
}

/* Landscape */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) { 
    background-image: url(${vof});
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px;
    margin-left: 0;
}
`;

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Display />
      </div>
    );
  }
}

export default Splash;
