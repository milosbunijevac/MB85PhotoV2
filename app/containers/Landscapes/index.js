import React from 'react';
import { Link } from 'react-router-dom';
import actionCreators from './actions';
import { fetchPosts } from './actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Card from '../../components/Card';

const mapStateToProps = (state, ownProps = {}) => ({
  landscapeProps: state.get('landscapes'),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getNewPosts: fetchPosts,
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
    this.props.getNewPosts(null, 'article');
  }

  render() {
    if (this.props.landscapeProps.results) {
      return (
        <Wrapper>
          {console.log('this is landscapeProps: ', this.props.landscapeProps)}
          {this.props.landscapeProps.results.map((value, index) => (
            <div key={index}>
              <Card prevImage={value.data.body[0].value[0].image.url} modelName={value.data.title[0].text} modelDetail={''} />
            </div>
              ))}
              Fully Loaded Landscapes page
        </Wrapper>
      );
    }

    return (
      <div>
        This is the landscapes page.
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landscapes);
