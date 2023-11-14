const FilterButton = ({getFilteredCards,clicked, name, tag, id, changeButtonColor}) => {
const buttonColor = clicked? 'bg-[#0A2E50]': 'bg-white-100 ';
const textColor = clicked?  'text-white':'text-[#0A2E50]';
const ticked = clicked? '':'none';

const handleButtonClick = () =>{
  
  changeButtonColor(id)
  getFilteredCards(tag)
}

  return (
    <button onClick={handleButtonClick} className={`${buttonColor} ${textColor} text-[14px] font-medium mr-2 mb-3 px-2.5 py-0.5 rounded-[20px]
   border border-[#0A2E50] p-3`}> {name} <span style={{display:ticked}}>&#x2713;</span></button>
  )
}
export default FilterButton