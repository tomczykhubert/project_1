import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import RootLayout from "./layouts/RootLayout.jsx";
import { Routes, Route } from "react-router-dom";
import { menuItems } from "./data/menu-items.jsx";
import NotFound from "./pages/NotFound.jsx";
import AppProvider from "./data/AppProvider.jsx";

function App() {
  function getRoutes(items) {
    return items.map((item) => (
      <Route path={item.urlPattern} element={item.element} key={item.id}>
        {item.children ? getRoutes(item.children) : null}
      </Route>
    ));
  }
  return (
    <>
      <AppProvider>
        <RootLayout menuItems={menuItems}>
          <Routes>
            {getRoutes(menuItems)}
            <Route path="/*" element={<NotFound></NotFound>} />
          </Routes>
        </RootLayout>
      </AppProvider>
    </>
  );
}

export default App;
