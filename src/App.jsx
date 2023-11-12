// LIBRARY IMPORTS
import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// LOCAL IMPORTS
import { bioData } from './assets/bioData.js';
import { Home, Layout, ProfessionalsPage, BioPage } from './views';

function App() {
     // SET STATES
   const [data, setData] = useState(bioData);
    
   const getFilteredCards = (tag) =>{
   const newData =bioData.filter((item)=> {

    return item.tags.includes(tag);
    
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

  // SET REFERENCES
  const fullDataSetRef = useRef(bioData);

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
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
