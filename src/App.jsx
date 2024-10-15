import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import RootLayout from "./layouts/RootLayout.jsx";
import { Routes, Route } from "react-router-dom";
import { menuItems } from "./data/menu-items.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <>
      <RootLayout menuItems={menuItems}>
        <Routes>
          {menuItems.map((item) => (
            <Route path={item.urlPattern} element={item.element} />
          ))}
          <Route path="/*" element={<NotFound></NotFound>} />
        </Routes>
      </RootLayout>
    </>
  );
}

export default App;
