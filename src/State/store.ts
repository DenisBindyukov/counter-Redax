import {combineReducers,createStore}from 'redux'
import {counterReducer} from "./counter-reducer";

const rootReducer = combineReducers({
  counterReducer
});
export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>