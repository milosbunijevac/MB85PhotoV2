import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Background from './Background';
import Button from '../../components/Button';

const wid = window.innerWidth;
const hei = window.innerHeight;

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Background width={`${wid}`} height={`${hei}`}>
        </Background>
        <Button href={'/main'}>
          SEE THIS?
        </Button>
      </div>

    );
  }
}

export default Splash;
