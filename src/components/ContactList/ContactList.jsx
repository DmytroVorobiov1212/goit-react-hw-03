import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
import clsx from 'clsx';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={s.container}>
      <ul className={clsx(s.list, s.section)}>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Contact data={contact} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
