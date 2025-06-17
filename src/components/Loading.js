import React from 'react'
import loading from '../components/loading.gif'

export default function Loading() {
  return (
    <div className='text-center my-3'>
        <img src={loading} alt="Loading..." />
    </div>
  )
}
