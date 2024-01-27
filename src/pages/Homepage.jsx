import ContactForm from "../features/contacts/ContactForm";
import Navbar from "../ui/Navbar";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

function Homepage() {
  return (
    <>
      <Navbar />
      <Header />
      <main className="flex justify-center">
        <div className="flex w-full max-w-[1300px] flex-col items-center justify-center gap-10 p-4">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Homepage;
