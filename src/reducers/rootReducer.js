import { combineReducers } from 'redux';

import activitiesReducer from './actitivitiesReducer';

const rootReducer = combineReducers({
  activities: activitiesReducer,
});

export default rootReducer;
