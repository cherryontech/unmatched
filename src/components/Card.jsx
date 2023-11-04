// LIBRARY IMPORTS


// LOCAL IMPORTS
import SingleCard from './SingleCard';

import FilterButtonList from './FilterButtonList';


const Card = ({ data , getFilteredCards}) => {


    const details = data.map((detail)=>{
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
    
    <FilterButtonList getFilteredCards={getFilteredCards} />
  

    <div className="w-full py-[10rem] px-4 bg-white ">
      <div className="max-w-[1040px] grid md:grid-cols-3 gap-12 place-items-center m-auto  ">
        {details}
      </div>
    </div>
   </>
  );
};
export default Card;
