import { useDispatch } from "react-redux";
import FormRow from "../../ui/FormRow";
import { useState } from "react";
import { loginUser } from "./userSlice";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(loginUser({ login, password }));
    navigate("/app", { replace: true });
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 text-white">
      <FormRow title="Login">
        <input
          value={login}
          required
          onChange={(e) => setLogin(e.target.value)}
          type="text"
          placeholder="admin"
          className="w-full bg-main-800 p-1"
        ></input>
      </FormRow>
      <FormRow title="Password">
        <input
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="1234"
          className="w-full bg-main-800 p-1"
        ></input>
        <button className="bg-secondary-400 p-2 font-semibold text-stone-700 transition duration-300 hover:bg-secondary-200 disabled:opacity-70">
          Login
        </button>
      </FormRow>
    </form>
  );
}

export default LoginForm;
