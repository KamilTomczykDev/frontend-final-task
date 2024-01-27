import ContactRow from "./ContactRow";

function ContactTable({ contacts }) {
  return (
    <table className="w-full">
      <thead>
        <tr className="grid-cols-guest grid items-center gap-1 py-2 text-center font-semibold">
          <td>Full name</td>
          <td>E-mail</td>
          <td>City</td>
          <td>Tel. Number</td>
        </tr>
      </thead>
      <tbody className="flex flex-col">
        {contacts.length &&
          contacts.map((contact) => (
            <ContactRow key={contact.id} contact={contact} />
          ))}

        <ContactRow />
      </tbody>
    </table>
  );
}

export default ContactTable;
