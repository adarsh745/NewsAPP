import './App.css';
import React, { useState,createContext } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from './Login/LoginPage';

export const store = createContext();

const AppRouter = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/login' && <Navbar />}
      <Routes>
        <Route path='/login' Component={Login}></Route>
        <Route path='/' element={<News key="general" country="us" category="general" />} />
        <Route path='/sports' element={<News key="sports" country="us" category="sports" />} />
        <Route path='/business' element={<News key="business" country="us" category="business" />} />
        <Route path='/entertainment' element={<News key="entertainment" country="us" category="entertainment" />} />
        <Route path='/health' element={<News key="health" country="us" category="health" />} />
        <Route path='/science' element={<News key="science" country="us" category="science" />} />
        <Route path='/technology' element={<News key="technology" country="us" category="technology" />} />
      </Routes>
    </>
  );
};

export default function App() {
  const [data, setData] = useState("light");

  return (
    <store.Provider value={[data, setData]}>
      <div>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </div>
    </store.Provider>
  );
}
