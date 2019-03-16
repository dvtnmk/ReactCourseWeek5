import { createStore, combineReducers } from "redux";

import reducers from './reducers';
const store = createStore(combineReducers(reducers));

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

