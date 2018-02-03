import React from 'react';

import Prismic from 'prismic-javascript';
import { RichText, Date } from 'prismic-reactjs';
import { connect } from 'react-redux';
import { Link, Switch, Route } from 'react-router-dom';
import { fetchPosts } from './actions';
import { bindActionCreators } from 'redux';
import actionCreators from '../NavBar/actions';
import styled from 'styled-components';
import _ from 'lodash';

import Card from '../../components/Card';
import Progress from '../../components/DetProgress';

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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
  img {
    max-width: 100%;
    justify-items: center;
    align-items: center;
  }
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
      const modelList = [];
      const modelFront = [];
      _.forEach(this.props.modelValue.data, (value) => {
        if (value.link_type === 'Web' && value.url) {
          modelList.push({ src: value.url });
        }
        if (value.copyright === null) {
          modelFront.push({ fronturl: value.url });
        }
      });

      return (
        <Wrapper>
          {modelList.map((value, index) => (
            <a key={index} href={value.src}><img key={index} src={value.src} /> </a>
            ))}
        </Wrapper>
      );
    }
    return (
      <div>
        <Progress />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModelPage);
