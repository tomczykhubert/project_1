import { createContext } from "react";

const AppContext = createContext({
  items: [],
  dispatch: null,
  nextId: null,
});
export default AppContext;
