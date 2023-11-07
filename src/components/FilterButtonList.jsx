import FilterButton from './FilterButton';
import React, { useState } from 'react'
const FilterButtonList = ({getFilteredCards}) => {
    const buttons = [{id:1, name:'LGBTQ+', clicked:false}, {id:2, name:'WOMEN', clicked:false}, {id:3, name:'BLACK', clicked:false},
    {id:4,name:'ASIAN', clicked:false}, {id:5,name:'DISABILITY', clicked:false}, {id:6, name:'LATIN', clicked:false}, {id:7, name:'IMMIGRANT', clicked:false}];
    const[tags, setTags] = useState(buttons);
 
    const changeButtonColor =(id)=>{
        const isClicked = tags.map((button)=>{
        if(button.id === id){
            return {...button, clicked:!(button.clicked)}
        }
        else{
            return button
        }
        }
  
        )
       console.log(isClicked)
       setTags(isClicked);
      }
    
      const buttonTags = tags.map((button)=>{
          return <FilterButton tag= {button.name} getFilteredCards ={getFilteredCards} name = {button.name} id={button.id} key={button.id} changeButtonColor={changeButtonColor} clicked = {button.clicked}/>
           
         });
  return (
    <div className='flex items-center justify-center mt-4 m-auto'>

        {buttonTags}
    </div>
  )
}
export default FilterButtonList