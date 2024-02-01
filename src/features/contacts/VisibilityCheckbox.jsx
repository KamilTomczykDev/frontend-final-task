import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateAndThenGet } from "./contactsSlice";

function VisibilityCheckbox({ id, isVisible }) {
  const [isChecked, setIsChecked] = useState(isVisible);

  const dispatch = useDispatch();

  function handleChange() {
    setIsChecked(!isChecked);
    dispatch(updateAndThenGet({ id, newData: { isVisible: !isVisible } }));
  }
  return (
    <input
      checked={isVisible}
      onChange={handleChange}
      className="w-[10px] disabled:cursor-not-allowed disabled:opacity-60"
      type="checkbox"
    />
  );
}

export default VisibilityCheckbox;
