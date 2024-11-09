import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import NavBar from "../NavBar";

const Layout = () => {
  return (
    <div className="container mx-auto">
      <NavBar></NavBar>
      {/* Home */}
      <Outlet></Outlet>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
