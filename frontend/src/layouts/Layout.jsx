import { Outlet } from "react-router-dom";
import Sidebar from "~/components/Sidebar/Sidebar";
import Container from "~/containers/Container";

const Layout = () => {
  return (
    <Container>
      <Sidebar />
      <div className="p-4  w-full ">
        <Outlet />
      </div>
    </Container>
  );
};

export default Layout;
