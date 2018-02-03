import React from 'react';
import { Link } from 'react-router-dom';
import actionCreators from '../NavBar/actions';
import { fetchPosts } from './actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Card from '../../components/Card';
import Progress from '../../components/DetProgress';

const mapStateToProps = (state, ownProps = {}) => ({
  landscapeProps: state.get('landscapes'),
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

class Landscapes extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getNewPosts(null, 'landscape');
    this.props.routeValue(2);
  }

  render() {
    if (this.props.landscapeProps.results) {
      return (
        <Wrapper>
          {this.props.landscapeProps.results.map((value, index) => (
            <div key={index}>
              <Card to={`/main/landscapes/${value.uid}`} prevImage={value.data.frontimage.MainThumb.url} modelName={value.data.title['0'].text} modelDetail={''} />
            </div>
              ))}
              Fully Loaded Landscapes page
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

export default connect(mapStateToProps, mapDispatchToProps)(Landscapes);
