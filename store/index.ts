import { createStore, applyMiddleware, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { TypedUseSelectorHook, useSelector as useReduxSelector, } from "react-redux";
import todo from "./todo";

// 리듀서를 하나로 모음
const rootReducer = combineReducers({
  todo: todo.reducer,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, //use previous state
      ...action.payload, //apply delta from hydration
    };
    if (state.count) nextState.count = state.count;
    return nextState;
  }
  return rootReducer(state, action);
};

// 스토어 타입
export type RootState = ReturnType<typeof rootReducer>;

const initStore = () => {
  return configureStore({
    reducer,
    devTools: true,
  });
};

// // 미들웨어 적용을 위한 스토어 enhancer
// const bindMiddleware = (middleware: any) => {
//   if (process.env.NODE_ENV !== "production") {
//     const { composeWithDevTools } = require("redux-devtools-extension");
//     return composeWithDevTools(applyMiddleware(...middleware));
//   }
//   return applyMiddleware(...middleware);
// };

// const initStore = () => {
//   return createStore(reducer, bindMiddleware([]));
// };

export const useSelector : TypedUseSelectorHook<RootState> = useReduxSelector;

export const wrapper = createWrapper(initStore);
