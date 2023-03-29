
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { Profile } from './Pages/Profile';
import { Dashboard } from './Pages/Dashboard';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


const App = () => {
  return (
    <div className="App"> 
    <Router>
      <Routes>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='*' element={<div><h1>404 PAGE NOT FOUND</h1></div>}></Route>
      </Routes>
    </Router>  
    </div>

  );
};

export default App;
