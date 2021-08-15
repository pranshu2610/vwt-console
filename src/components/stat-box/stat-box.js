import React from 'react';
import hearts from '../../assets/icons/hearts.png';
import water from '../../assets/icons/water.png';
import horn from '../../assets/icons/horn.png';

const typeDictionary = {
  'used': "Used",
  'reserve': "Reserved",
  'require': "Required"
}

const srcProvider = (type) => {
  if (type==='used') {
    return water
  }
  else if (type==='reserve') {
    return hearts
  }
  else {
    return horn
  }
}
const StatBox = ({type, amount}) => {
  return(
    <div className={`stat-box ${type==='reserve' ? "purple":""}`}>
      <div className="icon-tray">
        <div className={`icon-shadow ${type==='reserve' ? "purple":""}`}>
          <img className="icon-img" src={srcProvider(type)} alt={type}/>
        </div>
      </div>
      <div className="unit-tray">
        <p className="text-large">
        {amount}
        </p>
      </div>
      <div className="type-tray">
        <p className="text-medium">
        {typeDictionary[type]}
        </p>
      </div>
    </div>
  )
}
export default StatBox;