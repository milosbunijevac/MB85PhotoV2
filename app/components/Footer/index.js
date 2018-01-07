import React from 'react';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import Wrapper from './Wrapper';


class Footer extends React.Component {
  state = {
    direction: 'row',
    justify: 'space-around',
    alignItems: 'center',
    value: 0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };

  render() {
    const { classes } = this.props;
    const { alignItems, direction, justify } = this.state;
    return (

      <Wrapper className={'classes.root'}>
        <AppBar position="static">
          <Toolbar>
            <Grid container alignItems={alignItems} direction={direction} justify={justify}>
              <section>
                © Milos Bunijevac 2018
              </section>
              <section>
                MB85Photography@gmail.com
              </section>
              <section>
                <a href="http://www.facebook.com/MB85Photography"><i className="fa fa-facebook-official" ></i></a>
                <a href="http://www.instagram.com/MB85Photography"><i className="fa fa-instagram" ></i></a>
                <a href="http://www.twitter.com/MB85Photography"><i className="fa fa-twitter-square" ></i></a>
              </section>
            </Grid>
          </Toolbar>
        </AppBar>
      </Wrapper>

    );
  }

}

export default Footer;
