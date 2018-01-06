import React from 'react';
import { render } from 'react-dom';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import { AppBar, Tabs, Tab } from 'material-ui';
import { withTheme } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import JssProvider from 'react-jss/lib/JssProvider';
import createContext from '../styles/createContext';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class NavBar extends React.Component {
  state = {
    direction: 'row',
    justify: 'flex-end',
    alignItems: 'flex-start',
  };

  render() {
    const { alignItems, direction, justify } = this.state;
    return (
      <div>
        <AppBar >
          <Grid container alignItems={alignItems} direction={direction} justify={justify}>
            <Toolbar>
              <Tabs centered value={false}>
                <Tab label="Models" component={Link} to="/main/models" />
                <Tab label="Adventures" component={Link} to="/main/landscapes" />
                <Tab label="About Me" component={Link} to="/main/aboutme" />
              </Tabs>
            </Toolbar>
          </Grid>
        </AppBar>
      </div>
    );
  }
}

export default withTheme()(NavBar);
