import { useSelector } from "react-redux";
import Logout from "../features/user/Logout";

function AppNav() {
  const user = useSelector((state) => state.user.user);

  return (
    <nav className="bg-main-900 fixed flex h-[60px] w-full items-center px-2 text-white">
      <ul className="flex w-full items-center justify-between">
        <li className="text-2xl font-semibold tracking-wider">
          Welcome, {user.role}
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
