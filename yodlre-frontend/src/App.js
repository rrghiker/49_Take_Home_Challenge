import React, {useState, useEffect} from 'react';
import { BrowserRouter, useHistory } from "react-router-dom";
import './App.css';
import YodlrApi from './api';
import NavBar from './NavBar';
import Routes from './Routes';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        
          <NavBar/>
          <Routes/>
        

      </BrowserRouter>
    </div>
  );
}

export default App;

// store appointment times in UTC format
// convert user time to UTC time before storing 
// Get current user timezone
// Intl.DateTimeFormat().resolvedOptions().timeZone
// how to calculate time once the appointment is retrieved?
// get timezone offset once retrieved
// const date = new Date();
// date.getUTCDate();


// time is output in milliseconds when taking the difference
// 
// const birthday4 = new Date(1995, 11, 17, 3, 24, 0);

// format a 
// https://stackoverflow.com/questions/10645994/how-to-format-a-utc-date-as-a-yyyy-mm-dd-hhmmss-string-using-nodejs

// TIMESTAMP '2004-10-19 10:23:54'
// const utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));