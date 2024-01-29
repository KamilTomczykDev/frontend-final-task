import { useDispatch, useSelector } from "react-redux";
import { updateContact } from "./contactsSlice";
import { useState } from "react";

function VisibilityCheckbox({ id, isVisible }) {
  const [isChecked] = useState(isVisible);
  const { isLoading } = useSelector((state) => state.contacts);

  const dispatch = useDispatch();
  function handleChange() {
    dispatch(updateContact({ id, newData: { isVisible: !isChecked } }));
  }
  return (
    <input
      defaultChecked={isChecked}
      disabled={isLoading}
      onChange={handleChange}
      className="w-[10px] disabled:cursor-not-allowed disabled:opacity-60"
      type="checkbox"
    />
  );
}

export default VisibilityCheckbox;
