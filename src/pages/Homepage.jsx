import ContactForm from "../features/contacts/ContactForm";
import Navbar from "../ui/Navbar";

function Homepage() {
  return (
    <>
      <Navbar />
      <main className="flex justify-center">
        <div className="flex w-full max-w-[1300px] flex-col items-center justify-center gap-10 p-4">
          <div className="grid max-w-[600px] grid-cols-2 gap-4 rounded-md border-2 border-stone-300 bg-stone-200 p-4">
            <div className="h-full rounded-full bg-stone-800"></div>
            <p className="text-sm">
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
