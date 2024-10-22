export default function AppReducer(state, action) {
  switch (action.type) {
    case "edit":
      return state;
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
