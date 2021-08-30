import { createStore, combineReducers } from "redux";
import PersonReducer from "./reducers/person.reducers";

const rootReducer = combineReducers({
    person : PersonReducer
})

const store = createStore(rootReducer);

export default store;