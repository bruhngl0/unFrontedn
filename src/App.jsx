import React, { useState, useEffect } from 'react';
import DigitalWatch from './DigitalWatch';

function App() {
  
  const imagesSet1 = ['one.png', 'two.png', 'three.png', 'four.png', 'eleven.png', 'thirteen.png'];
  const imagesSet2 = ['six.png', 'seven.png', 'eight.png', 'nine.png', 'ten.png', 'twelve'];

  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentImageIndex1(prevIndex => (prevIndex + 1) % imagesSet1.length);
    }, 1000);

    const interval2 = setInterval(() => {
      setCurrentImageIndex2(prevIndex => (prevIndex + 1) % imagesSet2.length);
    }, 1000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [currentImageIndex1, currentImageIndex2]);

  return (
    <>
    <div className='hero'>
    <div className='one'>
      <img src={imagesSet1[currentImageIndex1]} alt={`Image 1 Set 1`} className='leftside'/>
    </div>

    <div className='two'>
      <div className='two-one'>
        <button className='two-one-btn'>
          Look-Book
        </button>
     
      </div>
    <img src= "logoblack.png" className='middle'/>
    <DigitalWatch />
    <div className='two-three'>
    <button className='two-three-btn'>
      Shop
    </button>
    </div>
    </div>

<div className='three'>
<img src={imagesSet2[currentImageIndex2]} alt={`Image 1 Set 2`} className='rightside'/>

</div>
</div>
</>
  )
}

export default App
