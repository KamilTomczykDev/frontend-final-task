function LoginData() {
  return (
    <div className="fixed bottom-0 left-[50%] mb-10 flex max-w-[500px] translate-x-[-50%] flex-col gap-1 bg-main-800 p-2 text-white">
      <span className="text-xl font-semibold text-secondary-400">
        Data to log in:
      </span>
      <div className="flex gap-1">
        <span className="">Login:</span>
        <span className="font-semibold text-secondary-400">admin</span>
        <span>Password:</span>
        <span className="font-semibold text-secondary-400"> 1234</span>
      </div>
      <div className="flex gap-1">
        <span>Login:</span>
        <span className="font-semibold text-secondary-400">guest</span>
        <span>Password:</span>
        <span className="font-semibold text-secondary-400">4321</span>
      </div>
    </div>
  );
}

export default LoginData;
