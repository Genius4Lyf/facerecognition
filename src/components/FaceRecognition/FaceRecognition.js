import React, { useState } from 'react';
import './FaceRecognition.css';

function FaceRecognition ({ imageURL, box }) {

  return (
    <div className='center ma' style={{display: 'flex', justifyContent: 'center'}}>
      <div className='absolute mt2'>
        <img className='image-sm' id='inputimage' alt='' src={imageURL} width= '500' height='auto'/>
        <div className='bounding-box bounding-box-sm' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  );
}

export default FaceRecognition;