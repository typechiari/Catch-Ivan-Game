import React, { useState } from 'react';
import './Ivan.css';

//------------
import ivan from "./assets/ivanegg.png"
import ivanC from "./assets/ivanclaus.png"
import ivanE from "./assets/ivanelegante.png"
import ivanL from "./assets/ivanladron.png"
import ivanR from "./assets/ivanreno.png"
import ivanS from "./assets/ivansuperheroe.png"

const faces = [
  {
    image: ivan,
    sound: null,
  },
  {
    image: ivanC,
    sound: null,
  },
  {
    image: ivanE,
    sound: null,
  },
  {
    image: ivanL,
    sound: null,
  },

  {
    image: ivanR,
    sound: null,
  },
  {
    image: ivanS,
    sound: null,
  },
]
//------------

const setRandomFace = () => {
  const randomIndex = Math.floor(Math.random() * faces.length);
  return faces[randomIndex];
};

const setRandomPosition = () => {
  const maxX = window.innerWidth - 100; 
  const maxY = window.innerHeight - 100; 

  const randomXPosition = Math.floor(Math.random() * maxX);
  const randomYPosition = Math.floor(Math.random() * maxY);
  
  return { x: randomXPosition, y: randomYPosition };
};




function Ivan({ incrementCount }) {
  const [face, setFace] = useState(() => setRandomFace());
  const [position, setPosition] = useState(() => setRandomPosition());

  const getEvent = () => {
    setFace(setRandomFace());
    setPosition(setRandomPosition());
    incrementCount()
  };

  return (
      <img 
        src={face.image} 
        alt="" 
        onClick={getEvent} 
        className="size-24 object-contain drop-shadow-xl transition-all" 
        style={{ position: 'absolute', left: position.x, top: position.y }} 
      />
  );
}

export default Ivan;
