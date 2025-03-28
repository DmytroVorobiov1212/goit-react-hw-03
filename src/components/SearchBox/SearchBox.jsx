import s from './SearchBox.module.css';

const SearchBox = ({ value, onSearch }) => {
  return (
    <div className={s.wrapper}>
      <p className={s.label}>Search</p>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={e => onSearch(e.target.value)}
        placeholder="Type a name..."
      />
    </div>
  );
};

export default SearchBox;
