import React from 'react';
import '../input.css'

const ItemSlot = ({ slot }) => {
  return (
    <div className="item-slot">
      <div className="slot-title">{slot.charAt(0).toUpperCase() + slot.slice(1)}</div>
      <div className="item-placeholder"></div>
    </div>
  );
};

export default ItemSlot;