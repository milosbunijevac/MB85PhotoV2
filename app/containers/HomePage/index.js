
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import actionCreators from '../NavBar/actions';
import { fetchPosts } from './actions';
import { withStyles } from 'material-ui/styles';
import { bindActionCreators } from 'redux';

import Loading from '../../components/DetProgress';
import HomeUpdates from '../../components/HomeUpdates';

const styles = (theme) => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

const mapStateToProps = (state, ownProps = {}) => ({
  stories: state.get('homepage'),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getNewPosts: fetchPosts,
    routeValue: (val) => actionCreators.getRoute(val),
  }, dispatch);
}


class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getNewPosts();
    this.props.routeValue(0);
  }

  render() {
    if (this.props.stories.results) {
      const { classes } = this.props;
      return (
        <div>
          {this.props.stories.results.map((value, index) => (
            <div key={index}>
              <HomeUpdates headline={value.data.title['0'].text} date={value.data.datepicker} story={value.data.story['0'].text} />
            </div>
            ))}
        </div>
      );
    }
    const { classes } = this.props;
    return (
      <div>
        <Loading />
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
