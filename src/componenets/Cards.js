import React, {useState} from 'react';
import "../App.css";

const Cards = ({name, img, options}) => {
  
  const [cart, setCart] = useState(true);

  return (
    <div className='cards' onClick={() => setCart(!cart)} >
      {
        cart ? (
          <div className='sas'>
            <img src={img} alt={name} />
            <h2>{name}</h2>
          </div> ) : (
            <p>
              {options.map((e) => {
                return(
                  <ul>
                    <li>{e}</li>
                  </ul>
                )
              })}
            </p>
          )
        
      }
    </div>
  )
}

export default Cards