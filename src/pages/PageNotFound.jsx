import GoBack from "../ui/GoBack";

function PageNotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <p className="text-xl font-semibold text-white">Page not found :(</p>
      <GoBack to={-1} />
    </div>
  );
}

export default PageNotFound;
