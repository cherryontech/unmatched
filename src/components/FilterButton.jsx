import { CheckIcon } from '@heroicons/react/24/outline';

const FilterButton = ({
  getFilteredCards,
  clicked,
  name,
  tag,
  id,
  changeButtonColor,
}) => {
  const buttonColor = clicked ? 'bg-[#0A2E50]' : 'bg-white-100 ';
  const textColor = clicked ? 'text-white' : 'text-[#0A2E50]';
  const ticked = clicked ? '' : 'none';

  const handleButtonClick = () => {
    changeButtonColor(id);
    getFilteredCards(tag);
  };

  return (
    <button
      onClick={handleButtonClick}
      className={`${buttonColor} ${textColor} text-[14px] font-medium mr-2 mb-3 px-2.5 py-0.5 rounded-[20px]
   border border-primary p-3 flex items-center justify-between gap-1`}
    >
      {name}
      <span style={{ display: ticked }}>
        <CheckIcon className="w-4" style={{ strokeWidth: 4 }} />
      </span>
    </button>
  );
};

export default FilterButton;
