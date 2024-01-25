import ContactForm from "../features/contacts/ContactForm";
import Navbar from "../ui/Navbar";
import headerPicture from "../assets/header-picture.jpg";

function Homepage() {
  return (
    <>
      <Navbar />
      <main className="flex justify-center">
        <div className="flex w-full max-w-[1300px] flex-col items-center justify-center gap-10 p-4">
          <div className="grid max-w-[600px] grid-cols-2 items-center gap-4 border-2 border-stone-600 bg-stone-900 p-4">
            <img
              src={headerPicture}
              className="h-full border-2 border-stone-600 object-cover"
            />
            <p className="text-sm text-white">
              Hello! My name is{" "}
              <span className="font-semibold">Mirek Headhunter.</span> I am
              looking for new contacts to interact with. Please take a minute
              and insert info about You in the form below. Thank You!
            </p>
          </div>
          <ContactForm />
        </div>
      </main>
    </>
  );
}

export default Homepage;
