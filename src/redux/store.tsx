import { createStore } from "redux";
import itemsReducer from "./reducer";

const Store = createStore(itemsReducer);

export default Store;