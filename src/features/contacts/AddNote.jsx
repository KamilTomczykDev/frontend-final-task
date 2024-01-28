import { MdNoteAdd } from "react-icons/md";

function AddNote({ id }) {
  console.log(id);
  return (
    <button>
      <MdNoteAdd size={20} color={"#e8861c"} />
    </button>
  );
}

export default AddNote;
