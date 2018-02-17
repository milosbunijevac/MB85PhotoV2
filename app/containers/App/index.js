/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import Models from 'containers/Models/Loadable';
import Landscapes from 'containers/Landscapes/Loadable';
import AboutMe from 'containers/AboutMe/Loadable';
import Header from 'containers/Header';
import Footer from 'components/Footer';
import ModelPage from 'containers/ModelPage';
import LandscapePage from 'containers/LandscapePage';
import { Switch, Route, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import actionCreators from './actions';
import HomePage from '../HomePage/Loadable';


const mapStateToProps = (state = {}) => ({
  myValue: state,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getNewPayload: actionCreators.customAction,
}, dispatch);


const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  margin-top: 64px;
  display: flex;
  position: relative;
  min-height: 75vh;
  padding: 0 16px;
  flex-direction: column;
`;

const App = () => (
  <div>
    <Header />
    <AppWrapper>
      <Switch>
        <Route exact path="/main" component={HomePage} />
        <Route path="/main/aboutme" component={AboutMe} />
        <Route exact path="/main/models" component={Models} />
        <Route path="/main/models/:model" component={ModelPage} />
        <Route exact path="/main/landscapes" component={Landscapes} />
        <Route path="/main/landscapes/:landscape" component={LandscapePage} />
      </Switch>
    </AppWrapper>
    <Footer />
  </div>
);

// const map = Map(obj);
// map.get('1'); // "one"
// map.get(1);   // undefined


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
