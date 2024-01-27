function ContactRow({ contact }) {
  console.log(contact);
  if (!contact) return;
  const { fullName, email, city, telNumber } = contact;
  return (
    <tr className="grid-cols-guest border-main-800 grid items-center gap-1 border-t-2 py-2 text-center">
      <td>{fullName}</td>
      <td>{email}</td>

      <td>{city}</td>

      <td>{telNumber}</td>
    </tr>
  );
}

export default ContactRow;
