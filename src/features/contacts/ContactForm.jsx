import { useDispatch } from "react-redux";
import FormRow from "../../ui/FormRow";
import { uploadContact } from "./contactsSlice";
import { useState } from "react";

function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [telNumber, setTelNumber] = useState("");

  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    console.log({ fullName, email, city, telNumber });
    dispatch(uploadContact({ fullName, email, city, telNumber }));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[600px] flex-col gap-2"
    >
      <FormRow title="Full name">
        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          type="text"
          className="w-full rounded-md border-2 border-stone-300 bg-stone-200 p-1"
        />
      </FormRow>
      <FormRow title="E-mail">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="w-full rounded-md border-2 border-stone-300 bg-stone-200 p-1"
        />
      </FormRow>
      <FormRow title="City">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          className="w-full rounded-md border-2 border-stone-300 bg-stone-200 p-1"
        />
      </FormRow>
      <FormRow title="Tel. Number">
        <input
          value={telNumber}
          onChange={(e) => setTelNumber(e.target.value)}
          type="number"
          className="w-full rounded-md border-2 border-stone-300 bg-stone-200 p-1"
        />
      </FormRow>
      <button className="rounded-md border-2 border-stone-400 bg-stone-700 p-2 text-stone-400 hover:bg-stone-600">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
