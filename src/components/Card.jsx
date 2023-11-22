import SingleCard from './SingleCard';

const Card = ({ data, limit }) => {
  const slicedData = limit ? data.slice(0, limit) : data;
  const details = slicedData.map(detail => {
    return (
      <SingleCard
        id={detail.id}
        key={detail.id}
        image={detail.image}
        name={detail.fullName}
        body={detail.occupation}
      />
    );
  });

  return (
    <>
      <div className="max-w-[1200px] min-w-[680px] xl:mx-auto md:mx-28 sm:mx-8">
        <div className="w-full py-[2rem] md:py-[4rem] px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 place-items-center m-auto">
            {details}
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
