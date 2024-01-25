import GoBack from "../ui/GoBack";

function PageNotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <p className="text-xl font-semibold text-stone-800">Page not found :(</p>
      <GoBack />
    </div>
  );
}

export default PageNotFound;
