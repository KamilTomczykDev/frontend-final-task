import { useSelector } from "react-redux";
import Logout from "../features/user/Logout";

function AppNav() {
  const user = useSelector((state) => state.user.user);

  return (
    <nav className="flex items-center border-b-2 border-stone-600 bg-stone-900 px-2 text-white">
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
