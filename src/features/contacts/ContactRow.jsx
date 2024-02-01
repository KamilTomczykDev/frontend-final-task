import { useSelector } from "react-redux";
import AddNote from "../notes/AddNote";
import VisibilityCheckbox from "./VisibilityCheckbox";
import ViewNote from "../notes/ViewNote";

function ContactRow({ contact }) {
  const { role } = useSelector((state) => state.user.user);
  if (!contact) return;
  const { id, fullName, email, city, telNumber, isVisible, note } = contact;
  return (
    <tr className="grid grid-cols-guest items-center gap-1 border-t-2 border-main-800 py-2 text-center md:gap-6">
      <td className="break-words">{fullName}</td>
      <td className="break-all">{email}</td>
      <td className="break-words">{city}</td>
      <td className="break-all">{telNumber}</td>
      <td>
        <ViewNote note={note} />
      </td>
      {role === "admin" && (
        <td className="flex gap-1">
          <AddNote id={id} fullName={fullName} />
          <VisibilityCheckbox id={id} isVisible={isVisible} />
        </td>
      )}
    </tr>
  );
}

export default ContactRow;
