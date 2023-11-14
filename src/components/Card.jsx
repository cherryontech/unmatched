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
      <div className="w-full py-[6rem] px-4 bg-white ">
        <div className="max-w-[1040px] grid md:grid-cols-3 gap-12 place-items-center m-auto  ">
          {details}
        </div>
      </div>
    </>
  );
};
export default Card;
