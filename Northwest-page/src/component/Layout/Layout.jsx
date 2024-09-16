import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="h-[80vh]">{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
