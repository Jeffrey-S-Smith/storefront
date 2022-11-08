import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import quantityReducer from './quantity';

let reducers = combineReducers({
  votes: quantityReducer,
});

export default function store(){
  return createStore(reducers, composeWithDevTools())
}