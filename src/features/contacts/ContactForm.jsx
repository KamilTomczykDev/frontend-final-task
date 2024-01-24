import FormRow from "../../ui/FormRow";

function ContactForm() {
  return (
    <form className="flex w-full max-w-[600px] flex-col gap-2">
      <FormRow title="Full name">
        <input
          type="text"
          className="w-full rounded-md border-2 border-stone-300 bg-stone-200 p-1"
        />
      </FormRow>
      <FormRow title="E-mail">
        <input
          type="email"
          className="w-full rounded-md border-2 border-stone-300 bg-stone-200 p-1"
        />
      </FormRow>
      <FormRow title="City">
        <input
          type="text"
          className="w-full rounded-md border-2 border-stone-300 bg-stone-200 p-1"
        />
      </FormRow>
      <FormRow title="Tel. Number">
        <input
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
