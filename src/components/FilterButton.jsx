const FilterButton = ({getFilteredCards,clicked, name, tag, id, changeButtonColor}) => {
const buttonColor = clicked? 'bg-[#0A2E50]': 'bg-white-100 ';
const textColor = clicked?  'text-white':'text-[#0A2E50]';
const ticked = clicked? '':'none';

const handleButtonClick = () =>{
  
  changeButtonColor(id)
  getFilteredCards(tag)
}

  return (
    <button onClick={handleButtonClick} className={`${buttonColor} ${textColor} text-xs font-medium mr-2 mb-4 px-2.5 py-0.5 rounded-[20px]
     dark:bg-gray-700 dark:text-blue-400 border border-[#0A2E50] p-3`}> {name} <span style={{display:ticked}}>&#x2713;</span></button>
  )
}
export default FilterButton