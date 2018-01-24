import React from 'react';

import Prismic from 'prismic-javascript';
import { Link, RichText, Date } from 'prismic-reactjs';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { fetchPosts } from './actions';
import { bindActionCreators } from 'redux';
import actionCreators from '../NavBar/actions';
import styled from 'styled-components';

import Card from '../../components/Card';

const mapStateToProps = (state, ownProps = {}) => ({
  modelValue: state.get('modelPage').get('modelInfo'),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getNewPosts: fetchPosts,
    routeValue: (val) => actionCreators.getRoute(val),
  }, dispatch);
}

const Wrapper = styled.div`
`;

class ModelPage extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.getNewPosts(null, 'model', `${this.props.match.params.model}`);
    this.props.routeValue(1);
  }


  render() {
    if (this.props.modelValue) {
      return (
        <Wrapper>
          {console.log('This is modleValue props after loading: ', this.props.modelValue)}
          This is after loading.
        </Wrapper>
      );
    }
    return (
      <div>
        This is the individual model page. {this.props.match.params.model}
        Old version
        {console.log('This is modleValue props old: ', this.props.modelValue)}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModelPage);
