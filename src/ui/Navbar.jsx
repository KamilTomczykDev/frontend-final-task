import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }

  return (
    <div className="bg-main-900 fixed flex h-[3rem] w-full items-center justify-between px-4 md:h-[4rem]">
      <span className="text-2xl font-bold tracking-wide text-white">
        Logo MHH
      </span>
      <div onClick={handleClick} className="cursor-pointer hover:opacity-60">
        <FaRegUserCircle size={30} color={"#e8861c"} />
      </div>
    </div>
  );
}

export default Navbar;
