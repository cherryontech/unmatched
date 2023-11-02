// LIBRARY IMPORTS
import React, { useState } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';

// LOCAL IMPORTS

export default function SearchBar({ data, setData, hasResults, setHasResults, fullDataSet }) {
  // SET STATES
  const [searchTerm, setSearchTerm] = useState('');

  // EVENT HANDLERS
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleInputSubmit = (event) => {
    event.preventDefault();
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );
    setData(results);
    setHasResults(results.length > 0);
  }
  const handleClearSubmit = () => {
    setData(fullDataSet);
    setSearchTerm('');
    setHasResults(false);
  }


  return (
    <form className=" w-full m-auto max-w-lg mt-2 relative" onSubmit={hasResults ? handleClearSubmit : handleInputSubmit}>
      <label className="label">
        <span className="label-text-alt flex items-start text-[#0A2E50] font-bold">Who can we help you find?</span>
      </label>
      <div className='relative'>
        <input
          type="text"
          placeholder={hasResults ? "Clear your results to search again" : "Search by name"}
          className="input input-bordered w-[1200px] p-4 rounded-xl max-w-lg flex items-center font-bold text-[#0A2E50]"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4" type="submit">
          {hasResults ? <XMarkIcon className="w-5 h-5 text-primary"/> : <MagnifyingGlassIcon className="w-5 h-5 text-primary"/>}
        </button>
      </div>
    </form>
  )
};

