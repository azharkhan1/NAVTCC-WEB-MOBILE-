import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function Bulb() {
  const [value, setValue] = useState(true);
  const [temp, setTemp] = useState(22);


  // function abc(){
  //   setValue(false)
  // }  

  function abc() // If we are dependant on previous value, we will use this type of set Value
  {
    setValue((preiousValue) => !preiousValue)
  }

  return (
    <div className={(value === true) ? "light" : "dark"}>
      <div >
        The bulb is {(value === true) ? "Bright" : "dark"}
        <button onClick={abc}>
          Change
      </button>
        <p>{temp}</p>
        <button onClick={() => setTemp(temp + 1)}>Increase Temprature</button>
        <button onClick={() => temp > 0 ? setTemp(temp - 1) : ""}>Decrease Temprature</button>
      </div>
    </div>
  )
}


ReactDOM.render(
  <Bulb />
  ,
  document.getElementById('root')
);
