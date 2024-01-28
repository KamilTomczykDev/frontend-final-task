function AddNoteForm({ id, fullName }) {
  console.log(id);
  return (
    <form className="flex flex-col gap-2 text-white">
      <label>Editing: {fullName} </label>
      <input type="text" className="bg-main-800 p-1" />
      <button className="bg-secondary-400 hover:bg-secondary-200 text-main-950 p-2 font-semibold disabled:opacity-70">
        Add note
      </button>
    </form>
  );
}

export default AddNoteForm;
