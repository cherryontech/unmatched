import React from 'react';

const ProfessionalBio = ({ bio, name, fullName }) => {
  const formatParagraphs = text => {
    return text.split('\n').map((paragraph, index) => (
      <p key={index} className="pb-4 text-lg">
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="mb-10">
      {bio.summary && (
        <div className="pb-4">
          <h3 className="text-2xl font-bold">Who is {fullName}?</h3>
          {formatParagraphs(bio.summary)}
        </div>
      )}
      {bio.impact && (
        <div className="pb-4">
          <h3 className="text-2xl font-bold">What is {name}'s impact?</h3>
          {formatParagraphs(bio.impact)}
        </div>
      )}
      {bio.career && (
        <div className="pb-4">
          <h3 className="text-2xl font-bold">
            How did {name} conquer imposter syndrome?
          </h3>
          {formatParagraphs(bio.career)}
        </div>
      )}
    </div>
  );
};

export default ProfessionalBio;
