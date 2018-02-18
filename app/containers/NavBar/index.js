import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppBar, Tabs, Tab } from 'material-ui';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Toolbar from 'material-ui/Toolbar';
import actionCreators from './actions';


const mapStateToProps = (state) => ({
  containerRoute: state.get('routes'),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  routeValue: (val) => actionCreators.getRoute(val),
}, dispatch);

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
            </Toolbar>
          </Grid>
        </AppBar>
      </div>
    );
  }
}
NavBar.propTypes = {
  containerRoute: PropTypes.object,
  routeValue: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
