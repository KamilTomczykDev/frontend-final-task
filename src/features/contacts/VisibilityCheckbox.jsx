import { useDispatch, useSelector } from "react-redux";
// import { updateContact } from "./contactsSlice";
import { useState } from "react";
import { updateAndThenGet } from "./contactsSlice";
// import { getContacts, updateAndThenGet, updateContact } from "./contactsSlice";

function VisibilityCheckbox({ id, isVisible }) {
  const [isChecked, setIsChecked] = useState(isVisible);
  const { isLoading } = useSelector((state) => state.contacts);

  const dispatch = useDispatch();

  function handleChange() {
    console.log(!isChecked, isChecked);

    setIsChecked(!isChecked);
    // dispatch(updateContact({ id, newData: { isVisible: !isVisible } }));
    // dispatch(getContacts());
    dispatch(updateAndThenGet({ id, newData: { isVisible: !isVisible } }));
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
