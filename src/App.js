import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);


    return () => clearInterval(timerId);
  }, []);

  
  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDate = currentTime.toLocaleDateString();

  return (
    <div className="digital-clock">
      <h1>Digital Clock</h1>
      <div className="time">{formattedTime}</div>
      <div className="date">{formattedDate}</div>
    </div>
  );
}

export default App;
