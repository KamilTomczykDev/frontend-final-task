import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import AppNav from "../ui/AppNav";

function AppLayout() {
  const contacts = useSelector((state) => state.contacts.contacts);
  console.log(contacts);
  return (
    <div className="grid-rows-app-layout grid">
      <AppNav />
      <Outlet />
    </div>
  );
}

export default AppLayout;
