import { createStore, combineReducers, compose } from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension';

import reducers from './reducers';
const store = createStore(combineReducers(reducers), devToolsEnhancer());

export default store;

// -- single reducer
// // {
// //   "r1": {},
// //   "r2": {},
// //   "r3": {}
// // }

// -- combineReducers
// {
//   "user" :{
//     "...": {},
//     "...": {},
//     "...": {}
//   },
//   "reducer2" :{
//     "r1": {},
//     "r2": {},
//     "r3": {}
//   },"reducer3" :{
//     "r1": {},
//     "r2": {},
//     "r3": {}
//   }
// }

