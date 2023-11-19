// LIBRARY IMPORTS
import React, { useState, useRef } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

// LOCAL IMPORTS

export default function SearchBar({
  data,
  setData,
  setClearedSearch,
  fullDataSet,
}) {
  // SET STATES
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchSuccessful, setSearchSuccessful] = useState(false);
  const searchTermRef = useRef('');

  // EVENT HANDLERS
  const handleInputChange = event => {
    setSearchTerm(event.target.value);
    searchTermRef.current = event.target.value;
  };

  const handleInputSubmit = event => {
    event.preventDefault();
    const results = data.filter(item =>
      item.fullName.toLowerCase().includes(searchTerm.toLowerCase().trim()),
    );
    if (searchTerm.trim() === '') {
      searchTermRef.current = '';
      return;
    }
    setData(results);
    if (results.length === 0) {
      setClearedSearch(false);
    }
    if (results.length > 0) {
      setSearchSuccessful(true);
    }
    setSearchSubmitted(true);
    setSearchTerm('');
  };

  const handleClearSubmit = event => {
    event.preventDefault();
    setData(fullDataSet);
    setSearchTerm('');
    setClearedSearch(true);
    setSearchSubmitted(false);
    setSearchSuccessful(false);
    searchTermRef.current = '';
  };

  const handleKeyClearSubmit = event => {
    if (event.key === 'Backspace' || event.key === 'Delete') {
      handleClearSubmit(event);
    }
  };

  return (
    <>
      <form
        className="w-full m-auto max-w-lg mt-2 relative px-7 md:px-0"
        onSubmit={handleInputSubmit}
      >
        <label className="label">
          <span className="label-text-alt flex items-start text-primary font-bold lg:text-lg text-base">
            Who can we help you find?
          </span>
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder={
              searchSubmitted
                ? 'Clear your results to search again'
                : 'Search by name'
            }
            className="input input-bordered md:w-[32rem] w-full rounded-xl flex items-center font-bold text-primary"
            value={searchTerm}
            onChange={handleInputChange}
            disabled={searchSubmitted}
          />
          {searchSubmitted ? (
            <button
              className="absolute right-5 top-1/2 -translate-y-1/2"
              type="button"
              onClick={handleClearSubmit}
              onKeyDown={searchSubmitted ? handleKeyClearSubmit : null}
              role="button"
              tabindex="0"
              aria-label="Clear search"
            >
              <XMarkIcon
                className="w-5 h-5 text-primary"
                style={{ strokeWidth: 3 }}
              />
            </button>
          ) : (
            <button
              className="absolute right-5 top-1/2 -translate-y-1/2"
              type="submit"
              aria-label="Search"
            >
              <MagnifyingGlassIcon
                className="w-5 h-5 text-primary"
                style={{ strokeWidth: 3 }}
              />
            </button>
          )}
        </div>
      </form>
      {searchSuccessful && searchTermRef.current !== '' && (
        <div className="mt-4 mb-4 text-center">
          Showing results for "{searchTermRef.current}"
        </div>
      )}
    </>
  );
}
