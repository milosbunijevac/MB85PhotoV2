import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from './actions';
import actionCreators from '../NavBar/actions';
import Card from '../../components/Card';
import Progress from '../../components/DetProgress';

const mapStateToProps = (state) => ({
  modelValue: state.get('models'),
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

class Models extends React.Component {
  componentDidMount() {
    this.props.getNewPosts(null, 'model');
    this.props.routeValue(1);
  }

  render() {
    if (this.props.modelValue.results) {
      return (
        <Wrapper>
          {this.props.modelValue.results.map((value) => (
            <div key={value.uid}>
              <Card to={`/main/models/${value.uid}`} prevImage={value.data.frontimage.url} modelName={value.data.model_name['0'].text} modelDetail={value.data.modeldetail[0].text} />
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

Models.propTypes = {
  modelValue: PropTypes.object,
  getNewPosts: PropTypes.func,
  routeValue: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Models);
