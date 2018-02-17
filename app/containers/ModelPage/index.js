import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import _ from 'lodash';
import PropTypes from 'prop-types';

import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import actionCreators from '../NavBar/actions';
import Progress from '../../components/DetProgress';

const mapStateToProps = (state) => ({
  modelValue: state.get('modelPage').get('modelInfo'),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getNewPosts: fetchPosts,
  routeValue: (val) => actionCreators.getRoute(val),
}, dispatch);

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
          {modelList.map((value) => (
            <a key={value.src} href={value.src}><img alt={`Model ${value.src} shown here`}key={value.src} src={value.src} /> </a>
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

ModelPage.propTypes = {
  modelValue: PropTypes.object,
  getNewPosts: PropTypes.func,
  match: PropTypes.object,
  routeValue: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModelPage);
