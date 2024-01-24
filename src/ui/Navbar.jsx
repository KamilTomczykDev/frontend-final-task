import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }

  return (
    <div className="flex h-[3rem] items-center justify-between border-b-2 border-stone-300 bg-stone-200 p-2 md:h-[4rem]">
      <span className="text-2xl font-bold tracking-wide text-stone-700">
        Logo MHH
      </span>
      <div onClick={handleClick} className="cursor-pointer hover:opacity-60">
        <FaRegUserCircle size={40} color={"#3c3a40"} />
      </div>
    </div>
  );
}

export default Navbar;
