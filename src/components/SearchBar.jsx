import { searchIcon } from '../assets';
import { useState } from 'react';

const SearchBar = ({ language }) => {
  const [search, setSearch] = useState('');

  const handleInput = ({ target }) => {
    setSearch(target.value);
  };

  const handleSearch = () => {};

  return (
    <form className="w-full relative" onSubmit={handleSearch}>
      <button type="submit">
        <img src={searchIcon} alt="search icon" className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2" />
      </button>
      <input
        type="text"
        value={search}
        onChange={handleInput}
        placeholder={language.Search}
        className="w-full rounded-2xl bg-white my-4 py-2 px-8 focus:outline-none shadow-sm"
      />
    </form>
  );
};

export default SearchBar;
