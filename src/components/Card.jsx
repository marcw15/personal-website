// Card.jsx

import React, { useRef } from 'react';
import styles from './styles/Card.module.sass';

const Card = ({ title, body, href }) => {
  const cardRef = useRef();

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const { offsetX, offsetY } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = card;
    const xPos = -((offsetX / offsetWidth - 0.5) * 20);
    const yPos = -((offsetY / offsetHeight - 0.5) * 20);
    card.style.transform = `perspective(800px) rotateY(calc(${xPos} * 1deg)) rotateX(calc(${yPos} * 1deg))`;
  };

  const handleMouseOut = () => {
    const card = cardRef.current;
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <li className={styles['link-card']} ref={cardRef} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
      <a href={href}>
        <h2>
          {title}
          <span>&rarr;</span>
        </h2>
        <p>{body}</p>
      </a>
      <div className={styles['hp-inner']}></div>
    </li>
  );
};

export default Card;


