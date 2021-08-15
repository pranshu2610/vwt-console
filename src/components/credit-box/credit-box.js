import React from 'react';
import drop from '../../assets/icons/drop.png';

const CreditBox = ({amount}) => {
  return(
    <div className={`credit-box`}>
      <div className="horizontal left">
        <div className="icon-tray">
          <div className={`icon-shadow large`}>
            <img className="icon-img large" src={drop} alt="W"/>
          </div>
        </div>
        <div className="adjust-title">
          <p className="text-medium">Credit Earned</p>
          <p className="text-large">{amount}</p>
        </div>
      </div>
      <div className="horizontal">
        <div>
          <div className="quick-button">
            <p className="quick-text">Start Pump</p>
          </div>
          <div className="quick-button">
            <p className="quick-text">Start Pump</p>
          </div>
        </div>
        <div>
          <div className="quick-button">
            <p className="quick-text">Start Pump</p>
          </div>
          <div className="quick-button">
            <p className="quick-text">Start Pump</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CreditBox;