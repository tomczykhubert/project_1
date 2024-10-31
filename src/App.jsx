import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import RootLayout from "./layouts/RootLayout.jsx";
import { Routes, Route } from "react-router-dom";
import { menuItems } from "./data/menu-items.jsx";
import NotFound from "./pages/NotFound.jsx";
import { useReducer } from "react";
import AppReducer from "./data/AppReducer";
import { data } from "./data/module-data.js";
import AppContext from "./data/AppContext.jsx";

function App() {
  const [state, appDispatch] = useReducer(AppReducer, data);

  function getRoutes(items) {
    return items.map((item) => (
      <Route path={item.urlPattern} element={item.element} key={item.id}>
        {item.children ? getRoutes(item.children) : null}
      </Route>
    ));
  }
  return (
    <>
      <AppContext.Provider
        value={{
          items: state,
          dispatch: appDispatch,
          nextId: state.length,
        }}
      >
        <RootLayout menuItems={menuItems}>
          <Routes>
            {getRoutes(menuItems)}
            <Route path="/*" element={<NotFound></NotFound>} />
          </Routes>
        </RootLayout>
      </AppContext.Provider>
    </>
  );
}

export default App;
