import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Background from './Background';
import Button from '../../components/Button';

const wid = window.innerWidth;
const hei = window.innerHeight;

const ButtonStyle = styled.button`
  position: absolute;
  top: 5%;
  left: 10%;
`;
class Splash extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Background width={`${wid}`} height={`${hei}`}>
        </Background>
        <ButtonStyle>
          <Button href={'/main'}>
            Enter here
          </Button>
        </ButtonStyle>
      </div>

    );
  }
}

export default Splash;
