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
import ImageGallery from '../../components/ImageGallery';

import Card from '../../components/Card';

const mapStateToProps = (state, ownProps = {}) => ({
  landscapeValue: state.get('landscapePage').get('landscapeInfo'),
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

class LandscapePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getNewPosts(null, 'landscape', `${this.props.match.params.landscape}`);
    this.props.routeValue(2);
  }

  render() {
    if (this.props.landscapeValue) {
      const landscapeList = [];
      console.log('landscapeValue: ', this.props.landscapeValue);
      _.forEach(this.props.landscapeValue.data, (value) => {
        if (value.Thumb) {
          console.log('This is the value of value', value);
          if (value.dimensions) {
            landscapeList.push({ thumb: value.Thumb.url, image: value.url, height: value.dimensions.height, width: value.dimensions.width });
          }
        }
      });

      return (
        <div>
          <ImageGallery photos={landscapeList} />

          {console.log('This is modelList props after loading: ', landscapeList)}
        </div>
      );
    }
    return (
      <div>
        This is the individual model page. {this.props.match.params.model}
        Old version
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandscapePage);
