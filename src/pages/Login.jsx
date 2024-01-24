function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-stone-200">
      <div className="flex w-full max-w-[400px] flex-col items-center gap-4 rounded-md border-2 border-stone-400 bg-stone-300 px-2 py-[4rem]">
        <h1 className="text-3xl font-semibold text-stone-800">
          FRONT-END FINAL
        </h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            className="w-full rounded-md border-2 border-stone-400 bg-stone-200 p-1"
            placeholder="login"
          ></input>
          <input
            type="password"
            className="w-full rounded-md border-2 border-stone-400 bg-stone-200 p-1"
            placeholder="password"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default Login;
