import { withStyles } from 'material-ui/styles';
import { compose, bindActionCreators } from 'redux';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionCreators from '../NavBar/actions';
import { fetchPosts } from './actions';


import Loading from '../../components/DetProgress';
import HomeUpdates from '../../components/HomeUpdates';

const styles = (theme) => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

const mapStateToProps = (state) => ({
  stories: state.get('homepage'),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getNewPosts: fetchPosts,
  routeValue: (val) => actionCreators.getRoute(val),
}, dispatch);


class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getNewPosts();
    this.props.routeValue(0);
  }

  render() {
    if (this.props.stories.results) {
      return (
        <div>
          {this.props.stories.results.map((value) => (
            <div key={value.data.title['0'].text}>
              <HomeUpdates headline={value.data.title['0'].text} date={value.data.datepicker} story={value.data.story['0'].text} />
            </div>
            ))}
        </div>
      );
    }
    return (
      <div>
        <Loading />
      </div>
    );
  }
}

HomePage.propTypes = {
  stories: PropTypes.object,
  getNewPosts: PropTypes.func,
  routeValue: PropTypes.func,
};


export default compose(
  withStyles(styles, {
    name: 'HomePage',
  }),
  connect(mapStateToProps, mapDispatchToProps),
)(HomePage);
