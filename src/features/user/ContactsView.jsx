import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getContacts } from "../contacts/contactsSlice";

import Spinner from "../../ui/Spinner";
import ContactTable from "../contacts/ContactTable";
import ContactsStats from "../contacts/ContactsStats";

function ContactsView() {
  const { contacts, isLoading } = useSelector((state) => state.contacts);
  const { role } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  let contactsArray = [...contacts];

  contactsArray.sort((a, b) => {
    if (a.fullName < b.fullName) return -1;

    if (a.fullName > b.fullName) return 1;
    return 0;
  });
  //sort array a - z

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
    <div className="mt-[60px] flex w-full max-w-[1500px] flex-col gap-1 p-2 text-[8px] text-white md:p-4 md:text-sm">
      {role === "admin" && <ContactsStats contacts={contactsArray} />}
      <button
        onClick={handleClick}
        className="bg-secondary-400 p-1 hover:bg-secondary-200"
      >
        Refresh
      </button>
      <ContactTable contacts={contactsArray} isLoading={isLoading} />
    </div>
  );
}

export default ContactsView;
