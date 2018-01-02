import React from 'react';
import { render } from 'react-dom';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import JssProvider from 'react-jss/lib/JssProvider';
import createContext from '../styles/createContext';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const styles = {
  root: {
    width: '100%',
  },
};


class NavBar extends React.Component {

  render() {
    return (
      <div>
        <AppBar position="static" color="default" >
          <Toolbar>
            <Typography type="title" color="inherit">
              <Link to="/main/models">Models</Link>
            </Typography>
            <Typography type="title" color="inherit">
              <Link to="/main/landscapes">Adventures</Link>
            </Typography>
            <Typography type="title" color="inherit">
              <Link to="/main/aboutme">About Me</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default NavBar;
