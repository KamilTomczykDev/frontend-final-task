import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function GoBack({ to }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(to)}
      className="flex cursor-pointer items-center gap-1 text-sm text-blue-400 hover:underline"
    >
      <FaLongArrowAltLeft color={"#52b7ff"} />
      Go back
    </div>
  );
}

export default GoBack;
