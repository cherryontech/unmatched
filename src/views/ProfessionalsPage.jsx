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
      <h1 className='text-4xl font-bold text-center mt-12 text-primary'>You're in good company.</h1>
      <div className="w-1/2 mx-auto mt-5 mb-3 text-center text-primary max-w-[40%] text-lg">You don’t have to feel like a fraud anymore. <br/>Learn from STEM leaders who overcame imposter syndrome and emerged as trailblazers. Get empowered to do the same.</div>
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
