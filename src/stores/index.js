import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import middlewares from "./middlewares";
import reducers from "./reducers";

const mw = [...middlewares];
const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(...mw)) // applyMiddleware(mw1,mw2,mw3)
);

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
