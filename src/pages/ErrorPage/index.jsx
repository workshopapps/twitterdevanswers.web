import React from 'react';
import Errorpage from '../../assets/Errorpage.JPG';

export default function ErrorPage() {
  return (
    <div>
        <img src={Errorpage} alt='404'/>
        
        <button type='button'>Go Back</button>
    </div>
  )
}

