import React from 'react';

const Buttons = ({ onClickHandler, title, value }) => {
  return (
    <button className="btns" value={value} onClick={onClickHandler}>
      {title}
    </button>
  );
};

export default Buttons;
