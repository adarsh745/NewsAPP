import React, { useState } from 'react'
import { store } from '../App';
import { useContext } from 'react';


export default function RadioButton() {

    const [data,setData]=useContext(store)
    const[ mode, setMode]=useState('light');
  console.log("...................")
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
    
  return (
    <div >
        <div class="form-check form-switch container d-flex justify-content-end my-3" style={{marginLeft:0}}>
                <input onClick={changeColorMode} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                <h1>{data}</h1>
        </div>
    </div>
  )
}
