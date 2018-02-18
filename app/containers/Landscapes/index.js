import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import actionCreators from '../NavBar/actions';
import { fetchPosts } from './actions';


import Card from '../../components/Card';
import Progress from '../../components/DetProgress';

const mapStateToProps = (state) => ({
  landscapeProps: state.get('landscapes'),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getNewPosts: fetchPosts,
  routeValue: (val) => actionCreators.getRoute(val),
}, dispatch);

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 1em;
  grid-column-gap: 1em;
  margin: 0 auto;
`;

class Landscapes extends React.Component {

  componentDidMount() {
    this.props.getNewPosts(null, 'landscape');
    this.props.routeValue(2);
  }

  render() {
    if (this.props.landscapeProps.results) {
      return (
        <Wrapper>
          {this.props.landscapeProps.results.map((value) => (
            <div key={value.uid}>
              <Card to={`/main/landscapes/${value.uid}`} prevImage={value.data.frontimage.MainThumb.url} modelName={value.data.title['0'].text} modelDetail={''} />
            </div>
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

Landscapes.propTypes = {
  landscapeProps: PropTypes.object,
  getNewPosts: PropTypes.func,
  routeValue: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Landscapes);
