import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }

  return (
    <div className="flex h-[3rem] items-center justify-between border-b-2 border-stone-600 bg-stone-900 px-4 md:h-[4rem]">
      <span className="text-2xl font-bold tracking-wide text-white">
        Logo MHH
      </span>
      <div onClick={handleClick} className="cursor-pointer hover:opacity-60">
        <FaRegUserCircle size={40} color={"white"} />
      </div>
    </div>
  );
}

export default Navbar;
