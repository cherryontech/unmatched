// LIBRARY IMPORTS
import React from 'react';

export default function NoResults() {
  return (
    <div className="w-full text-center mt-10 mb-[10rem]">
      <span className="text-primary text-2xl font-bold">
        Sorry, no profiles match this search.
        <br />
        <br />
      </span>
      <span className="text-primary text-xl font-normal">
        Try changing your search to show resources for you.
        <br />
        We're always adding new profiles, so check back soon.
      </span>
    </div>
  );
}
