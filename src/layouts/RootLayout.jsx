import NavBarMenu from "../components/NavBarMenu.jsx";
import Footer from "../components/Footer.jsx";

function RootLayout({ menuItems, children }) {
  return (
    <div className="root-layout">
      <NavBarMenu menuItems={menuItems} />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default RootLayout;
