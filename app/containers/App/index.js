/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { withTheme } from 'material-ui/styles';

import HomePage from 'containers/HomePage/Loadable';
import Models from 'containers/Models/Loadable';
import Landscapes from 'containers/Landscapes/Loadable';
import AboutMe from 'containers/AboutMe/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';


const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const theme = createMuiTheme();
class App extends React.Component {
  render() {
    return (
      <div>
        {/* <MuiThemeProvider theme={theme}> */}
        <Header />
        {/* </MuiThemeProvider> */}
        <AppWrapper>

            Below this are where the new components should render.
            <Switch>
              <Route path="/main/aboutme" component={AboutMe} />
              <Route path="/main/models" component={Models} />
              <Route path="/main/landscapes" component={Landscapes} />
            </Switch>
          <Footer />
        </AppWrapper>

      </div>
    );
  }
}

export default withTheme()(App);
