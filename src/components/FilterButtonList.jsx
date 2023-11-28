import FilterButton from './FilterButton';
import React, { useState } from 'react';

const FilterButtonList = ({ getFilteredCards, changeButtonColor, tags }) => {
  

  const buttonTags = tags.map(button => {
    return (
      <FilterButton
        tag={button.name}
        getFilteredCards={getFilteredCards}
        name={button.name}
        id={button.id}
        key={button.id}
        changeButtonColor={changeButtonColor}
        clicked={button.clicked}
      />
    );
  });
  return (
    <div className="flex flex-wrap items-center justify-center md:justify-start mt-4 mb-14 m-auto px-7 md:px-0 max-w-[500px]">
      {buttonTags}
    </div>
  );
};

export default FilterButtonList;
