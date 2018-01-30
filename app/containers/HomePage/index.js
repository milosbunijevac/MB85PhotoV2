
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import actionCreators from '../NavBar/actions';
import { fetchPosts } from './actions';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { bindActionCreators } from 'redux';
import reducer from './reducer';
import saga from './saga';
import styled from 'styled-components';

const styles = (theme) => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

const mapStateToProps = (state, ownProps = {}) => ({
  stories: state.get('homepageReducer'),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getNewPosts: fetchPosts,
    routeValue: (val) => actionCreators.getRoute(val),
  }, dispatch);
}


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    this.props.getNewPosts();
    this.props.routeValue(0);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        This is the front page.
        {console.log('This is the index: ', this.props.stories)}
      </div>
    );
  }
}


export default compose(
  withStyles(styles, {
    name: 'HomePage',
  }),
  connect(mapStateToProps, mapDispatchToProps),
)(HomePage);
