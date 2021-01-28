import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function Bulb() {
  const [value, setValue] = useState(true);

  // function abc(){
  //   setValue(false)
  // }  

  function abc() // If we are dependant on previous value, we will use this type of set Value
  {
    setValue((preiousValue) => !preiousValue)
  }



  return (
    <div className={(value === true) ? "dark" : "light"}>

  
    <div >
      The bulb is {(value === true) ? "Bright" : "Dark"}
      <button onClick={abc}>
        Change
      </button>
    </div>
    </div>
  )
}


ReactDOM.render(
  <Bulb />
  ,
  document.getElementById('root')
);
