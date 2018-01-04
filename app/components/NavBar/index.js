import React from 'react';
import { render } from 'react-dom';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import { AppBar, Tabs, Tab } from 'material-ui';
import { withTheme } from 'material-ui/styles';

import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import JssProvider from 'react-jss/lib/JssProvider';
import createContext from '../styles/createContext';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class NavBar extends React.Component {

  render() {
    return (
      <div>
        <AppBar>
          <Toolbar>
            <Tabs centered>
              <Tab label="Models" value="/main/models" component={Link} to="/main/models" />
              <Tab label="Adventures" value="/main/landscapes" component={Link} to="/main/landscapes" />
              <Tab label="About Me" value="/main/aboutme" component={Link} to="/main/aboutme" />
            </Tabs>
            {/* <Typography type="title" color="inherit">
              <Link to="/main/models">Models</Link>
            </Typography>
            <Typography type="title" color="inherit">
              <Link to="/main/landscapes">Adventures</Link>
            </Typography>
            <Typography type="title" color="inherit">
              <Link to="/main/aboutme">About Me</Link>
            </Typography> */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withTheme()(NavBar);
