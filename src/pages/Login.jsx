import GoBack from "../ui/GoBack";
import LoginForm from "../features/user/LoginForm";

function Login() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-full max-w-[350px] flex-col gap-4 px-2 py-[4rem]">
        <h1 className="text-3xl font-semibold text-white">
          MHH Contact Center
        </h1>
        <LoginForm />
        <GoBack to="/" />
      </div>
    </div>
  );
}

export default Login;
