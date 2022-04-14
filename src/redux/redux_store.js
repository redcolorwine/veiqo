import { combineReducers, createStore } from "redux";
import MainPageReducer from "./mainPageReducer";

let reducers = combineReducers({
    main: MainPageReducer
})

let store = createStore(reducers);
export default store;