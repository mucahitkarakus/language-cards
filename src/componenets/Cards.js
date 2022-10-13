import React, {useState} from 'react';
import "../App.css";

const Cards = ({name, img, options}) => {
  
  const [cart , setCart] = useState(true)

  return (
    <div className='cards' onClick={() => {
      cart ? (
        <div>
          <img src={img} alt="sa" />
          <h2>{name}</h2>
        </div>
      ) : (
        <ul>
          
        </ul>
      )
    }} ></div>
  )
}

export default Cards