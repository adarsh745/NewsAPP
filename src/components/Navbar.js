import React, { useState } from 'react'
import RadioButton from './RadioButton'
import { Link } from 'react-router-dom'
import { store } from '../App';
import { useContext } from 'react';
import LoadingBar from 'react-top-loading-bar';
import Account from './Account';

export default function Navbar() {
   const[ mode, setMode]=useState('light');
   const[data,setData]=useContext(store)

   const[progress, setProgress]=useState(0)
  
              function changeColorMode()
              {
                if(mode==="light")
                {
                  setMode('dark');
                  document.body.style.backgroundColor='black'
                  console.log("dark mode is on")
                  setData('dark')
                }
                else
                {
                  setMode('light')
                  document.body.style.backgroundColor='white'
                  console.log("light mode is on")
                  setData('light')
                }
              }


     function img()
     {
      console.log("img")
     }

  return (
    
    <div>
      <LoadingBar
        color="#f11946"
        progress={10}
        onLoaderFinished={() => setProgress(0)}
      />
       <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href=""></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
                  </li>
                
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/sports" >Sports</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/business" >Business</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/entertainment" >Entertainment</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/science" >Science</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/technology" >Technology</Link> 
                  </li>
          </ul>

        
        </div>

      </div>

           <div class="form-check form-switch container d-flex justify-content-end my-3" style={{marginRight:50}}>
                <input onClick={changeColorMode} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                <label class="form-check-label" for="flexSwitchCheckDefault"></label>
        </div>

              <Account onClick={img}></Account>


</nav>
      
    </div>
  )
}
