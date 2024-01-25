import GoBack from "../ui/GoBack";

function Login() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-full max-w-[400px] flex-col gap-4 rounded-md px-2 py-[4rem] sm:items-center sm:border-2 sm:border-stone-600 sm:bg-stone-900">
        <h1 className="text-3xl font-semibold text-blue-400">
          FRONT-END FINAL
        </h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            className="w-full rounded-md border-2 border-stone-600 bg-stone-200 p-1"
            placeholder="login"
          ></input>
          <input
            type="password"
            className="w-full rounded-md border-2 border-stone-600 bg-stone-200 p-1"
            placeholder="password"
          ></input>
        </form>
        <GoBack />
      </div>
    </div>
  );
}

export default Login;
