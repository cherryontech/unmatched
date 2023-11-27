// LIBRARY IMPORTS
import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// LOCAL IMPORTS
import { bioData } from './assets/bioData.js';
import { Home, Layout, ProfessionalsPage, BioPage } from './views';
import ScrollToTop from './components/ScrollToTop.jsx';

const buttons = [
  { id: 1, name: 'LGBTQ+', clicked: false },
  { id: 2, name: 'Women', clicked: false },
  { id: 3, name: 'Black', clicked: false },
  { id: 4, name: 'South Asian', clicked: false },
  { id: 5, name: 'Disability', clicked: false },
  { id: 6, name: 'Latinx', clicked: false },
  { id: 8, name: 'Middle Eastern', clicked: false },
  { id: 9, name: 'Indigenous', clicked: false },
];
function App() {
//  SET FILTER TAGS STATE
  const [tags, setTags] = useState(buttons);

  const changeButtonColor = id => {
    const isClicked = tags.map(button => {
      if (button.id === id) {
        return { ...button, clicked: !button.clicked };
      } else {
        return { ...button, clicked: false };
      }
    });

    setTags(isClicked);
  };

  const resetTags = ()=>{
    setTags(buttons)
  }

     // SET   DATA STATES
   const [data, setData] = useState(bioData);

   const getFilteredCards = (tag) =>{
   const newData =bioData.filter((item)=> {

    return item.tags.includes(tag.toUpperCase());

   });

  let sameData = true;
  for( let item of data){
    if (!(newData.includes(item))){
       sameData = false;
    }
  }
  if (!sameData){
      setData(newData)
    }
    else{

    setData(bioData)
    }
    }


  const clicked = {clickedVoiceIcon:false, clickedAboutIcon:false}
  
  // SET NAV ICON STATE
    const [iconClick, seticonClick] = useState(clicked )
  
    const changeVoicesColor = ()=>{
      const isClicked = {...clicked, clickedVoiceIcon:true}
      seticonClick(isClicked);
      
    }
  
    const ChangeAboutIcon = () =>{
      const isClicked = {...clicked, clickedAboutIcon:true}
      seticonClick(isClicked);
    }
  const resetData = () =>{
      setData(bioData);
    }
  // SET REFERENCES
  const fullDataSetRef = useRef(bioData);
  
  return (

    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout changeVoicesColor = {changeVoicesColor } ChangeAboutIcon={ChangeAboutIcon} 
        iconClick={iconClick} resetData={resetData} resetTags={resetTags}/>}>
          <Route index element={<Home fullDataSet={fullDataSetRef.current} changeVoicesColor = {changeVoicesColor } resetData={resetData}
          resetTags={resetTags}/>} />
          <Route
            path="/professionals"
            element={
              <ProfessionalsPage
                data={data}
                setData={setData}
                fullDataSet={fullDataSetRef.current}
                getFilteredCards={getFilteredCards}
                tags={tags}
                changeButtonColor={changeButtonColor}
              />
            }
          />
          <Route
            path="/professionals/:id/:fullname"
            element={<BioPage fullDataSet={fullDataSetRef.current} />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
