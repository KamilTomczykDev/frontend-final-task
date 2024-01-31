import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../contacts/contactsSlice";
import { useEffect } from "react";
import Spinner from "../../ui/Spinner";
import ContactTable from "../contacts/ContactTable";

function ContactsView() {
  const { contacts, isLoading } = useSelector((state) => state.contacts);
  const { role } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  let contactsArray = contacts;

  useEffect(
    function () {
      dispatch(getContacts());
    },
    [dispatch],
  );

  function handleClick() {
    dispatch(getContacts());
  }

  if (isLoading)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Spinner color="white" />
      </div>
    );

  if (role === "guest") {
    contactsArray = contacts.filter((contact) => contact.isVisible === true);
  }

  return (
    <div className="mt-[60px] flex w-full max-w-[1500px] flex-col gap-1 p-2  text-[8px] text-white md:p-4 md:text-sm">
      <button onClick={handleClick} className="bg-secondary-400 p-1">
        Refresh
      </button>
      <ContactTable contacts={contactsArray} isLoading={isLoading} />
    </div>
  );
}

export default ContactsView;
