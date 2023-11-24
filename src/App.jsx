// LIBRARY IMPORTS
import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// LOCAL IMPORTS
import { bioData } from './assets/bioData.js';
import { Home, Layout, ProfessionalsPage, BioPage } from './views';
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
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
    
  // SET REFERENCES
  const fullDataSetRef = useRef(bioData);

  return (

    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout changeVoicesColor = {changeVoicesColor } ChangeAboutIcon={ChangeAboutIcon} 
        iconClick={iconClick}/>}>
          <Route index element={<Home fullDataSet={fullDataSetRef.current} changeVoicesColor = {changeVoicesColor } />} />
          <Route
            path="/professionals"
            element={
              <ProfessionalsPage
                data={data}
                setData={setData}
                fullDataSet={fullDataSetRef.current}
                getFilteredCards={getFilteredCards}
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
