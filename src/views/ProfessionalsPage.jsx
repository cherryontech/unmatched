// LIBRARY IMPORTS
import React, { useState } from 'react';

// LOCAL IMPORTS
import Card from '../components/Card.jsx';
import SearchBar from '../components/SearchBar.jsx';
import NoResults from '../components/NoResults.jsx';

export function ProfessionalsPage({ data, setData, fullDataSet }) {
  // SET STATES
  const [clearedSearch, setClearedSearch] = useState(true);

  return (
    <div>
      <h1 className='text-4xl font-bold text-center mt-12 text-primary'>You're in good company</h1>
      <SearchBar data={data} setData={setData} setClearedSearch={setClearedSearch} fullDataSet={fullDataSet} />
      {clearedSearch ? <Card data={data} setData={setData} /> : <NoResults />}
    </div>
  )
};
