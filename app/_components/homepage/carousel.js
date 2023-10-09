"use client";
import React, { useState, useMemo } from 'react';
import '../../styles/home.scss';

function Carousel(props) {
  const { items, active } = props;
  const [state, setState] = useState({
    active,
    direction: ''
  });

  const generateItems = useMemo(() => {
    const itemsToRender = [];

    for (let i = state.active - 2; i < state.active + 3; i++) {
      let index = i < 0 ? items.length + i : i % items.length;
      let level = state.active - i;

      itemsToRender.push(<Item key={index} id={items[index]} level={level} />);
    }

    return itemsToRender;
  }, [items, state.active]);

  const moveLeft = () => {
    const newActive = (state.active - 1 + items.length) % items.length;
    setState({
      active: newActive,
      direction: 'left'
    });
  };

  const moveRight = () => {
    const newActive = (state.active + 1) % items.length;
    setState({
      active: newActive,
      direction: 'right'
    });
  };

  return (
    <div className="carousel">
      <div className="arrow arrow-left" onClick={moveLeft}>
        <i className="fi-arrow-left"></i>
      </div>
      <div className={`items ${state.direction}`}>{generateItems}</div>
      <div className="arrow arrow-right" onClick={moveRight}>
        <i className="fi-arrow-right"></i>
      </div>
    </div>
  );
}

function Item(props) {
  const className = `item level${props.level}`;

  return (
    <div className={className}>
      {props.id}
    </div>
  );
}

export default Carousel;
