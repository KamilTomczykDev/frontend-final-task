function FormRow({ children, title }) {
  return (
    <>
      <label className="font-semibold text-white">{title}</label>
      {children}
    </>
  );
}

export default FormRow;
