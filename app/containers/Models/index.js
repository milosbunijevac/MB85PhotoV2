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
  modelValue: state.get('models'),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getNewPosts: fetchPosts,
    routeValue: (val) => actionCreators.getRoute(val),
  }, dispatch);
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 1em;
  grid-column-gap: 1em;
  margin: 0 auto;
`;

class Models extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.getNewPosts(null, 'model');
    this.props.routeValue(1);
  }


  render() {
    console.log('This is before any render: ', this.props.modelValue);
    if (this.props.modelValue.results) {
      return (
        <Wrapper>
          {console.log('This is modleValue props: ', this.props.modelValue.results)}
          {this.props.modelValue.results.map((value, index) => (
            <div key={index}>
              <Card prevImage={value.data.frontimage.url} modelName={value.data.model_name[0].text} modelDetail={value.data.modeldetail[0].text} />
            </div>
            ))}
        </Wrapper>
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
