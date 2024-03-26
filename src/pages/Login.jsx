import GoBack from "../ui/GoBack";
import LoginForm from "../features/user/LoginForm";
import LoginData from "../ui/LoginData";

function Login() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="mb-10 flex w-full max-w-[350px] flex-col gap-4 px-2 py-[4rem]">
        <h2 className="text-3xl font-semibold text-white">
          Headhunting center
        </h2>
        <LoginForm />
        <GoBack to="/" />
      </div>
      <LoginData />
    </div>
  );
}

export default Login;
