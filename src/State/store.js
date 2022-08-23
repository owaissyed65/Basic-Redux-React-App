// import { createStoreHook } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

// export const store = createStoreHook(reducer,{},applyMiddleware(thunk))
export const store = createStore (reducer,{},applyMiddleware(thunk))
