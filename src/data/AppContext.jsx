import { createContext } from "react";

const AppContext = createContext({
  items: [],
  dispatch: null,
  nextId: null,
  tableData: [],
  tableDispatch: null,
});
export default AppContext;
