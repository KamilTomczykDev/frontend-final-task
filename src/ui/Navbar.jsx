import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";

function Navbar() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }

  return (
    <nav className="fixed flex h-[3rem] w-full items-center justify-between bg-main-900 px-4 md:h-[4rem]">
      <img src={logo} className="h-full p-1" />
      <div onClick={handleClick} className="cursor-pointer hover:opacity-60">
        <button className="bg-secondary-400 px-2 py-1 font-semibold md:px-4 md:py-2">
          Go to app
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
