import React, { useState, useEffect } from 'react';

function TimerWidget({time}) {
  const [minutes, setMinutes] = useState(time);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setMinutes(minutes => minutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds(seconds => seconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  return (
    <div>
      {minutes === 0 && seconds === 0 ? (
        <div>Время вышло!</div>
      ) : (
        <div className='text-center border'>
            <div className='text-primary fs-1 fw-bolder'>{minutes}:{seconds}</div>
            <div>Осталось <br/>времени</div>
        </div>
      )}
    </div>
  );
}

export default TimerWidget;