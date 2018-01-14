import React from 'react';

import Prismic from 'prismic-javascript';
import { Link, RichText, Date } from 'prismic-reactjs';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { fetchPosts } from './actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state, ownProps = {}) => ({
  modelValue: state,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getNewPosts: fetchPosts,
  }, dispatch);
}

class Models extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.getNewPosts();
  }


  render() {
    if (this.props.modelValue) {
      return (
        <div>
          {/* <img src={this.state.doc[0].data.frontimage.url} alt="Anna Ilina" /> */}
          This is the new render from prismic.

        </div>
      );
    }
    return (
      <div>
        This is the models page.
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Models);
