import React from 'react';

const ProfessionalBio = ({ bio, name, fullName }) => {
  const formatParagraphs = text => {
    return text.split('\n').map((paragraph, index) => {
      const updatedParagraph = paragraph.replace(
        /<i>(.*?)<\/i>/g,
        (match, p1) => `<i key=${index + p1} className="italic">${p1}</i>`,
      );
      return (
        <p
          key={index}
          className="pb-4 text-lg"
          dangerouslySetInnerHTML={{ __html: updatedParagraph }}
        />
      );
    });
  };

  return (
    <div className="flex flex-col gap-7 mb-20 px-7 md:px-0">
      {bio.summary && (
        <div className="">
          <h2 className="text-2xl font-bold pb-2">Who is {fullName}?</h2>
          {formatParagraphs(bio.summary)}
        </div>
      )}
      {bio.impact && (
        <div>
          <h2 className="text-2xl font-bold pb-2">What is {name}'s impact?</h2>
          {formatParagraphs(bio.impact)}
        </div>
      )}
      {bio.career && (
        <div>
          <h2 className="text-2xl font-bold pb-2">
            How did {name} conquer imposter syndrome?
          </h2>
          {formatParagraphs(bio.career)}
        </div>
      )}
    </div>
  );
};

export default ProfessionalBio;
