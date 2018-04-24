import { createStore } from "redux";
import reducer from "./reducers"; 

let store = createStore(reducer, { users: [] }); 

export default store;
