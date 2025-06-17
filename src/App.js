import './App.css';

import React, { Component,useContext,createContext, useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const store=createContext();


export default function App() {
  
  const[data, setData]=useState("light") 

  
  
    return (
              <store.Provider value={[data,setData]}>
                 <div>
        <BrowserRouter>
        <Navbar ></Navbar>
          <Routes>
            <Route path='/' element={<News key ="general" country="us" category="general" />} />
            <Route path='/sports' element={<News key ="sports" country="us" category="sports" />} />
            <Route path='/business' element={<News key ="business" country="us" category="business" />} />
            <Route path='/entertainment' element={<News key ="entertainment" country="us" category="entertainment" />} />
            <Route path='/health' element={<News key ="health" country="us" category="health" />} />
            <Route path='/science' element={<News key ="science" country="us" category="science" />} />
            <Route path='/technology' element={<News key ="technology" country="us" category="technology" />} />
          </Routes>

        </BrowserRouter>
        
      </div>
              </store.Provider>

     
    )
  }


