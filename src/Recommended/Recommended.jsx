import React from 'react';
import './Recommended.css';
import Buttons from '../components/Buttons';

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Buttons
            title="All Products"
            onClickHandler={handleClick}
            value={''}
          />
          <Buttons title="Nike" onClickHandler={handleClick} value={'Nike'} />
          <Buttons
            title="Adidas"
            onClickHandler={handleClick}
            value={'Adidas'}
          />
          <Buttons title="Puma" onClickHandler={handleClick} value={'Puma'} />
          <Buttons title="Vans" onClickHandler={handleClick} value={'Vans'} />
        </div>
      </div>
    </>
  );
};

export default Recommended;
