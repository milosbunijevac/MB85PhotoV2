import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import vof from '../../images/splash.jpg';

const Display = styled.div`
  background-image: url(${vof});
  background-repeat: no-repeat;
  background-size: cover;
  height: 1024px;
  margin: 0 auto;
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
