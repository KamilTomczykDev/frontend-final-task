import ContactRow from "./ContactRow";

function ContactTable({ contacts }) {
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-main-800 grid-cols-guest grid items-center gap-1 px-1 py-1 text-center font-semibold md:gap-6 md:py-2">
          <td>Full name</td>
          <td>E-mail</td>
          <td>City</td>
          <td>Tel. Number</td>
          <td></td>
        </tr>
      </thead>
      <tbody className="flex flex-col">
        {contacts &&
          contacts.map((contact) => (
            <ContactRow key={contact.id} contact={contact} />
          ))}

        <ContactRow />
      </tbody>
    </table>
  );
}

export default ContactTable;
