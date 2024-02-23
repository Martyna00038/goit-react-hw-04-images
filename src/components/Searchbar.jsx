import { useState } from 'react';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = eve => {
    eve.preventDefault();
    onSubmit(query);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
