import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Tabs, Tab } from 'material-ui';
import Grid from 'material-ui/Grid';
import Toolbar from 'material-ui/Toolbar';
import actionCreators from './actions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps = {}) => ({
  containerRoute: state.get('routes'),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    routeValue: (val) => actionCreators.getRoute(val),
  }, dispatch);
}

class NavBar extends React.Component {

  handleChange = (event, value) => {
    this.props.routeValue(value);
  };

  render() {
    const { alignItems, direction, justify } = this.props.containerRoute;
    return (
      <div>
        <AppBar >
          <Grid container alignItems={alignItems} direction={direction} justify={justify}>
            <Toolbar>
              <Tabs
                value={this.props.containerRoute.value}
                onChange={this.handleChange}
                fullWidth
              >
                <Tab label="Home" component={Link} to="/main" />
                <Tab label="Models" component={Link} to="/main/models" />
                <Tab label="Adventures" component={Link} to="/main/landscapes" />
                <Tab label="About Me" component={Link} to="/main/aboutme" />
              </Tabs>
              {console.log('This is how to contain the containerRoute: ', this.props.containerRoute)}
            </Toolbar>
          </Grid>
        </AppBar>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
