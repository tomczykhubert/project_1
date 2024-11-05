export default function TableDataReducer(state, action) {
  switch (action.type) {
    case "user": {
      switch (action.order) {
        case "natural":
          return action.initialData;
        case "ascending":
          return [...state].sort((a, b) =>
            a.user.name > b.user.name ? 1 : -1
          );
        case "descending":
          return [...state].sort((a, b) =>
            a.user.name < b.user.name ? 1 : -1
          );
        default:
          return state;
      }
    }
    case "post": {
      switch (action.order) {
        case "natural":
          return action.initialData;
        case "ascending":
          return [...state].sort((a, b) =>
            a.post.title > b.post.title ? 1 : -1
          );
        case "descending":
          return [...state].sort((a, b) =>
            a.post.title < b.post.title ? 1 : -1
          );
        default:
          return state;
      }
    }
    case "comments": {
      switch (action.order) {
        case "natural":
          return action.initialData;
        case "ascending":
          return [...state].sort(
            (a, b) => a.comments.length - b.comments.length
          );
        case "descending":
          return [...state].sort(
            (a, b) => b.comments.length - a.comments.length
          );
        default:
          return state;
      }
    }
    case "setData":
      return action.payload;
    default:
      return state;
  }
}
