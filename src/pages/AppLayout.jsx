import { Outlet } from "react-router-dom";
import AppNav from "../ui/AppNav";

function AppLayout() {
  return (
    <div className="grid-rows-app-layout grid w-full justify-center">
      <AppNav />
      <Outlet />
    </div>
  );
}

export default AppLayout;
