import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

@media screen and (min-width: 980px)
{
/* CSS Document */
  background-image: url(${vof});
  background-repeat: no-repeat;
  background-size: cover;
  height: 1024px;
  margin: 0 auto;
}
`;

class Splash extends React.Component {

  componentDidMount() {
    setTimeout(() => this.props.history.push('/main'), 2000);
  }

  render() {
    return (
      <div>
        <Display />
      </div>
    );
  }
}

Splash.propTypes = {
  history: PropTypes.object,
};

export default withRouter(connect(null, null)(Splash));
