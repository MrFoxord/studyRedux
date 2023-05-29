import {createStore,combineReducers,applyMiddleware} from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { countWatcher } from '../saga/countSaga';

const sagaMiddleware=createSagaMiddleware()

const rootReducer=combineReducers({
    count:cashReducer,
    customer:customerReducer
})
export const store=createStore(rootReducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(countWatcher)