// LIBRARY IMPORTS
import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';

// LOCAL IMPORTS
import Card from './components/Card';
import { Home, Layout, ProfessionalsPage } from './views';

function App() {

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
						element={<ProfessionalsPage />}
					/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
