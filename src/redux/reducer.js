import { combineReducers } from "redux";

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const SAVE_TASK = "SAVE_TASK";

//Action

export function upDateTask(data) {
  return {
    type: "SAVE_TASK",
    payload: data,
  };
}

export function itemObject(item) {
  return {
    type: "ITEM_OBJECT",
    payload: item,
  };
}

export function deleteItem(item) {
  return {
    type: DELETE_TASK,
    payload: item,
  };
}

//Reducers
const initialState = {
  data: [],
  itemObject: "",
};

function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_TASK:
      const deleteNewArray = state.items.filter(
        (i) => i.imdbID != action.payload.imdbID
      );
      return { ...state, items: deleteNewArray };

    case "ITEM_OBJECT":
      return {
        ...state,
        itemObject: action.payload,
      };

    case "SAVE_TASK":
      state.data.push(action.payload);
      return state;

    default:
      return state;
  }
}

export default combineReducers({ dataState: itemsReducer });
