function FormRow({ children, title }) {
  return (
    <>
      <label className="font-semibold text-stone-700">{title}</label>
      {children}
    </>
  );
}

export default FormRow;
