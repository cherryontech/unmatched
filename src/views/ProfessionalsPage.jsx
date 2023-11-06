// LIBRARY IMPORTS
import React, { useState, useRef } from 'react';

// LOCAL IMPORTS
import Card from '../components/Card.jsx';
import SearchBar from '../components/SearchBar.jsx';
import FilterButtonList from '../components/FilterButtonList.jsx';
import NoResults from '../components/NoResults.jsx';

export function ProfessionalsPage({ data, setData, fullDataSet,getFilteredCards}) {
  // SET STATES
  const [clearedSearch, setClearedSearch] = useState(true);

  return (
    <div>
      <h1 className='text-4xl font-bold text-center mt-12 text-primary'>You're in good company</h1>
      <SearchBar
        data={data}
        setData={setData}
        fullDataSet={fullDataSet}
        setClearedSearch={setClearedSearch}
      />
      <FilterButtonList getFilteredCards={getFilteredCards} /> 
      {clearedSearch ? <Card data={data} setData={setData} getFilteredCards ={getFilteredCards} /> : <NoResults />}
    </div>
  )
};
