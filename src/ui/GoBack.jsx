import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function GoBack({ to }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(to)}
      className="text-secondary-400 flex cursor-pointer items-center gap-1 text-sm hover:underline"
    >
      <FaLongArrowAltLeft color={"#e8861c"} />
      Go back
    </div>
  );
}

export default GoBack;
