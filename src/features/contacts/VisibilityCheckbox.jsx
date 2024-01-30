import { useDispatch, useSelector } from "react-redux";
// import { updateContact } from "./contactsSlice";
import { useState } from "react";
import { getContacts, updateContact } from "./contactsSlice";

function VisibilityCheckbox({ id, isVisible }) {
  const [isChecked, setIsChecked] = useState(isVisible);
  const { isLoading } = useSelector((state) => state.contacts);

  const dispatch = useDispatch();

  function handleChange() {
    console.log(!isChecked, isChecked);

    setIsChecked(!isChecked);
    dispatch(updateContact({ id, newData: { isVisible: !isVisible } }));
    dispatch(getContacts());
  }
  return (
    <>
      {!isLoading && (
        <>
          <input
            checked={isChecked}
            onChange={handleChange}
            className="w-[10px] disabled:cursor-not-allowed disabled:opacity-60"
            type="checkbox"
          />
        </>
      )}
    </>
  );
}

export default VisibilityCheckbox;
