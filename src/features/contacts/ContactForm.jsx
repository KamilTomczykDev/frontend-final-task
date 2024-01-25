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
  console.log(status);
  console.log(isLoading);

  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    console.log({ fullName, email, city, telNumber });
    dispatch(uploadContact({ fullName, email, city, telNumber }));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[600px] flex-col gap-2 text-white"
    >
      <FormRow title="Full name">
        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          type="text"
          className="w-full border-2 border-stone-600 bg-stone-900 p-1"
        />
      </FormRow>
      <FormRow title="E-mail">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="w-full border-2 border-stone-600 bg-stone-900 p-1"
        />
      </FormRow>
      <FormRow title="City">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          className="w-full border-2 border-stone-600 bg-stone-900 p-1"
        />
      </FormRow>
      <FormRow title="Tel. Number">
        <input
          value={telNumber}
          onChange={(e) => setTelNumber(e.target.value)}
          type="number"
          className="w-full border-2 border-stone-600 bg-stone-900 p-1"
        />
      </FormRow>
      <button
        disabled={isLoading}
        className="border-2 border-blue-300 bg-blue-400 p-2 font-semibold text-stone-700 hover:bg-blue-300 disabled:opacity-70"
      >
        {isLoading ? <SpinnerMini /> : "Submit"}
      </button>
    </form>
  );
}

export default ContactForm;
