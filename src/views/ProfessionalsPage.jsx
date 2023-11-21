// LIBRARY IMPORTS
import React, { useState, useRef } from 'react';

// LOCAL IMPORTS
import Card from '../components/Card.jsx';
import SearchBar from '../components/SearchBar.jsx';
import FilterButtonList from '../components/FilterButtonList.jsx';
import NoResults from '../components/NoResults.jsx';

export function ProfessionalsPage({
  data,
  setData,
  fullDataSet,
  getFilteredCards,
}) {
  // SET STATES
  const [clearedSearch, setClearedSearch] = useState(true);

  return (
    <div>
      <div className="flex flex-col gap-5 text-center text-primary my-14 mx-auto">
        <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold">
          You're in good company.
        </h1>
        <div className="md:w-[70%] lg:w-[56%] xl:w-[40%] w-[80%] mx-auto lg:text-xl md:text-lg">
          You don’t have to feel like a fraud anymore. <br />
          Learn from STEM leaders who overcame imposter syndrome and emerged as
          trailblazers. Get empowered to do the same.
        </div>
      </div>
      <SearchBar
        data={data}
        setData={setData}
        fullDataSet={fullDataSet}
        setClearedSearch={setClearedSearch}
      />
      <FilterButtonList getFilteredCards={getFilteredCards} />
      <div className="max-w-[1200px] xl:mx-auto md:mx-28 sm:mx-8">
        <div className="lg:text-2xl text-xl font-bold md:float-left text-center text-primary px-4">
            All Search Results
        </div>
        {clearedSearch ? (
          <Card
            data={data}
            setData={setData}
            getFilteredCards={getFilteredCards}
          />
        ) : (
          <NoResults />
        )}
      </div>
    </div>
  );
}
