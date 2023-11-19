import FilterButton from './FilterButton';
import React, { useState } from 'react';

const FilterButtonList = ({ getFilteredCards }) => {
  const buttons = [
    { id: 1, name: 'LGBTQ+', clicked: false },
    { id: 2, name: 'Women', clicked: false },
    { id: 3, name: 'Black', clicked: false },
    { id: 4, name: 'South Asian', clicked: false },
    { id: 5, name: 'Disability', clicked: false },
    { id: 6, name: 'Latinx', clicked: false },
    { id: 8, name: 'Middle Eastern', clicked: false },
    { id: 9, name: 'Indigenous', clicked: false },
  ];
  const [tags, setTags] = useState(buttons);

  const changeButtonColor = id => {
    const isClicked = tags.map(button => {
      if (button.id === id) {
        return { ...button, clicked: !button.clicked };
      } else {
        return { ...button, clicked: false };
      }
    });

    setTags(isClicked);
  };

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
