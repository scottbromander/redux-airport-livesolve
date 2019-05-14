import { createStore, combineReducers, applyMiddleware } from 'redux';
import airportReducer from '../reducers/addAirport';
import logger from 'redux-logger';

const storeInstance = createStore(
    combineReducers({
        airportReducer
    }),
    applyMiddleware(logger)
);

export default storeInstance;