import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import logo from "../assets/mhh-logo.png";

function Navbar() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }

  return (
    <nav className="fixed flex h-[3rem] w-full items-center justify-between bg-main-900 px-4 md:h-[4rem]">
      <img src={logo} className="h-full p-2" />
      <div onClick={handleClick} className="cursor-pointer hover:opacity-60">
        <FaRegUserCircle size={30} color={"#e8861c"} />
      </div>
    </nav>
  );
}

export default Navbar;
