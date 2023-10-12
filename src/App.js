import './App.css';

import React, { useState } from 'react'
import NavBar from './Component/NavBar';
import News   from './Component/News';
import {Routes} from 'react-router'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

const App = ()=>{
  const pageSize=9;
  const apiKey = process.env.REACT_APP_NEWS_API

  

  const[progress,setProgress] = useState(0);

    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
              height={3}
              color='#f11946'
              progress={progress}
           
          />
          <Routes>
            <Route path='/' element={<News setProgress = {setProgress} apiKey = {apiKey} key='general' pageSize={pageSize} country='us' category='general' />}></Route>
            <Route path='/business' element={<News setProgress = {setProgress} apiKey = {apiKey} key='business' pageSize={pageSize} country='us' category='business' />}></Route>
            <Route path='/entertainment' element={<News setProgress = {setProgress} apiKey = {apiKey} key='entertainment' pageSize={pageSize} country='us' category='entertainment' />}></Route>
            <Route path='/health' element={<News setProgress = {setProgress} apiKey = {apiKey} key='health' pageSize={pageSize} country='us' category='health' />}></Route>
            <Route path='/science' element={<News setProgress = {setProgress} apiKey = {apiKey} key='science' pageSize={pageSize} country='us' category='science' />}></Route>
            <Route path='/sports' element={<News setProgress = {setProgress} apiKey = {apiKey} key='sports' pageSize={pageSize} country='us' category='sports' />}></Route>
            <Route path='/technology' element={<News setProgress = {setProgress} apiKey = {apiKey} key='technology' pageSize={pageSize} country='us' category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  
}

export default App;

