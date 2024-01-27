import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../contacts/contactsSlice";
import { useEffect } from "react";
import Spinner from "../../ui/Spinner";
import ContactTable from "../contacts/ContactTable";

function GuestView() {
  const { contacts, status } = useSelector((state) => state.contacts);
  const isLoading = status === "loading";
  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(getContacts());
    },
    [dispatch],
  );
  if (isLoading)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Spinner color="white" />
      </div>
    );
  return (
    <div className="mt-[60px] flex w-full max-w-[1500px] p-4 text-[10px] text-white md:text-sm">
      <ContactTable contacts={contacts} isLoading={isLoading} />
    </div>
  );
}

export default GuestView;
