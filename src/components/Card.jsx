import SingleCard from './SingleCard';

const Card = ({ data }) => {
  const details = data.map(detail => {
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
      <div className="max-w-screen-lg xl:mx-auto md:mx-28 sm:mx-8">
        <div className="lg:text-2xl text-xl font-bold md:float-left text-center text-primary px-4">
          All Search Results
        </div>
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
