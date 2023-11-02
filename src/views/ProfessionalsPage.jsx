// LIBRARY IMPORTS
import React, { useState } from 'react';

// LOCAL IMPORTS
import Card from '../components/Card.jsx';
import SearchBar from '../components/SearchBar.jsx';

export function ProfessionalsPage({ data, setData, fullDataSet }) {
  // SET STATES
  const [hasResults, setHasResults] = useState(false);

  return (
    <div>
      <h1 className='text-[30px] font-bold text-center mt-12 text-[#0A2E50]'>You're in good company</h1>
      <SearchBar data={data} setData={setData} hasResults={hasResults} setHasResults={setHasResults} fullDataSet={fullDataSet} />
      <Card data={data} setData={setData} />
    </div>
  )
};
