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
      <div className="flex flex-col gap-5 text-center text-primary my-14 mx-auto ">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold mt-14">
          You're in good company.
        </h1>
        <div className="md:w-[50%] lg:w-[50%] xl:w-[35%] w-[80%] mx-auto lg:text-xl md:text-lg">
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
  );
}
