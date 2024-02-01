import { Link } from "react-scroll";

function Header() {
  return (
    <header className="flex h-screen items-center justify-center p-4 text-white">
      <div className="mt-[60px] max-w-[600px]">
        <p className="md:text-lg">Hello! My name is</p>
        <h1 className="text-5xl font-semibold tracking-wide text-secondary-400 md:text-6xl">
          Mirek Headhunter
        </h1>
        <p className="md:text-lg">
          I am looking for new contacts to interact with. Please take a minute
          and insert info about Yourself in the form below. Thank You!
        </p>
        <Link to="form" duration={1000} smooth={true}>
          <button className="mt-2 bg-secondary-400 px-3 py-2 font-semibold text-main-950 transition duration-300 hover:bg-secondary-200">
            Go to form
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
