/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import globalReducer from 'containers/App/reducer';
import modelsReducer from 'containers/Models/reducer';
import routesReducer from 'containers/NavBar/reducer';
import landscapesReducer from 'containers/Landscapes/reducer';
import modelPageReducer from 'containers/ModelPage/reducer';
import landscapePageReducer from 'containers/LandscapePage/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import homepageReducer from './containers/HomePage/reducer';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@5
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  location: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
  case LOCATION_CHANGE:
    return state.merge({
      location: action.payload,
    });
  default:
    return state;
  }
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    global: globalReducer,
    models: modelsReducer,
    modelPage: modelPageReducer,
    routes: routesReducer,
    landscapes: landscapesReducer,
    language: languageProviderReducer,
    landscapePage: landscapePageReducer,
    homepageReducer,
    ...injectedReducers,
  });
}
