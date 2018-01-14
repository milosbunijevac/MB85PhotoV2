/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import actionCreators from './actions';
import { bindActionCreators } from 'redux';

import HomePage from '../HomePage/Loadable';
import Models from 'containers/Models/Loadable';
import Landscapes from 'containers/Landscapes/Loadable';
import AboutMe from 'containers/AboutMe/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

const mapStateToProps = (state, ownProps = {}) => ({
  myValue: state,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getNewPayload: actionCreators.customAction,
  }, dispatch);
}


const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  margin-top: 64px;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

class App extends React.Component {

  // componentDidMount() {
  //   this.props.getNewPayload();
  // }

  render() {
    return (
      <div>
        <Header />
        <AppWrapper>
          <Switch>
            <Route exact path="/main/" component={HomePage} />
            <Route path="/main/aboutme" component={AboutMe} />
            <Route path="/main/models" component={Models} />
            <Route path="/main/landscapes" component={Landscapes} />
          </Switch>
        </AppWrapper>
        <Footer />
      </div>
    );
  }
}

// const map = Map(obj);
// map.get('1'); // "one"
// map.get(1);   // undefined


export default connect(mapStateToProps, mapDispatchToProps)(App);
