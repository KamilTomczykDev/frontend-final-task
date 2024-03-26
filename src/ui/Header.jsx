import { Link } from "react-scroll";
import headerImage from "../assets/header-image.svg";
function Header() {
  return (
    <header className="flex h-screen flex-col items-center justify-center gap-2 p-4 text-white md:flex-row md:gap-[100px]">
      <div>
        <img
          src={headerImage}
          alt="Header image"
          className="max-w-[200px] md:max-w-[400px]"
        />
      </div>
      <div className="max-w-[600px] md:mt-[60px]">
        <p className="md:text-lg">Welcome in</p>
        <h1 className="bg-gradient-to-br from-secondary-200 to-secondary-950 bg-clip-text text-5xl font-semibold tracking-wide text-secondary-400 text-transparent md:text-6xl">
          Headhunting Center
        </h1>
        <p className="md:text-lg">
          My name is Jeff, and I am looking for new contacts to interact with.
          Please take a minute to insert information about yourself in the form
          below. Thank you!
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
