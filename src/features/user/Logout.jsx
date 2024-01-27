import { MdLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logoutUser } from "./userSlice";

function Logout() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(logoutUser());
  }

  return (
    <div onClick={handleClick} className="hover:opacity-70">
      <MdLogout size={30} />
    </div>
  );
}

export default Logout;
