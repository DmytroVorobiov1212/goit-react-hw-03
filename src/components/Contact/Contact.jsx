import { FaUser } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';
import s from './Contact.module.css';
import clsx from 'clsx';

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={clsx(s.container, s.containerContact)}>
      <div className={clsx(s.section, s.contactItem)}>
        <div>
          <h3>
            <FaUser className={s.iconUser} />
            {name}
          </h3>
          <p>
            <BsTelephoneFill className={s.iconPhone} />
            {number}
          </p>
        </div>
        <button className={s.btn} onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
