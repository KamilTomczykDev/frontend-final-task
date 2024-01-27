import GoBack from "../ui/GoBack";
import LoginForm from "../features/user/LoginForm";

function Login() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-full max-w-[400px] flex-col gap-4 px-2 py-[4rem] sm:items-center sm:border-2 sm:border-stone-600 sm:bg-stone-900">
        <h1 className="text-3xl font-semibold text-blue-400">
          FRONT-END FINAL
        </h1>
        <LoginForm />
        <GoBack to="/" />
      </div>
    </div>
  );
}

export default Login;
