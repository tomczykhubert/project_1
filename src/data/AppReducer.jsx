import { act } from "react";

export default function AppReducer(state, action) {
  switch (action.type) {
    case "add": {
      return [...state, action.item];
    }
    case "edit":
      return state.map((item) =>
        item.id === action.item.id ? action.item : item
      );
    case "rate": {
      return state.map((item) =>
        item.id === action.id
          ? { ...item, rating: item.rating < 10 ? item.rating + 1 : 0 }
          : item
      );
    }
    case "delete":
      return state.filter(function (item) {
        return item.id != action.id;
      });
  }
}
