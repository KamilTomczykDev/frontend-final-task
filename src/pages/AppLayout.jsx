import { useSelector } from "react-redux";

function App() {
  const contacts = useSelector((state) => state.contacts.contacts);
  console.log(contacts);
  return <div></div>;
}

export default App;
