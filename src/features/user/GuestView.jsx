import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../contacts/contactsSlice";

function GuestView() {
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();

  //   dispatch(getContacts());
  return (
    <div>
      {contacts.map((el) => (
        <div key={el.id}>{el.fullName}</div>
      ))}
    </div>
  );
}

export default GuestView;
