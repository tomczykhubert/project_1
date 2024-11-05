import { useReducer } from "react";
import { data } from "./module-data.js";
import AppContext from "./AppContext.jsx";
import AppReducer from "./AppReducer.jsx";

function AppProvider({ children }) {
  const [state, appDispatch] = useReducer(AppReducer, data);
  return (
    <AppContext.Provider
      value={{
        items: state,
        dispatch: appDispatch,
        nextId: state.length + 1,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
