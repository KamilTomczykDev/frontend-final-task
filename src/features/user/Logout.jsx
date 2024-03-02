import { MdLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logoutUser } from "./userSlice";

function Logout() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(logoutUser());
  }

  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center hover:opacity-70"
    >
      <MdLogout size={30} />
    </button>
  );
}

export default Logout;
