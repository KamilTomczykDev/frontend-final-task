import { useDispatch, useSelector } from "react-redux";
import FormRow from "../../ui/FormRow";
import { uploadContact } from "./contactsSlice";
import { useState } from "react";
import SpinnerMini from "../../ui/SpinnerMini";

function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [telNumber, setTelNumber] = useState("");

  const status = useSelector((state) => state.contacts.status);
  const isLoading = status === "loading";

  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    console.log({ fullName, email, city, telNumber });
    dispatch(uploadContact({ fullName, email, city, telNumber }));
  }

  return (
    <div name="form" className="flex w-full items-center justify-center py-10">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-[400px] flex-col gap-1 text-white"
      >
        <FormRow title="Full name">
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            className="bg-main-800 w-full p-1"
          />
        </FormRow>
        <FormRow title="E-mail">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="bg-main-800 w-full p-1"
          />
        </FormRow>
        <FormRow title="City">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            className="bg-main-800 w-full p-1"
          />
        </FormRow>
        <FormRow title="Tel. Number">
          <input
            value={telNumber}
            onChange={(e) => setTelNumber(e.target.value)}
            type="number"
            className="bg-main-800 w-full p-1"
          />
        </FormRow>
        <button
          disabled={isLoading}
          className="bg-secondary-400 hover:bg-secondary-200 text-main-950 mt-10 p-2 font-semibold disabled:opacity-70"
        >
          {isLoading ? <SpinnerMini /> : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
