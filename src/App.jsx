// LIBRARY IMPORTS
import React, { useState, useRef } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';

// LOCAL IMPORTS
import { bioData } from './assets/bioData.js';
import { Home, Layout, ProfessionalsPage } from './views';


  // SET STATES
  
  function App() {
    const [data, setData] = useState(bioData);
    
  const getCards = (tag) =>{
   const newData =bioData.filter((ele)=> {

    return ele.tags.includes(tag);
    
   });
    setData(newData)
    }
  // SET REFERENCES
  const fullDataSetRef = useRef(bioData);

  return (

    <Router>

      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
						index
						element={
							<Home />
						}
					/>
          <Route
						path="/professionals"
						element={<ProfessionalsPage data={data} setData={setData} fullDataSet={fullDataSetRef.current} getCards={getCards} />}
					/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
