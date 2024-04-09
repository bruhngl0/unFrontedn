import React, { useState, useEffect } from 'react';

const DigitalWatch = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDateTime = dateTime.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
   
   
  });


  const formatted = dateTime.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  });

  return (
    <>
    <div className="digital-watch">{formatted} </div>
    <div className="digital-watch-one">{formattedDateTime} </div>
    </>
  );
};

export default DigitalWatch;