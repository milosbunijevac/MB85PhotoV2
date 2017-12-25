import React from 'react';
import Toolbar from 'material-ui/Toolbar';
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup';
import customTheme from '../UIThemes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(customTheme)}>
          <Toolbar>
            <ToolbarGroup>
              One
            </ToolbarGroup>
            <ToolbarGroup>
              Two
            </ToolbarGroup>
            <ToolbarGroup>
              Three
            </ToolbarGroup>
          </Toolbar>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default NavBar;
