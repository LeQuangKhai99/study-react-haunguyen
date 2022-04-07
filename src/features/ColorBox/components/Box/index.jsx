import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

ColorBox.propTypes = {

};

function ColorBox() {
  const [color, setColor] = useState(() => {
    return localStorage.getItem('box_color') || 'red';
  });

  const handleChangeColor = () => {
    const listColor = ['red', 'blue', 'black', 'green', 'orange'];
    const randomColor = listColor[Math.floor(Math.random() * listColor.length)];
    setColor(randomColor);
    localStorage.setItem('box_color', randomColor);
  }

  return (
    <div className='color-box' style={{ backgroundColor: color }} onClick={handleChangeColor}>
    </div>
  );
}

export default ColorBox;