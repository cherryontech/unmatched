const Button = (props) => {
const buttonColor = props.clicked? 'bg-[#0A2E50]': 'bg-white-100 ';
const textColor = props.clicked?  'text-white':'text-[#0A2E50]';
const ticked = props.clicked? '':'none';

const helper = () =>{
  
  props.changeButtonColor(props.id)
  props.getCards(props.tag)
}

  return (
    <button onClick={()=>helper()} className={`${buttonColor} ${textColor} text-xs font-medium mr-2 px-2.5 py-0.5 rounded-[20px]
     dark:bg-gray-700 dark:text-blue-400 border border-[#0A2E50] p-3`}> {props.name} <span style={{display:ticked}}>&#x2713;</span></button>
  )
}
export default Button