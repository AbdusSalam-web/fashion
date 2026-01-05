import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppLayout = () => {
  return (
    <>
      <div className="container">
        <div class="2xl:mx-[48px]">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AppLayout;
