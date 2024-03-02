function ContactsStats({ contacts }) {
  const sharedContacts = contacts.filter(
    (contact) => contact.isVisible === true,
  );
  return (
    <div className="w-full bg-main-800 p-4 text-xl xl:text-2xl">
      <p>
        Contacts:{" "}
        <span className="font-bold text-secondary-400">{contacts.length}</span>
      </p>
      <p>
        Contacts shared:{" "}
        <span className="font-bold text-secondary-400">
          {sharedContacts.length}
        </span>
      </p>
    </div>
  );
}

export default ContactsStats;
