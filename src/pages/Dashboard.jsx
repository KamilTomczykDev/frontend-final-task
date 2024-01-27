import { useSelector } from "react-redux";
import GuestView from "../features/user/GuestView";

function Dashboard() {
  const { role } = useSelector((state) => state.user.user);
  if (role === "admin") return <p>Wow, you are an admin!</p>;
  if (role === "guest") return <GuestView />;
}

export default Dashboard;
