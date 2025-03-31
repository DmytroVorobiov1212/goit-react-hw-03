import s from './Title.module.css';
import { MdOutlinePhoneIphone } from 'react-icons/md';

const Title = () => {
  return (
    <>
      <h1 className={s.title}>
        Phonebook
        <MdOutlinePhoneIphone className={s.icon} />
      </h1>
    </>
  );
};

export default Title;
